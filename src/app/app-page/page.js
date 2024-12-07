import CodeDisplay from "../../components/CodeDisplay";

const AppPage = () => {
  const sections = [
    {
      title: "1. Import Statements",
      code: `
        import { Provider } from 'jotai';
        import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
        import LandingPage from './components/LandingPage';
        import GameBoard from './components/GameBoard';
        import './styles/App.css';
      `,
      explanation:
        "Imports the required libraries and components:\n" +
        "- `Provider` from `jotai` wraps the app to provide state management.\n" +
        "- `Router`, `Routes`, and `Route` from `react-router-dom` handle navigation.\n" +
        "- `LandingPage` and `GameBoard` are the main components of the app.\n" +
        "- The `App.css` file contains global styles for the app.",
    },
    {
      title: "2. Functional Component Declaration",
      code: `function App() { ... }`,
      explanation:
        "The `App` component serves as the root of the application. It uses React Router for navigation and `jotai` for state management.",
    },
    {
      title: "3. Jotai Provider",
      code: `
        <Provider>
          ...
        </Provider>
      `,
      explanation:
        "The `Provider` component from `jotai` wraps the entire application. This enables state management using atoms throughout the app.",
    },
    {
      title: "4. Router Setup",
      code: `
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/game" element={<GameBoard />} />
          </Routes>
        </Router>
      `,
      explanation:
        "The `Router` component wraps the app's routes to handle navigation. Inside it:\n" +
        "- `Routes` contains all the defined routes.\n" +
        "- The `/` route renders the `LandingPage` component.\n" +
        "- The `/game` route renders the `GameBoard` component.",
    },
    {
      title: "5. Export Statement",
      code: `export default App;`,
      explanation:
        "Exports the `App` component so it can be rendered by `index.js` as the entry point of the application.",
    },
  ];

  return (
    <div className="p-8 bg-black text-white">
      <h1 className="text-3xl font-bold mb-6 text-gdgBlue">App.js</h1>
      <p className="mb-4 text-lg text-gdgGreen">
        The `App.js` file serves as the entry point of the application. It sets up the global state using `jotai`, configures routes using `react-router-dom`, and renders the main components of the app.
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

export default AppPage;
