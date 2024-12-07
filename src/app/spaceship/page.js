import React from "react";
import CodeDisplay from "../../components/CodeDisplay";

const SpaceshipPage = () => {
  const sections = [
    {
      title: "1. Import Statements",
      code: `import React from 'react';`,
      explanation: "Imports the React library, which is essential for creating the Spaceship component.",
    },
    {
      title: "2. Functional Component Declaration",
      code: `const Spaceship = ({ position }) => { ... };`,
      explanation:
        "The `Spaceship` component is a functional component that receives a `position` prop. This prop determines the position of the spaceship on the game board.",
    },
    {
      title: "3. Dynamic Styling",
      code: `
        <div 
          className="spaceship"
          style={{ 
            left: \`\${position.x}px\`,
            bottom: \`\${position.y}px\`
          }}
        >
          ...
        </div>
      `,
      explanation:
        "The outer `div` represents the spaceship and is dynamically styled using the `position` prop. The `left` property determines the horizontal position, and the `bottom` property determines the vertical position.",
    },
    {
      title: "4. Internal Structure of the Spaceship",
      code: `
        <div className="windows"></div>
        <div className="windows"></div>
        <div className="thruster"></div>
        <div className="side-thrusters"></div>
      `,
      explanation:
        "These child `div` elements define different parts of the spaceship:\n" +
        "- `windows`: Represents the windows of the spaceship.\n" +
        "- `thruster`: Represents the main thruster at the bottom.\n" +
        "- `side-thrusters`: Represents additional side thrusters for visual details.",
    },
    {
      title: "5. Export Statement",
      code: `export default Spaceship;`,
      explanation: "Exports the `Spaceship` component so it can be imported and used in other parts of the application.",
    },
  ];

  return (
    <div className="p-8 bg-black text-white">
      <h1 className="text-3xl font-bold mb-6 text-gdgBlue">Spaceship Component</h1>
      <p className="mb-4 text-lg text-gdgGreen">
        The Spaceship component represents the player's spaceship on the game board. It includes dynamic styling for positioning and internal elements for visual detail.
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

export default SpaceshipPage;
