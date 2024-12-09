const WorkshopWriteupPage = () => (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-gdgBlue to-black h-56 flex items-center justify-center w-full">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-white">GDG React Game Development Workshop</h1>
        </div>
      </div>
  
      {/* Content Section */}
      <main className="w-full max-w-4xl mx-auto px-4 py-6">
        <h2 className="text-3xl font-bold mb-6 text-gdgYellow">GDG React Game Development Workshop</h2>
        <p className="text-lg text-gray-300 mb-6">
          Embark on an exciting journey of web development with our <span className="font-bold">GDG React Game Development Workshop</span>! This hands-on session will guide you through the core concepts of <span className="font-bold">React.js</span>, equipping you with the skills to create interactive and dynamic web applications. The workshop is structured into two engaging parts, designed to enhance your learning experience step by step.
        </p>
  
        <h3 className="text-2xl font-bold text-gdgGreen mb-4">Part 1: React Basics</h3>
        <p className="text-gray-300 mb-4">
          In <span className="font-bold">Part 1</span>, you'll dive into the basics of React by setting up your development environment, installing essential tools such as <span className="font-bold">Node.js</span> and <span className="font-bold">VS Code</span>, and creating your first <span className="font-bold">Todo List application</span>. You'll learn foundational concepts like React components, JSX (JavaScript XML), and how to manage dynamic state with hooks such as <span className="font-bold">useState</span>. This section ensures that you grasp React's building blocks before moving to more advanced implementations.
        </p>
  
        <h3 className="text-2xl font-bold text-gdgGreen mb-4">Part 2: GDG Space Fighters</h3>
        <p className="text-gray-300 mb-6">
          In <span className="font-bold">Part 2</span>, you’ll put your newfound skills to the test by developing the action-packed game <span className="font-bold">GDG Space Fighters</span>. Guided step by step, you’ll implement interactive gameplay mechanics, animations, and real-time state management using the powerful <span className="font-bold">Jotai</span> library. You'll explore collision detection, game-over logic, and component-driven development to bring your game to life.
        </p>
  
        <h3 className="text-2xl font-bold text-gdgYellow mb-4">What You'll Achieve</h3>
        <p className="text-gray-300">
          By the end of this workshop, you'll not only understand React but also have a fully functional game to showcase your learning. Let’s build, explore, and create together!
        </p>
      </main>
    </div>
  );
  
  export default WorkshopWriteupPage;
  