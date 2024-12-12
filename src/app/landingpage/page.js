import React from "react";
import CodeDisplay from "../../components/CodeDisplay";

const LandingPagePage = () => {
  const sections = [
    {
      title: "1. Import Statements",
      code: `import { useNavigate } from 'react-router-dom';`,
      explanation:
        "This imports `useNavigate` from `react-router-dom`, which is used for navigation between different routes/pages.",
    },
    {
      title: "2. Functional Component Declaration",
      code: `const LandingPage = () => { ... };`,
      explanation:
        "The `LandingPage` component is a functional component that renders the main landing screen for the application. It includes navigation logic and UI elements.",
    },
    {
      title: "3. Navigation Hook",
      code: `const navigate = useNavigate(); 
      return( ... );`,
      explanation:
        "This hook initializes the `navigate` function, which is used to programmatically navigate to different routes in the application.",
    },
    {
      title: "4. Main Layout and Background Effects",
      code: `
        <div className="landing-container">
          <div className="stars"></div>
          <div className="twinkling"></div>
      `,
      explanation:
        "The `landing-container` serves as the main wrapper for the page. The `stars` and `twinkling` elements are added for animated background effects, giving the page a space-themed design.",
    },
    {
      title: "5. Content Section",
      code: `
          <div className="content">
            <h1 className="game-title">GDG Space Fighters</h1>
            <div className="spaceship-icon">▲</div>
            <button 
              className="play-button"
              onClick={() => navigate('/game')}
            >
              Start Mission
            </button>
          </div>
      `,
      explanation:
        "This section contains the main content:\n" +
        "- The title (`GDG Space Fighters`) is displayed prominently.\n" +
        "- A spaceship icon (`▲`) is used for visual flair.\n" +
        "- A 'Start Mission' button navigates to the `/game` route when clicked.",
    },
    {
      title: "6. Export Statement",
      code: `export default LandingPage;`,
      explanation:
        "Exports the `LandingPage` component so it can be used in the application as the main landing page.",
    },
  ];

  return (
    <div className="p-8 bg-black text-white">
      <h1 className="text-3xl font-bold mb-6 text-gdgBlue">Landing Page Component</h1>
      <p className="mb-4 text-lg text-gdgGreen">
        The Landing Page component serves as the entry point to the application. It introduces the user to the game and provides an option to start the mission. Below, we break down its implementation.
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

export default LandingPagePage;
