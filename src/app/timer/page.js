import React from "react";
import CodeDisplay from "../../components/CodeDisplay";

const TimerPage = () => {
  const sections = [
    {
      title: "1. File Declaration and Imports",
      code: `// Timer.jsx
import React, { useEffect } from 'react';
import { useAtom } from 'jotai';
import { timerAtom } from '../store/atom';`,
      explanation:
        "File setup and essential imports:\n" +
        "- React and useEffect for component functionality\n" +
        "- useAtom from Jotai for state management\n" +
        "- timerAtom from store for managing the game timer state",
    },
    {
      title: "2. Component Declaration and State Setup",
      code: `const Timer = ({ gameOver }) => {
  const [time, setTime] = useAtom(timerAtom);`,
      explanation:
        "Component initialization:\n" +
        "- Accepts gameOver prop to control timer state\n" +
        "- Uses Jotai's useAtom to manage timer state\n" +
        "- Destructures both time value and setter function",
    },
    {
      title: "3. Timer Logic Implementation",
      code: `  useEffect(() => {
    if (!gameOver) {
      const timer = setInterval(() => {
        setTime(prev => prev + 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [gameOver, setTime]);`,
      explanation:
        "Timer implementation using useEffect:\n" +
        "- Checks if game is active (!gameOver)\n" +
        "- Sets up interval to increment time every second\n" +
        "- Uses functional update pattern for reliable state updates\n" +
        "- Includes cleanup function to prevent memory leaks\n" +
        "- Dependencies track game state and time setter",
    },
    {
      title: "4. Time Formatting Function",
      code: `  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return \`\${minutes.toString().padStart(2, '0')}:\${remainingSeconds.toString().padStart(2, '0')}\`;
  };`,
      explanation:
        "Time formatting utility function:\n" +
        "- Converts total seconds into minutes and seconds\n" +
        "- Uses Math.floor for minute calculation\n" +
        "- Uses modulo operator for remaining seconds\n" +
        "- Pads numbers with leading zeros for consistent format\n" +
        "- Returns time in MM:SS format",
    },
    {
      title: "5. Component Render",
      code: `  return (
    <div className="timer">
        Time: {formatTime(time)}
    </div>
  );
};

export default Timer;`,
      explanation:
        "Component rendering:\n" +
        "- Renders a div with 'timer' class for styling\n" +
        "- Displays formatted time using the formatTime function\n" +
        "- Exports component for use in GameBoard",
    }
  ];

  return (
    <div className="p-8 bg-black text-white">
      <h1 className="text-3xl font-bold mb-6 text-gdgBlue">Timer Component</h1>
      <p className="mb-4 text-lg text-gdgGreen">
        The Timer component manages and displays the game duration in minutes and seconds format. It automatically starts when the game begins and stops when the game ends.
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

export default TimerPage;
