import CodeDisplay from '../../components/CodeDisplay';
import React from "react";

const GameBoardPage = () => {
    const sections = [
        {
          title: "1. Client-Side Setup and Core Imports",
          code: `"use client"
      import React, { useEffect, useCallback, useState } from 'react';
      import { useAtom } from 'jotai';
      import { 
        playerPositionAtom, scoreAtom, gameOverAtom, 
        obstaclesAtom, bulletsAtom, timerAtom 
      } from '../store/atom';`,
          explanation: "Enables client-side rendering in Next.js and imports essential React hooks and Jotai for atomic state management. The 'use client' directive is crucial for interactive components that need browser APIs.",
        },
        {
          title: "2. Component Imports",
          code: `import Bullet from './Bullet';
      import Spaceship from './Spaceship';
      import Obstacle from './Obstacle';
      import GameOverMenu from './GameOverMenu';
      import CollisionManager from './CollisionManager';
      import Timer from './Timer';`,
          explanation: "Imports modular game components. Each component handles a specific game element, following the single responsibility principle.",
        },
        {
          title: "3. State Initialization",
          code: `const GameBoard = () => {
        const [playerPosition, setPlayerPosition] = useAtom(playerPositionAtom);
        const [score, setScore] = useAtom(scoreAtom);
        const [gameOver, setGameOver] = useAtom(gameOverAtom);
        const [obstacles, setObstacles] = useAtom(obstaclesAtom);
        const [bullets, setBullets] = useAtom(bulletsAtom);
        const [, setTime] = useAtom(timerAtom);`,
          explanation: "Initializes game state using Jotai atoms. Each piece of state is managed independently, allowing for granular updates and optimized rendering.",
        },
        {
          title: "4. Responsive Container Setup",
          code: `const [containerDimensions, setContainerDimensions] = useState({
          width: 800,
          height: 600
        });
      
        useEffect(() => {
          const updateDimensions = () => {
            const width = Math.min(window.innerWidth * 0.95, 800);
            const height = Math.min(window.innerHeight * 0.9, 600);
            setContainerDimensions({ width, height });
          };
      
          window.addEventListener('resize', updateDimensions);
          updateDimensions();
          return () => window.removeEventListener('resize', updateDimensions);
        }, []);`,
          explanation: "Manages responsive game container sizing. Dynamically adjusts to window size while maintaining maximum dimensions. Includes cleanup to prevent memory leaks.",
        },
        {
          title: "5. Movement Constants and Calculations",
          code: `const MOVE_DISTANCE = containerDimensions.width * 0.025;
      const MAX_POSITION = containerDimensions.width - 80;
      const BULLET_OFFSET_X = containerDimensions.width * 0.029;
      const BULLET_START_Y = containerDimensions.height * 0.88;`,
          explanation: "Defines movement-related constants using relative measurements. These ensure consistent gameplay feel across different screen sizes.",
        },
        {
          title: "6. Keyboard Input Handler",
          code: `const handleKeyPress = useCallback((e) => {
          if (gameOver) return;
          
          switch(e.key) {
            case 'ArrowLeft':
              setPlayerPosition(prev => ({
                ...prev,
                x: Math.max(0, prev.x - MOVE_DISTANCE)
              }));
              break;
            case 'ArrowRight':
              setPlayerPosition(prev => ({
                ...prev,
                x: Math.min(MAX_POSITION, prev.x + MOVE_DISTANCE)
              }));
              break;
            case ' ':
              setBullets(prev => [...prev, {
                id: Date.now(),
                x: playerPosition.x + BULLET_OFFSET_X,
                y: BULLET_START_Y
              }]);
              break;
            default:
              break;
          }
        }, [playerPosition, gameOver, containerDimensions, setPlayerPosition, setBullets]);`,
          explanation: "Handles keyboard input for player movement and shooting. Uses memoization to prevent unnecessary re-renders and includes boundary checking.",
        },
        {
          title: "7. Game Loop Logic",
          code: `useEffect(() => {
          window.addEventListener('keydown', handleKeyPress);
          
          const BULLET_SPEED = containerDimensions.height * 0.017;
          const OBSTACLE_SPEED = containerDimensions.height * 0.005;
          
          const gameLoop = setInterval(() => {
            if (!gameOver) {
              // Bullet movement
              setBullets(prev => 
                prev
                  .map(bullet => ({ 
                    ...bullet, 
                    y: bullet.y - BULLET_SPEED 
                  }))
                  .filter(bullet => bullet.y > 0)
              );
      
              // Obstacle management
              setObstacles(prev => {
                const updated = prev
                  .map(obstacle => ({
                    ...obstacle,
                    y: obstacle.y + OBSTACLE_SPEED
                  }))
                  .filter(obstacle => obstacle.y < containerDimensions.height);
      
                if (Math.random() < 0.05) {
                  updated.push({
                    id: Date.now(),
                    x: Math.random() * (containerDimensions.width - 20),
                    y: -20
                  });
                }
                return updated;
              });
            }
          }, 50);
      
          return () => {
            window.removeEventListener('keydown', handleKeyPress);
            clearInterval(gameLoop);
          };
        }, [gameOver, handleKeyPress, containerDimensions, setBullets, setObstacles]);`,
          explanation: "Implements the main game loop with relative speed calculations. Manages bullet and obstacle movement, spawning new obstacles randomly. Includes proper cleanup of event listeners and intervals.",
        },
        {
          title: "8. Game Reset Handler",
          code: `const handleRestart = useCallback(() => {
          setGameOver(false);
          setScore(0);
          setTime(0);
          setObstacles([]);
          setBullets([]);
          setPlayerPosition({ 
            x: containerDimensions.width / 2 - 40, 
            y: 20 
          });
        }, [containerDimensions, setGameOver, setScore, setTime, setObstacles, setBullets, setPlayerPosition]);`,
          explanation: "Handles game reset functionality. Resets all game state to initial values and positions player relative to container size.",
        },
        {
          title: "9. Game Board Rendering",
          code: `return (
          <div 
            className="game-container"
            style={{
              width: \`\${containerDimensions.width}px\`,
              height: \`\${containerDimensions.height}px\`
            }}
          >
            <Timer gameOver={gameOver} />
            <div className="score-display">Score: {score}</div>
            
            {obstacles.map(obstacle => (
              <Obstacle 
                key={obstacle.id} 
                x={obstacle.x} 
                y={obstacle.y} 
              />
            ))}
            
            {bullets.map(bullet => (
              <Bullet 
                key={bullet.id} 
                x={bullet.x} 
                y={bullet.y} 
                id={bullet.id}
              />
            ))}
            
            <Spaceship position={playerPosition} />
            
            <CollisionManager
              obstacles={obstacles}
              playerPosition={playerPosition}
              setGameOver={setGameOver}
              gameOver={gameOver}
              containerDimensions={containerDimensions}
            />
            
            {gameOver && (
              <GameOverMenu 
                score={score} 
                onRestart={handleRestart}
              />
            )}
          </div>
        );`,
          explanation: "Renders the complete game interface with dynamic sizing. Components are positioned relative to container dimensions. Includes score display, game elements, and conditional rendering of the game over menu.",
        }
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
