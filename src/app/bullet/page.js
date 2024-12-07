import React from "react";
import CodeDisplay from "../../components/CodeDisplay";

const BulletPage = () => {
  const sections = [
    {
      title: "1. Import Statements",
      code: `
        import React from 'react';
        import { useEffect } from 'react';
        import { useAtom } from 'jotai';
        import { bulletsAtom, obstaclesAtom, scoreAtom } from '../store/atom';
      `,
      explanation:
        "This imports:\n" +
        "- `React` and `useEffect` for creating the component and handling side effects.\n" +
        "- `useAtom` from `jotai` to manage state atoms.\n" +
        "- `bulletsAtom`, `obstaclesAtom`, and `scoreAtom` to track the game's state.",
    },
    {
      title: "2. Functional Component Declaration",
      code: `const Bullet = ({ x, y, id }) => { ... };`,
      explanation:
        "The `Bullet` component is a functional component that represents a single bullet on the game board. It receives `x` and `y` for positioning and `id` to uniquely identify the bullet.",
    },
    {
      title: "3. State Atoms and Collisions",
      code: `
        const [, setObstacles] = useAtom(obstaclesAtom);
        const [, setBullets] = useAtom(bulletsAtom);
        const [, setScore] = useAtom(scoreAtom);
      `,
      explanation:
        "These `useAtom` hooks allow the `Bullet` component to interact with the global state:\n" +
        "- `obstaclesAtom`: Tracks obstacles on the game board.\n" +
        "- `bulletsAtom`: Tracks bullets currently in play.\n" +
        "- `scoreAtom`: Tracks the player's score.",
    },
    {
      title: "4. Collision Detection Logic",
      code: `
        useEffect(() => {
          const checkBulletCollision = () => {
            setObstacles(prevObstacles => 
              prevObstacles.filter(obstacle => {
                const collision = 
                  x < obstacle.x + 20 &&
                  x + 4 > obstacle.x &&
                  y < obstacle.y + 20 &&
                  y + 10 > obstacle.y;
                
                if (collision) {
                  setBullets(prev => prev.filter(bullet => bullet.id !== id));
                  setScore(prev => prev + 10);
                  return false; 
                }
                return true;
              })
            );
          };

          const collisionInterval = setInterval(checkBulletCollision, 16);
          return () => clearInterval(collisionInterval);
        }, [x, y, id]);
      `,
      explanation:
        "The `useEffect` hook runs a collision detection function at regular intervals (every 16ms):\n" +
        "- It checks if the bullet collides with any obstacle.\n" +
        "- If a collision is detected:\n" +
        "  1. The bullet is removed from the game state.\n" +
        "  2. The player's score is incremented by 10.\n" +
        "- Obstacles that are hit are removed from the game board.",
    },
    {
      title: "5. Rendering the Bullet",
      code: `
        return (
          <div 
            className="bullet"
            style={{ 
              left: \`\${x}px\`,
              top: \`\${y}px\`
            }}
          />
        );
      `,
      explanation:
        "The `Bullet` component is rendered as a `div` element, styled dynamically based on its `x` and `y` coordinates. The `className` and `style` ensure the bullet is visually represented on the game board.",
    },
    {
      title: "6. Export Statement",
      code: `export default Bullet;`,
      explanation: "Exports the `Bullet` component so it can be used in other parts of the application.",
    },
  ];

  return (
    <div className="p-8 bg-black text-white">
      <h1 className="text-3xl font-bold mb-6 text-gdgBlue">Bullet Component</h1>
      <p className="mb-4 text-lg text-gdgGreen">
        The Bullet component represents bullets fired by the spaceship, including logic for detecting collisions with obstacles and updating the player's score. Below, we break down its implementation.
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

export default BulletPage;
