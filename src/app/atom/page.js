import React from "react";
import CodeDisplay from "../../components/CodeDisplay";

const AtomPage = () => {
  const sections = [
    {
      title: "1. Import Statements",
      code: `import { atom } from 'jotai';`,
      explanation:
        "Imports the `atom` function from `jotai`, a lightweight state management library. Atoms represent individual units of application state.",
    },
    {
      title: "2. Player Position Atom",
      code: `export const playerPositionAtom = atom({ x: 375, y: 20 });`,
      explanation:
        "This atom tracks the player's spaceship position as an object with `x` (horizontal) and `y` (vertical) coordinates.",
    },
    {
      title: "3. Score Atom",
      code: `export const scoreAtom = atom(0);`,
      explanation: "This atom keeps track of the player's current score, initialized to `0`.",
    },
    {
      title: "4. Game Over Atom",
      code: `export const gameOverAtom = atom(false);`,
      explanation:
        "This atom tracks whether the game is over. It is a boolean value, initialized to `false`.",
    },
    {
      title: "5. Obstacles Atom",
      code: `export const obstaclesAtom = atom([]);`,
      explanation:
        "This atom stores an array of obstacles currently on the game board. Obstacles are added and removed dynamically during gameplay.",
    },
    {
      title: "6. Bullets Atom",
      code: `export const bulletsAtom = atom([]);`,
      explanation:
        "This atom stores an array of bullets fired by the player's spaceship. It is updated as bullets are created and removed.",
    },
    {
      title: "7. Collision State Atom",
      code: `export const collisionStateAtom = atom(false);`,
      explanation:
        "This atom tracks whether a collision is currently happening. It is used to avoid multiple collision detections for the same event.",
    },
    {
      title: "8. Bullet Hits Atom",
      code: `export const bulletHitsAtom = atom([]);`,
      explanation:
        "This atom stores information about successful bullet hits. It helps in tracking and processing bullet collisions with obstacles.",
    },
  ];

  return (
    <div className="p-8 bg-black text-white">
      <h1 className="text-3xl font-bold mb-6 text-gdgBlue">Atom.js</h1>
      <p className="mb-4 text-lg text-gdgGreen">
        The `atom.js` file defines the global state of the game using the `jotai` library. These atoms manage the spaceship's position, game state, score, bullets, obstacles, and collisions.
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
