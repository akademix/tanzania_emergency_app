"use client"

export default function SomePage() {
  return (
    <div>
      <h1>Some Page</h1>
      <button 
        onClick={() => console.log('clicked')} 
        className="bg-blue-500 text-white px-4 py-2"
      >
        Click Me
      </button>
    </div>
  )
} 