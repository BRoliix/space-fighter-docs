import React from "react";
import CodeDisplay from "../../components/CodeDisplay";

const CollisionManagerPage = () => {
  const sections = [
    {
      title: "1. Import Statements",
      code: `
        import { useEffect } from 'react';
        import { useAtom } from 'jotai';
        import { collisionStateAtom } from '../store/atom';
      `,
      explanation:
        "This imports:\n" +
        "- `useEffect` from React for handling side effects.\n" +
        "- `useAtom` from `jotai` to manage the `collisionStateAtom` state atom.\n" +
        "- `collisionStateAtom` to track if a collision is currently happening.",
    },
    {
      title: "2. Functional Component Declaration",
      code: `
        const CollisionManager = ({ 
          obstacles, 
          playerPosition, 
          setGameOver,
          gameOver 
        }) => { ... };
      `,
      explanation:
        "The `CollisionManager` component receives props for the list of obstacles, the player's position, and functions to handle the game-over state. It uses these to check for collisions and update the game state accordingly.",
    },
    {
      title: "3. Reset Collision State",
      code: `
        useEffect(() => {
          if (!gameOver) {
            setIsColliding(false);
          }
        }, [gameOver, setIsColliding]);
      `,
      explanation:
        "This `useEffect` hook resets the collision state when the game is not over. It ensures that the collision detection logic starts fresh for a new game.",
    },
    {
      title: "4. Collision Detection Logic",
      code: `
        useEffect(() => {
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
        }, [obstacles, playerPosition, isColliding, setGameOver, setIsColliding]);
      `,
      explanation:
        "This `useEffect` hook sets up the main collision detection logic:\n" +
        "- It iterates over all obstacles to check if they overlap with the player's spaceship.\n" +
        "- The spaceship's width and height are taken into account for precise collision detection.\n" +
        "- If a collision is detected, the game is marked as over, and the collision state is updated.\n" +
        "- The logic runs every 16ms using `setInterval` for smooth updates.",
    },
    {
      title: "5. Null Render",
      code: `return null;`,
      explanation:
        "The `CollisionManager` does not render any UI elements. It runs in the background to manage collisions and update the game state.",
    },
    {
      title: "6. Export Statement",
      code: `export default CollisionManager;`,
      explanation: "Exports the `CollisionManager` component so it can be used in the game board or other parts of the application.",
    },
  ];

  return (
    <div className="p-8 bg-black text-white">
      <h1 className="text-3xl font-bold mb-6 text-gdgBlue">Collision Manager Component</h1>
      <p className="mb-4 text-lg text-gdgGreen">
        The Collision Manager component handles the logic for detecting collisions between obstacles and the spaceship. Below, we break down its implementation.
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
