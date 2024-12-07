import Link from "next/link";

const WorkshopDocumentationPage = () => (
  <div className="min-h-screen bg-black text-white">
    {/* Hero Section */}
    <div className="relative bg-gradient-to-b from-gdgBlue to-black h-56 flex items-center justify-center w-full">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-white">
          GDG React Game Development Workshop
        </h1>
        <p className="text-lg mt-2 text-gray-200">
          Step-by-step guide to building the GDG Space Fighters game.
        </p>
      </div>
    </div>

    {/* Documentation Content */}
    <main className="w-full max-w-4xl mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold mb-6 text-gdgYellow">
        Workshop Overview
      </h2>
      <p className="mb-4 text-lg text-gray-300">
        In this workshop, we will build the GDG Space Fighters game using React,
        step by step. By the end of this session, you will have learned how to:
      </p>
      <ul className="list-disc pl-8 mb-8 text-gray-300">
        <li>Set up a React project for game development.</li>
        <li>Use components, hooks, and state management to build a game.</li>
        <li>Implement collision detection, animations, and interactive gameplay.</li>
      </ul>

      <h2 className="text-3xl font-bold mb-6 text-gdgYellow">Agenda</h2>
      <ul className="list-disc pl-8 mb-8 text-gray-300">
        <li><strong>10 minutes</strong>: Project setup and understanding the tools.</li>
        <li><strong>30 minutes</strong>: Step-by-step implementation of game components.</li>
        <li><strong>10 minutes</strong>: Adding interactivity and debugging live.</li>
        <li><strong>10 minutes</strong>: Q&A and wrap-up.</li>
      </ul>

      <h2 className="text-3xl font-bold mb-6 text-gdgYellow">Step-by-Step Guide</h2>

      {/* Step 1: Setting up the Project */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-gdgGreen">Step 1: Setting up the Project</h3>
        <p className="text-gray-300 mb-4">
          Start by creating a new React project and installing the necessary dependencies.
        </p>
        <ol className="list-decimal pl-8 text-gray-300">
          <li>
            Create a new React project:
            <pre className="bg-gray-800 text-white p-4 rounded mt-2">
              npx create-react-app gdg-space-fighters
            </pre>
          </li>
          <li>
            Navigate to the project directory:
            <pre className="bg-gray-800 text-white p-4 rounded mt-2">
              cd gdg-space-fighters
            </pre>
          </li>
          <li>
            Install Jotai for state management:
            <pre className="bg-gray-800 text-white p-4 rounded mt-2">
              npm install jotai
            </pre>
          </li>
        </ol>
        <p className="text-gray-300 mt-4">
          Next, open the project in your favorite code editor, and you’re ready to start coding!
        </p>
      </section>

      {/* Step 2: Creating the GameBoard */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-gdgGreen">Step 2: Creating the GameBoard</h3>
        <p className="text-gray-300 mb-4">
          The GameBoard is the central component that renders the game environment. 
          Navigate to the <Link href="/gameboard" className="text-gdgBlue">GameBoard Component</Link> page in the documentation for code details.
        </p>
        <ul className="list-disc pl-8 text-gray-300">
          <li>
            Create a new file named <code>GameBoard.jsx</code>.
          </li>
          <li>
            Copy and paste the code provided in the GameBoard documentation page.
          </li>
          <li>
            Understand how it uses React state and Jotai atoms to manage obstacles, bullets, and score.
          </li>
        </ul>
      </section>

      {/* Step 3: Adding the Spaceship Component */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-gdgGreen">Step 3: Adding the Spaceship Component</h3>
        <p className="text-gray-300 mb-4">
          The spaceship is controlled by the player and interacts with obstacles and bullets.
          Follow the instructions on the <Link href="/spaceship" className="text-gdgRed">Spaceship Component</Link> documentation page.
        </p>
        <ul className="list-disc pl-8 text-gray-300">
          <li>Create a new file named <code>Spaceship.jsx</code>.</li>
          <li>Implement the component to dynamically update its position.</li>
          <li>Learn how keyboard input is used to move the spaceship.</li>
        </ul>
      </section>

      {/* Step 4: Adding Obstacles and Collision Detection */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-gdgGreen">Step 4: Adding Obstacles and Collision Detection</h3>
        <p className="text-gray-300 mb-4">
          Obstacles make the game challenging, and collision detection determines game over conditions.
          Visit the <Link href="/obstacle" className="text-gdgBlue">Obstacle Component</Link> and 
          <Link href="/collisionmanager" className="text-gdgYellow">Collision Manager</Link> pages for detailed explanations.
        </p>
        <ul className="list-disc pl-8 text-gray-300">
          <li>Implement the <code>Obstacle.jsx</code> component.</li>
          <li>Understand how collision detection is handled using <code>CollisionManager.jsx</code>.</li>
        </ul>
      </section>

      {/* Step 5: Adding Bullets */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-gdgGreen">Step 5: Adding Bullets</h3>
        <p className="text-gray-300 mb-4">
          Bullets allow the player to interact with obstacles. Follow the 
          <Link href="/bullet" className="text-gdgRed">Bullet Component</Link> page for guidance.
        </p>
        <ul className="list-disc pl-8 text-gray-300">
          <li>Implement the <code>Bullet.jsx</code> component.</li>
          <li>Connect the bullets to the spaceship controls for firing.</li>
        </ul>
      </section>

      {/* Step 6: Adding Game Over and Restart Logic */}
      <section className="mb-8">
        <h3 className="text-2xl font-bold text-gdgGreen">Step 6: Adding Game Over and Restart Logic</h3>
        <p className="text-gray-300 mb-4">
          The <Link href="/gameovermenu" className="text-gdgBlue">Game Over Menu</Link> handles the end of the game and restarting the game. Implement this logic in the <code>GameOverMenu.jsx</code> component.
        </p>
      </section>

      {/* Step 7: Wrapping Up */}
      <section>
        <h3 className="text-2xl font-bold text-gdgGreen">Wrapping Up</h3>
        <p className="text-gray-300">
          Once all components are in place, your game is ready! challenge them to make thier own game
        </p>
        
      </section>
    </main>
  </div>
);

export default WorkshopDocumentationPage;
