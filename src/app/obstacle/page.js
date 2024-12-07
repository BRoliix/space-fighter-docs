import React from "react";
import CodeDisplay from "../../components/CodeDisplay";

const ObstaclePage = () => {
  const sections = [
    {
      title: "1. Import Statements",
      code: `import React from 'react';`,
      explanation:
        "Imports the React library, which is essential for creating the Obstacle component.",
    },
    {
      title: "2. Functional Component Declaration",
      code: `const Obstacle = ({ x, y }) => { ... };`,
      explanation:
        "The `Obstacle` component is a functional component that takes `x` and `y` as props. These props determine the position of the obstacle on the game board.",
    },
    {
      title: "3. Dynamic Styling for Positioning",
      code: `
        <div 
          className="obstacle"
          style={{ 
            left: \`\${x}px\`,
            top: \`\${y}px\`
          }}
        />
      `,
      explanation:
        "The `style` prop dynamically positions the obstacle using the `x` and `y` values passed as props. The `left` and `top` CSS properties ensure the obstacle appears at the correct location on the game board.",
    },
    {
      title: "4. Export Statement",
      code: `export default Obstacle;`,
      explanation:
        "Exports the `Obstacle` component so it can be used in other parts of the application, such as the game board.",
    },
  ];

  return (
    <div className="p-8 bg-black text-white">
      <h1 className="text-3xl font-bold mb-6 text-gdgBlue">Obstacle Component</h1>
      <p className="mb-4 text-lg text-gdgGreen">
        The Obstacle component represents obstacles that appear on the game board, which the player's spaceship must avoid. Below, we break down its implementation.
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

export default ObstaclePage;
