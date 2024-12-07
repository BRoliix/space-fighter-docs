import CodeDisplay from '../../components/CodeDisplay';
import React from "react";

const GameBoardPage = () => {
  const sections = [
    {
      title: "1. Import Statements",
      code: `import { useAtom } from 'jotai';\nimport { useCallback, useEffect } from 'react';\nimport { bulletsAtom, gameOverAtom, obstaclesAtom, playerPositionAtom, scoreAtom } from '../store/atom';\nimport '../styles/App.css';\nimport Bullet from './Bullet';\nimport CollisionManager from './CollisionManager';\nimport GameOverMenu from './GameOverMenu';\nimport Obstacle from './Obstacle';\nimport Spaceship from './Spaceship';`,
      explanation:
        "This section imports all necessary libraries, components, and atoms. `jotai` is used for state management, and custom components like `Spaceship`, `Obstacle`, and `Bullet` handle the visual and functional parts of the game.",
    },
    {
      title: "2. Declaring Atoms and State Variables",
      code: `const [playerPosition, setPlayerPosition] = useAtom(playerPositionAtom);\nconst [score, setScore] = useAtom(scoreAtom);\nconst [gameOver, setGameOver] = useAtom(gameOverAtom);\nconst [obstacles, setObstacles] = useAtom(obstaclesAtom);\nconst [bullets, setBullets] = useAtom(bulletsAtom);`,
      explanation:
        "Here, the `useAtom` hook from `jotai` is used to manage the game's state. These atoms store the state for the player's position, score, game status, obstacles, and bullets.",
    },
    {
      title: "3. Handling Keyboard Input",
      code: `const handleKeyPress = useCallback((e) => {\n  if (gameOver) return;\n  const MOVE_DISTANCE = 20;\n  const MAX_POSITION = 750;\n  switch(e.key) {\n    case 'ArrowLeft':\n      setPlayerPosition(prev => ({ ...prev, x: Math.max(0, prev.x - MOVE_DISTANCE) }));\n      break;\n    case 'ArrowRight':\n      setPlayerPosition(prev => ({ ...prev, x: Math.min(MAX_POSITION, prev.x + MOVE_DISTANCE) }));\n      break;\n    case ' ':\n      setBullets(prev => [...prev, { id: Date.now(), x: playerPosition.x + 23, y: 530 }]);\n      break;\n    default:\n      break;\n  }\n}, [playerPosition, gameOver, setPlayerPosition, setBullets]);`,
      explanation:
        "This function handles keyboard input for moving the spaceship and firing bullets. It listens for 'ArrowLeft', 'ArrowRight', and 'Space' keys. The position of the player is updated, and a new bullet is added when the space bar is pressed.",
    },
    {
      title: "4. Game Loop and Effects",
      code: `useEffect(() => {\n  window.addEventListener('keydown', handleKeyPress);\n  const gameLoop = setInterval(() => {\n    if (!gameOver) {\n      // Move bullets\n      setBullets(prev => prev.map(bullet => ({ ...bullet, y: bullet.y - 10 })).filter(bullet => bullet.y > 0));\n      // Move obstacles\n      setObstacles(prev => {\n        const updated = prev.map(obstacle => ({ ...obstacle, y: obstacle.y + 3 })).filter(obstacle => obstacle.y < 600);\n        if (Math.random() < 0.05) {\n          updated.push({ id: Date.now(), x: Math.random() * 780, y: -20 });\n        }\n        return updated;\n      });\n      setScore(prev => prev + 1);\n    }\n  }, 50);\n  return () => {\n    window.removeEventListener('keydown', handleKeyPress);\n    clearInterval(gameLoop);\n  };\n}, [gameOver, handleKeyPress, setBullets, setObstacles, setScore]);`,
      explanation:
        "The `useEffect` hook sets up the game loop, moving bullets and obstacles at regular intervals and updating the score. It also listens for keyboard events and cleans up resources when the component unmounts.",
    },
    {
      title: "5. Rendering the Game Board",
      code: `<div className="game-container">\n  <div className="score-display">Score: {score}</div>\n  {obstacles.map(obstacle => (\n    <Obstacle key={obstacle.id} x={obstacle.x} y={obstacle.y} />\n  ))}\n  {bullets.map(bullet => (\n    <Bullet key={bullet.id} x={bullet.x} y={bullet.y} />\n  ))}\n  <Spaceship position={playerPosition} />\n  <CollisionManager\n      obstacles={obstacles}\n      playerPosition={playerPosition}\n      setGameOver={setGameOver}\n      gameOver={gameOver}\n    />\n  {gameOver && (\n    <GameOverMenu \n      score={score} \n      onRestart={() => {\n        setGameOver(false);\n        setScore(0);\n        setObstacles([]);\n        setBullets([]);\n        setPlayerPosition({ x: 375, y: 20 });\n      }} \n    />\n  )}\n</div>`,
      explanation:
        "This section renders the game board, including the score display, obstacles, bullets, spaceship, and collision manager. When the game is over, a `GameOverMenu` is displayed with an option to restart the game.",
    },
  ];

  return (
    <div className="p-8 bg-black text-white">
      <h1 className="text-3xl font-bold mb-6 text-gdgBlue">GameBoard Component</h1>
      <p className="mb-4 text-lg text-gdgGreen">
        The GameBoard component is responsible for rendering the main game area,
        managing obstacles, and tracking the score. Below, we break down each part of the component.
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

export default GameBoardPage;
