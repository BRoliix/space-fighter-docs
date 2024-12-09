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
          Master React Basics and Build the GDG Space Fighters Game!
        </p>
      </div>
    </div>

    {/* Documentation Content */}
    <main className="w-full max-w-4xl mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold mb-6 text-gdgYellow">
        Workshop Overview
      </h2>
      <p className="mb-4 text-lg text-gray-300">
        This workshop is divided into two parts:
      </p>
      <ul className="list-disc pl-8 mb-8 text-gray-300">
        <li>
          <strong>Part 1</strong>: Learn React Basics - Environment setup and creating a Todo List application.
        </li>
        <li>
          <strong>Part 2</strong>: Build the GDG Space Fighters game using React.
        </li>
      </ul>

      <h2 className="text-3xl font-bold mb-6 text-gdgYellow">Agenda</h2>
      <ul className="list-disc pl-8 mb-8 text-gray-300">
        <li><strong>30 minutes</strong>: React Basics - Environment setup and Todo List application.</li>
        <li><strong>30 minutes</strong>: GDG Space Fighters game development.</li>
      </ul>

      {/* Part 1: React Basics */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gdgGreen">
          Part 1: React Basics - Environment Setup and Todo List Application
        </h2>
        <p className="text-gray-300 mb-4">
          In the first part of the workshop, we will cover:
        </p>
        <ul className="list-disc pl-8 mb-4 text-gray-300">
          <li>Setting up the development environment.</li>
          <li>Understanding React basics through a simple Todo List application.</li>
        </ul>

        <h3 className="text-2xl font-bold text-gdgYellow mb-4">Step 1: Setting Up the Environment</h3>
        <p className="text-gray-300 mb-4">
          We will guide attendees through the setup process:
        </p>
        <ol className="list-decimal pl-8 text-gray-300">
          <li>
            <strong>Install Node.js:</strong> Visit the 
            <a href="https://nodejs.org" className="text-gdgBlue" target="_blank" rel="noopener noreferrer"> Node.js website</a> and download the latest LTS version.
          </li>
          <li>
            <strong>Install VS Code:</strong> Download Visual Studio Code from the 
            <a href="https://code.visualstudio.com/" className="text-gdgBlue" target="_blank" rel="noopener noreferrer"> official website</a> and install it.
          </li>
          
        </ol>

        <h3 className="text-2xl font-bold text-gdgYellow mt-8 mb-4">Step 2: Creating a React Project</h3>
        <ol className="list-decimal pl-8 text-gray-300">
          <li>
            <strong>Create a new React project:</strong>
            <pre className="bg-gray-800 text-white p-4 rounded mt-2">
              npx create-react-app todo-app
            </pre>
            Explain that this command bootstraps a new React project with all the necessary setup.
          </li>
          <li>
            <strong>Navigate to the project directory:</strong>
            <pre className="bg-gray-800 text-white p-4 rounded mt-2">
              cd todo-app
            </pre>
          </li>
          <li>
            Open the project in VS Code:
            <pre className="bg-gray-800 text-white p-4 rounded mt-2">
              code .
            </pre>
          </li>
        </ol>

        <h3 className="text-2xl font-bold text-gdgYellow mt-8 mb-4">Step 3: Building the Todo List</h3>
        <p className="text-gray-300 mb-4">
          In this step, we will implement the Todo List application:
        </p>
        <ul className="list-disc pl-8 text-gray-300">
          <li>Create a new file named <code>Todo.jsx</code>.</li>
          <li>Write a functional React component to manage tasks using <code>useState</code>.</li>
          <li>Explain the JSX structure and rendering logic for the Todo List.</li>
          <li>Add functionality to add tasks and render the list dynamically.</li>
        </ul>

        <p className="text-gray-300 mt-4">
          At the end of this step, attendees will have a working Todo List application!
        </p>
      </section>

      {/* Part 2: Game Development with React */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-gdgGreen">
          Part 2: GDG Space Fighters Game Development
        </h2>
        <p className="text-gray-300 mb-4">
          In the second part, we will build the GDG Space Fighters game step by step.
        </p>
      </section>
        {/* Replacing with your updated Part 2 */}
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
