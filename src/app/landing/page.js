import Link from "next/link";

const LandingPage = () => (
  <div className="min-h-screen bg-black text-white">
    {/* Hero Section */}
    <div className="relative bg-gradient-to-b from-gdgBlue to-black h-56 flex items-center justify-center w-full">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-white">
          Welcome to GDG Workshop
        </h1>
        <p className="text-lg mt-2 text-gray-200">
          Build, Learn, and Explore React for Game Development
        </p>
      </div>
    </div>

    {/* Main Content */}
    <main className="w-full max-w-4xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Spaceship Component */}
        <Link
          href="/spaceship"
          className="block p-4 bg-gdgRed text-white rounded-lg shadow-md hover:shadow-lg hover:bg-red-700 transition-transform transform hover:-translate-y-1 duration-300"
        >
          Spaceship Component
        </Link>

        {/* GameBoard Component */}
        <Link
          href="/gameboard"
          className="block p-4 bg-gdgBlue text-white rounded-lg shadow-md hover:shadow-lg hover:bg-blue-700 transition-transform transform hover:-translate-y-1 duration-300"
        >
          GameBoard Component
        </Link>

        {/* Collision Manager */}
        <Link
          href="/collisionmanager"
          className="block p-4 bg-gdgYellow text-black rounded-lg shadow-md hover:shadow-lg hover:bg-yellow-600 transition-transform transform hover:-translate-y-1 duration-300"
        >
          Collision Manager
        </Link>

        {/* Game Over Menu */}
        <Link
          href="/gameovermenu"
          className="block p-4 bg-gray-800 text-white rounded-lg shadow-md hover:shadow-lg hover:bg-gray-600 transition-transform transform hover:-translate-y-1 duration-300"
        >
          Game Over Menu
        </Link>

        {/* Landing Page */}
        <Link
          href="/landingpage"
          className="block p-4 bg-gdgGreen text-white rounded-lg shadow-md hover:shadow-lg hover:bg-green-600 transition-transform transform hover:-translate-y-1 duration-300"
        >
          Landing Page
        </Link>

        {/* Obstacle Component */}
        <Link
          href="/obstacle"
          className="block p-4 bg-gdgBlue text-white rounded-lg shadow-md hover:shadow-lg hover:bg-blue-700 transition-transform transform hover:-translate-y-1 duration-300"
        >
          Obstacle Component
        </Link>

        {/* Bullet Component */}
        <Link
          href="/bullet"
          className="block p-4 bg-gdgRed text-white rounded-lg shadow-md hover:shadow-lg hover:bg-red-700 transition-transform transform hover:-translate-y-1 duration-300"
        >
          Bullet Component
        </Link>

        {/* useGameLoop Hook */}
        <Link
          href="/usegameloop"
          className="block p-4 bg-gray-800 text-white rounded-lg shadow-md hover:shadow-lg hover:bg-gray-600 transition-transform transform hover:-translate-y-1 duration-300"
        >
          useGameLoop Hook
        </Link>

        {/* Atom.js */}
        <Link
          href="/atom"
          className="block p-4 bg-gdgYellow text-black rounded-lg shadow-md hover:shadow-lg hover:bg-yellow-600 transition-transform transform hover:-translate-y-1 duration-300"
        >
          Atom.js
        </Link>

        {/* App.js */}
        <Link
          href="/app-page"
          className="block p-4 bg-gdgBlue text-white rounded-lg shadow-md hover:shadow-lg hover:bg-blue-700 transition-transform transform hover:-translate-y-1 duration-300"
        >
          App.js
        </Link>

        {/* App.css */}
        <Link
          href="/app-css"
          className="block p-4 bg-gdgGreen text-white rounded-lg shadow-md hover:shadow-lg hover:bg-green-600 transition-transform transform hover:-translate-y-1 duration-300"
        >
          App.css
        </Link>
      </div>
    </main>
  </div>
);

export default LandingPage;
