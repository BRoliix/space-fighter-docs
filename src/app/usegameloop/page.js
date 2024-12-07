import CodeDisplay from "../../components/CodeDisplay";

const UseGameLoopPage = () => {
  const sections = [
    {
      title: "1. Import Statements",
      code: `import { useEffect, useRef } from 'react';`,
      explanation:
        "Imports the `useEffect` and `useRef` hooks from React. `useEffect` manages the lifecycle of the game loop, and `useRef` provides mutable references for storing state between renders.",
    },
    {
      title: "2. Function Declaration",
      code: `const useGameLoop = (callback, fps = 60) => { ... };`,
      explanation:
        "The `useGameLoop` hook is a custom React hook that executes a callback function at a specified frame rate (default is 60 frames per second).",
    },
    {
      title: "3. useRef Setup",
      code: `
        const requestRef = useRef();
        const previousTimeRef = useRef();
        const interval = 1000 / fps;
      `,
      explanation:
        "- `requestRef`: Stores the animation frame request ID to control the loop.\n" +
        "- `previousTimeRef`: Tracks the previous timestamp to calculate the delta time between frames.\n" +
        "- `interval`: Determines the time interval between frames based on the desired FPS.",
    },
    {
      title: "4. Animation Function",
      code: `
        const animate = time => {
          if (previousTimeRef.current !== undefined) {
            const deltaTime = time - previousTimeRef.current;
            if (deltaTime >= interval) {
              callback(deltaTime);
              previousTimeRef.current = time;
            }
          } else {
            previousTimeRef.current = time;
          }
          requestRef.current = requestAnimationFrame(animate);
        };
      `,
      explanation:
        "The `animate` function is called on every animation frame:\n" +
        "- Calculates `deltaTime`, the time since the last frame.\n" +
        "- If `deltaTime` exceeds the interval, it executes the `callback` and updates the `previousTimeRef`.\n" +
        "- Requests the next frame to keep the loop running.",
    },
    {
      title: "5. useEffect Setup",
      code: `
        useEffect(() => {
          requestRef.current = requestAnimationFrame(animate);
          return () => cancelAnimationFrame(requestRef.current);
        }, []);
      `,
      explanation:
        "- `useEffect` starts the animation loop by calling `requestAnimationFrame`.\n" +
        "- Cleans up by canceling the animation frame request when the component unmounts, ensuring no memory leaks.",
    },
    {
      title: "6. Export Statement",
      code: `export default useGameLoop;`,
      explanation: "Exports the `useGameLoop` hook so it can be used in other components to manage game logic.",
    },
  ];

  return (
    <div className="p-8 bg-black text-white">
      <h1 className="text-3xl font-bold mb-6 text-gdgBlue">useGameLoop Hook</h1>
      <p className="mb-4 text-lg text-gdgGreen">
        The `useGameLoop` hook is a custom React hook that manages a smooth game loop by executing logic at a specified frame rate. Below, we break down its implementation.
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

export default UseGameLoopPage;
