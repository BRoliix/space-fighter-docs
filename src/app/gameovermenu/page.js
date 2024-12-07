import React from "react";
import CodeDisplay from "../../components/CodeDisplay";

const GameOverMenuPage = () => {
  const sections = [
    {
      title: "1. Import Statements",
      code: `import React from 'react';`,
      explanation:
        "Imports the React library, which is required to create the GameOverMenu component.",
    },
    {
      title: "2. Functional Component Declaration",
      code: `const GameOverMenu = ({ score, onRestart }) => { ... };`,
      explanation:
        "The `GameOverMenu` component is a functional component that takes two props:\n" +
        "- `score`: Displays the player's final score.\n" +
        "- `onRestart`: A function that resets the game when triggered.",
    },
    {
      title: "3. Rendering the Game Over Screen",
      code: `
        return (
          <div className="game-over">
            <h2>Game Over!</h2>
            <p>Final Score: {score}</p>
            <button className="button" onClick={onRestart}>
              Play Again
            </button>
          </div>
        );
      `,
      explanation:
        "This renders the Game Over screen:\n" +
        "- A message (`Game Over!`) to notify the player.\n" +
        "- The player's final score (`score`).\n" +
        "- A button (`Play Again`) to restart the game. Clicking the button triggers the `onRestart` function passed as a prop.",
    },
    {
      title: "4. Export Statement",
      code: `export default GameOverMenu;`,
      explanation:
        "Exports the `GameOverMenu` component so it can be used in the main game logic or other parts of the application.",
    },
  ];

  return (
    <div className="p-8 bg-black text-white">
      <h1 className="text-3xl font-bold mb-6 text-gdgBlue">Game Over Menu Component</h1>
      <p className="mb-4 text-lg text-gdgGreen">
        The Game Over Menu component displays the player's final score and provides an option to restart the game. Below, we break down its implementation.
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

export default GameOverMenuPage;
