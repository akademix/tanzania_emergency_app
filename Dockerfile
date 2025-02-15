# syntax = docker/dockerfile:1
ARG NODE_VERSION=20.18.0
FROM node:${NODE_VERSION}-slim AS base
LABEL fly_launch_runtime="Next.js"

WORKDIR /app
ENV NODE_ENV="production"

FROM base AS build

# Install packages needed to build node modules and clean up
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y \
    build-essential \
    node-gyp \
    pkg-config \
    python-is-python3 \
    && rm -rf /var/lib/apt/lists/*

# Install node modules with increased timeout
ENV npm_config_fetch_timeout=600000
COPY package-lock.json package.json ./
RUN npm ci --include=dev --verbose

# Copy application code
COPY . .

# Build application
RUN npx next build

# Remove development dependencies
RUN npm prune --omit=dev

FROM base

# Copy built application
COPY --from=build /app /app

# Copy and set up entrypoint script
COPY docker-entrypoint.js ./docker-entrypoint.js
RUN chmod +x ./docker-entrypoint.js

# Set environment variables
EXPOSE 3000
ENV PORT=3000
ENV NODE_ENV=production

ENTRYPOINT ["./docker-entrypoint.js"]
CMD ["npm", "run", "start"]