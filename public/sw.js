// Enhanced Service Worker for First aid PWA
const CACHE_NAME = 'first-aid-app-v2';
const STATIC_CACHE = 'first-aid-static-v2';
const DYNAMIC_CACHE = 'first-aid-dynamic-v2';

// Critical resources to cache immediately
const STATIC_ASSETS = [
  '/',
  '/guide',
  '/offline.html',
  '/manifest.json',
  '/logo.svg',
  '/splash/splash.png'
];

// Resources to cache dynamically
const DYNAMIC_ASSETS = [
  '/guide/',
  '/responder-form',
  '/first-aid-locations',
  '/offline'
];

// Audio and video files patterns
const MEDIA_PATTERNS = [
  /\/audio\//,
  /\/videos\//,
  /\.(mp3|wav|mp4|webm|ogg)$/
];

// Install event - cache critical resources
self.addEventListener('install', (event) => {
  console.log('[SW] Installing service worker...');
  event.waitUntil(
    Promise.all([
      caches.open(STATIC_CACHE).then((cache) => {
        console.log('[SW] Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      }),
      // Skip waiting to activate immediately
      self.skipWaiting()
    ])
  );
});

// Activate event - clean up old caches and claim clients
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating service worker...');
  event.waitUntil(
    Promise.all([
      // Clean up old caches
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('[SW] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      }),
      // Claim all clients
      self.clients.claim()
    ])
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip cross-origin requests except for specific APIs
  if (url.origin !== location.origin && !url.hostname.includes('nominatim.openstreetmap.org')) {
    return;
  }

  event.respondWith(handleFetch(request));
});

async function handleFetch(request) {
  const url = new URL(request.url);
  
  try {
    // Strategy 1: Cache First for static assets
    if (STATIC_ASSETS.some(asset => url.pathname === asset) || 
        url.pathname.includes('/_next/static/')) {
      return await cacheFirst(request, STATIC_CACHE);
    }

    // Strategy 2: Stale While Revalidate for media files
    if (MEDIA_PATTERNS.some(pattern => pattern.test(url.pathname))) {
      return await staleWhileRevalidate(request, DYNAMIC_CACHE);
    }

    // Strategy 3: Network First for API calls and dynamic content
    if (url.pathname.startsWith('/api/') || 
        url.hostname.includes('nominatim.openstreetmap.org')) {
      return await networkFirst(request, DYNAMIC_CACHE);
    }

    // Strategy 4: Stale While Revalidate for pages
    if (DYNAMIC_ASSETS.some(asset => url.pathname.startsWith(asset)) ||
        url.pathname.includes('/guide/')) {
      return await staleWhileRevalidate(request, DYNAMIC_CACHE);
    }

    // Default: Network First
    return await networkFirst(request, DYNAMIC_CACHE);

  } catch (error) {
    console.error('[SW] Fetch error:', error);
    
    // Return offline page for navigation requests
    if (request.mode === 'navigate') {
      const offlineResponse = await caches.match('/offline.html');
      return offlineResponse || new Response('Offline', { status: 503 });
    }
    
    // Return cached version if available
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Return basic offline response
    return new Response('Resource not available offline', { 
      status: 503,
      headers: { 'Content-Type': 'text/plain' }
    });
  }
}

// Cache First Strategy
async function cacheFirst(request, cacheName) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }
  
  const networkResponse = await fetch(request);
  if (networkResponse.ok) {
    const cache = await caches.open(cacheName);
    cache.put(request, networkResponse.clone());
  }
  return networkResponse;
}

// Network First Strategy
async function networkFirst(request, cacheName) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    throw error;
  }
}

// Stale While Revalidate Strategy
async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(request);
  
  // Fetch in background to update cache
  const fetchPromise = fetch(request).then(networkResponse => {
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  }).catch(() => {
    // Ignore network errors for background updates
  });
  
  // Return cached version immediately if available
  if (cachedResponse) {
    // Don't wait for background update
    fetchPromise;
    return cachedResponse;
  }
  
  // Wait for network if no cache available
  return await fetchPromise;
}

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  console.log('[SW] Background sync:', event.tag);
  
  if (event.tag === 'emergency-report') {
    event.waitUntil(syncEmergencyReports());
  }
});

async function syncEmergencyReports() {
  // Handle offline emergency reports when connection is restored
  try {
    const reports = await getStoredReports();
    for (const report of reports) {
      await submitReport(report);
      await removeStoredReport(report.id);
    }
  } catch (error) {
    console.error('[SW] Sync failed:', error);
  }
}

// Push notification handling
self.addEventListener('push', (event) => {
  console.log('[SW] Push received');
  
  const options = {
    body: event.data ? event.data.text() : 'Emergency alert',
    icon: '/logo.svg',
    badge: '/logo.svg',
    vibrate: [200, 100, 200],
    tag: 'emergency-alert',
    requireInteraction: true,
    actions: [
      {
        action: 'view',
        title: 'View Details'
      },
      {
        action: 'dismiss',
        title: 'Dismiss'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification('First Aid Alert', options)
  );
});

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  console.log('[SW] Notification clicked:', event.action);
  
  event.notification.close();
  
  if (event.action === 'view') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Helper functions for offline storage
async function getStoredReports() {
  // Implementation would depend on your storage strategy
  return [];
}

async function submitReport(report) {
  // Implementation for submitting reports
  return fetch('/api/reports', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(report)
  });
}

async function removeStoredReport(reportId) {
  // Implementation for removing stored reports
  console.log('Removing stored report:', reportId);
} 