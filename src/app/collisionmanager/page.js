import React from "react";
import CodeDisplay from "../../components/CodeDisplay";

const CollisionManagerPage = () => {
  const sections = [
    {
      title: "1. File Declaration and Imports",
      code: `import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { collisionStateAtom } from '../store/atom';`,
      explanation:
        "The file starts with:\n" +
        "- Component file declaration\n" +
        "- `useEffect` hook import for managing side effects\n" +
        "- `useAtom` from Jotai for state management\n" +
        "- `collisionStateAtom` for tracking collision state",
    },
    {
      title: "2. Component Declaration and Props",
      code: `const CollisionManager = ({ 
  obstacles, 
  playerPosition, 
  setGameOver,
  gameOver 
}) => {
  const [isColliding, setIsColliding] = useAtom(collisionStateAtom);`,
      explanation:
        "Component setup:\n" +
        "- Declares CollisionManager component with destructured props\n" +
        "- `obstacles`: Array of current obstacles\n" +
        "- `playerPosition`: Current position of the spaceship\n" +
        "- `setGameOver`: Function to end the game\n" +
        "- `gameOver`: Current game state\n" +
        "- Initializes collision state using Jotai's useAtom",
    },
    {
      title: "3. Collision State Reset Effect",
      code: `  useEffect(() => {
    if (!gameOver) {
      setIsColliding(false);
    }
  }, [gameOver, setIsColliding]);`,
      explanation:
        "First useEffect hook:\n" +
        "- Resets collision state when game is active\n" +
        "- Runs when gameOver state changes\n" +
        "- Dependencies include gameOver and setIsColliding",
    },
    {
      title: "4. Main Collision Detection Effect",
      code: `  useEffect(() => {
    const checkCollisions = () => {
      obstacles.forEach(obstacle => {
        const spaceshipWidth = 50;
        const spaceshipHeight = 50;
        
        const playerCollision = 
          obstacle.x < (playerPosition.x + spaceshipWidth) &&
          (obstacle.x + 20) > playerPosition.x &&
          obstacle.y > (600 - spaceshipHeight - 20) &&
          (obstacle.y + 20) > (600 - spaceshipHeight);
        
        if (playerCollision && !isColliding) {
          setIsColliding(true);
          setGameOver(true);
        }
      });
    };

    const collisionInterval = setInterval(checkCollisions, 16);
    return () => clearInterval(collisionInterval);
  }, [obstacles, playerPosition, isColliding, setGameOver, setIsColliding]);`,
      explanation:
        "Main collision detection logic:\n" +
        "- Defines checkCollisions function that:\n" +
        "  • Sets spaceship dimensions (50x50)\n" +
        "  • Checks each obstacle for overlap with spaceship\n" +
        "  • Uses precise collision detection formula\n" +
        "  • Updates game state on collision\n" +
        "- Sets up 60 FPS interval (16ms)\n" +
        "- Includes cleanup function\n" +
        "- Dependencies track all relevant state changes",
    },
    {
      title: "5. Component Return and Export",
      code: `  return null;
};

export default CollisionManager;`,
      explanation:
        "Component completion:\n" +
        "- Returns null as this is a logical component with no UI\n" +
        "- Exports the component for use in other parts of the application",
    }
  ];

  return (
    <div className="p-8 bg-black text-white">
      <h1 className="text-3xl font-bold mb-6 text-gdgBlue">Collision Manager Component</h1>
      <p className="mb-4 text-lg text-gdgGreen">
        The Collision Manager component handles collision detection between obstacles and the spaceship. It runs at 60 FPS and manages game state accordingly.
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

export default CollisionManagerPage;
