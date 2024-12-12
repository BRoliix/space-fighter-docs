import React from "react";
import CodeDisplay from "../../components/CodeDisplay";

const BulletPage = () => {
  const sections = [
    {
      title: "1. File Declaration and Imports",
      code: `import { useAtom } from 'jotai';
import React, { useEffect } from 'react';
import { bulletsAtom, obstaclesAtom, scoreAtom } from '../store/atom';`,
      explanation:
        "File setup and imports:\n" +
        "- `useAtom` from Jotai for state management\n" +
        "- React and useEffect for component functionality\n" +
        "- Three state atoms for managing bullets, obstacles, and score",
    },
    {
      title: "2. Component Declaration and State Setup",
      code: `const Bullet = ({ x, y, id }) => {
  const [, setObstacles] = useAtom(obstaclesAtom);
  const [, setBullets] = useAtom(bulletsAtom);
  const [, setScore] = useAtom(scoreAtom);`,
      explanation:
        "Component initialization:\n" +
        "- Receives x, y coordinates and unique id as props\n" +
        "- Sets up state setters using Jotai's useAtom\n" +
        "- Only destructures setters as we don't need the state values directly",
    },
    {
      title: "3. Collision Detection Effect",
      code: `  useEffect(() => {
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
  }, [x, y, id, setBullets, setObstacles, setScore]);`,
      explanation:
        "Collision detection implementation:\n" +
        "- Sets up continuous collision checking at 60 FPS (16ms intervals)\n" +
        "- Checks for overlap between bullet and obstacles using precise dimensions:\n" +
        "  • Bullet: 4px width, 10px height\n" +
        "  • Obstacle: 20px width, 20px height\n" +
        "- On collision:\n" +
        "  • Removes the bullet from game state\n" +
        "  • Increases score by 10 points\n" +
        "  • Removes the hit obstacle\n" +
        "- Includes cleanup function to prevent memory leaks\n" +
        "- Dependencies track position changes and state setters",
    },
    {
      title: "4. Component Render",
      code: `  return (
    <div 
      className="bullet"
      style={{ 
        left: \`\${x}px\`,
        top: \`\${y}px\`
      }}
    />
  );
};

export default Bullet;`,
      explanation:
        "Component rendering:\n" +
        "- Renders a div with 'bullet' class for styling\n" +
        "- Positions bullet using absolute positioning with x, y coordinates\n" +
        "- Exports component for use in GameBoard",
    }
  ];

  return (
    <div className="p-8 bg-black text-white">
      <h1 className="text-3xl font-bold mb-6 text-gdgBlue">Bullet Component</h1>
      <p className="mb-4 text-lg text-gdgGreen">
        The Bullet component manages individual bullets in the game, handling their display and collision detection with obstacles. Each bullet can destroy obstacles and increase the player's score.
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
