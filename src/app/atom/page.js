import React from "react";
import CodeDisplay from "../../components/CodeDisplay";

const AtomPage = () => {
  const sections = [
    {
      title: "1. File Declaration and Import",
      code: `import { atom } from 'jotai';`,
      explanation:
        "File setup:\n" +
        "- Imports the atom function from Jotai\n" +
        "- Jotai provides primitive atoms for building state management",
    },
    {
      title: "2. Player Position State",
      code: `export const playerPositionAtom = atom({ x: 375, y: 20 });`,
      explanation:
        "Player position management:\n" +
        "- Tracks spaceship's position on the game board\n" +
        "- x: 375 centers the spaceship horizontally (based on game width)\n" +
        "- y: 20 positions the spaceship near the bottom of the screen",
    },
    {
      title: "3. Game Score State",
      code: `export const scoreAtom = atom(0);`,
      explanation:
        "Score tracking:\n" +
        "- Initializes game score to 0\n" +
        "- Updated when player successfully hits obstacles\n" +
        "- Used for displaying current score and final results",
    },
    {
      title: "4. Game State Management",
      code: `export const gameOverAtom = atom(false);`,
      explanation:
        "Game state control:\n" +
        "- Tracks whether the game is active or over\n" +
        "- false: game is running\n" +
        "- true: game has ended (collision occurred)",
    },
    {
      title: "5. Obstacles Management",
      code: `export const obstaclesAtom = atom([]);`,
      explanation:
        "Obstacles tracking:\n" +
        "- Stores array of all active obstacles\n" +
        "- Each obstacle contains position and ID\n" +
        "- Dynamically updated during gameplay\n" +
        "- Empty array initially, populated as game progresses",
    },
    {
      title: "6. Bullets Management",
      code: `export const bulletsAtom = atom([]);`,
      explanation:
        "Bullets tracking:\n" +
        "- Manages all active bullets on screen\n" +
        "- Each bullet contains position and unique ID\n" +
        "- Updated when player shoots or bullets hit obstacles\n" +
        "- Empty array initially",
    },
    {
      title: "7. Collision State",
      code: `export const collisionStateAtom = atom(false);`,
      explanation:
        "Collision detection state:\n" +
        "- Tracks active collisions\n" +
        "- Prevents multiple collision detections\n" +
        "- Reset when game restarts\n" +
        "- false by default",
    },
    {
      title: "8. Bullet Hits Tracking",
      code: `export const bulletHitsAtom = atom([]);`,
      explanation:
        "Bullet hits management:\n" +
        "- Records successful bullet hits\n" +
        "- Used for score calculation\n" +
        "- Helps manage obstacle removal\n" +
        "- Empty array initially",
    },
    {
      title: "9. Game Timer State",
      code: `export const timerAtom = atom(0);`,
      explanation:
        "Game timer management:\n" +
        "- Tracks game duration in seconds\n" +
        "- Starts at 0 when game begins\n" +
        "- Increments every second during gameplay\n" +
        "- Used for displaying game duration",
    }
  ];

  return (
    <div className="p-8 bg-black text-white">
      <h1 className="text-3xl font-bold mb-6 text-gdgBlue">Game State Management (atom.js)</h1>
      <p className="mb-4 text-lg text-gdgGreen">
        This file defines the global state management for the space shooter game using Jotai atoms. 
        Each atom represents a specific piece of game state, from player position to game timer.
      </p>
      <div className="space-y-8">
        {sections.map((section, index) => (
          <CodeDisplay
            key={index}
            title={section.title}
            code={section.code}
            explanation={section.explanation}
          />
        ))}
      </div>
      <div className="mt-8">
        <a
          href="/landing"
          className="inline-block bg-gdgRed text-white py-2 px-4 rounded hover:bg-red-700"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default AtomPage;
