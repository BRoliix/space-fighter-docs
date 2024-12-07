import React from "react";
import CodeDisplay from "../../components/CodeDisplay";

const AppCssPage = () => {
  const sections = [
    {
      title: "1. Global Styles",
      code: `
        /* Global Styles */
        body {
          margin: 0;
          padding: 0;
          background: black;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
        }
      `,
      explanation:
        "Defines the global styles for the app's body:\n" +
        "- Removes default margins and padding.\n" +
        "- Sets a black background and centers the content vertically and horizontally.\n" +
        "- Ensures a minimum height of 100% of the viewport.",
    },
    {
      title: "2. GDG Colors",
      code: `
        /* GDG Colors */
        :root {
          --gdg-blue: #4285F4;
          --gdg-red: #EA4335;
          --gdg-yellow: #FBBC04;
          --gdg-green: #34A853;
        }
      `,
      explanation:
        "Defines CSS variables for GDG brand colors, enabling consistent styling throughout the app.",
    },
    {
      title: "3. Game Container",
      code: `
        /* Game Container */
        .game-container {
          width: 800px;
          height: 600px;
          background: #000033;
          position: relative;
          overflow: hidden;
          border: 2px solid #ffffff;
        }
      `,
      explanation:
        "Styles the main game container:\n" +
        "- Fixed width and height to contain the game area.\n" +
        "- A dark blue background to resemble space.\n" +
        "- Adds a white border and hides overflowing content.",
    },
    {
      title: "4. Score Display",
      code: `
        /* Score Display */
        .score-display {
          position: absolute;
          top: 10px;
          right: 10px;
          color: white;
          background: rgba(66, 133, 244, 0.2);
          padding: 5px 10px;
          border-radius: 5px;
          font-size: 20px;
        }
      `,
      explanation:
        "Styles the score display, positioning it at the top-right corner of the game container.\n" +
        "The semi-transparent background highlights the score against the game area.",
    },
    {
      title: "5. Spaceship",
      code: `
        /* Spaceship */
        .spaceship {
          width: 80px;
          height: 120px;
          position: absolute;
          background-image: url('/public/assets/spaceship.png');
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          transition: left 0.1s linear;
          image-rendering: pixelated;
        }
      `,
      explanation:
        "Styles the spaceship component:\n" +
        "- Uses an image for the spaceship.\n" +
        "- Dynamically positions it on the game board.\n" +
        "- Adds smooth horizontal movement for player controls.",
    },
    {
      title: "6. Game Objects",
      code: `
        /* Game Objects */
        .obstacle {
          width: 20px;
          height: 20px;
          background: white;
          position: absolute;
          border-radius: 50%;
        }

        .bullet {
          width: 4px;
          height: 10px;
          background: var(--gdg-yellow);
          position: absolute;
        }
      `,
      explanation:
        "Styles the obstacles and bullets:\n" +
        "- Obstacles are circular and white.\n" +
        "- Bullets are small rectangles using the GDG yellow color.",
    },
    {
      title: "7. Game Over Screen",
      code: `
        /* Game Over Screen */
        .game-over {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: rgba(0, 0, 33, 0.9);
          padding: 20px;
          border-radius: 10px;
          text-align: center;
          color: white;
        }
      `,
      explanation:
        "Styles the game-over screen:\n" +
        "- Centers it absolutely within the game container.\n" +
        "- Uses a semi-transparent dark background for contrast.\n" +
        "- Adds rounded corners and text styling for readability.",
    },
    {
      title: "8. Buttons",
      code: `
        /* Buttons */
        .button {
          background: var(--gdg-green);
          border: none;
          color: white;
          padding: 15px 32px;
          text-align: center;
          border-radius: 4px;
          cursor: pointer;
          transition: background 0.3s;
        }

        .button:hover {
          background: var(--gdg-blue);
        }
      `,
      explanation:
        "Styles the buttons with GDG colors and hover effects:\n" +
        "- Rounded corners and smooth background transitions enhance the user experience.",
    },
    {
      title: "9. Landing Page Styles",
      code: `
        /* Landing Page */
        .landing-container {
          width: 100vw;
          height: 100vh;
          background: #000033;
          position: relative;
          overflow: hidden;
        }

        .content {
          position: relative;
          z-index: 3;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
        }
      `,
      explanation:
        "Styles the landing page:\n" +
        "- Centers the content vertically and horizontally.\n" +
        "- Adds a dark blue background to match the space theme.",
    },
    {
      title: "10. Landing Page Title",
      code: `
        /* Landing Page Title */
        .game-title {
          background: linear-gradient(
            45deg,
            var(--gdg-blue) 25%,
            var(--gdg-red) 25%,
            var(--gdg-red) 50%,
            var(--gdg-yellow) 50%,
            var(--gdg-yellow) 75%,
            var(--gdg-green) 75%
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          font-size: 64px;
          font-family: 'Google Sans', sans-serif;
          text-transform: uppercase;
          margin-bottom: 40px;
          animation: glow 1.5s ease-in-out infinite alternate;
        }
      `,
      explanation:
        "Adds a gradient and glowing effect to the title:\n" +
        "- Uses GDG theme colors for a gradient text effect.\n" +
        "- Animates the glow for visual appeal.",
    },
    {
      title: "11. Background Effects",
      code: `
        /* Background Effects */
        .stars {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: #000 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjU1NkFCODkzRDlFMzExRTBCMzJFQzFCNjI4RTY5RDhBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjU1NkFCODk0RDlFMzExRTBCMzJFQzFCNjI4RTY5RDhBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTU2QUI4OTFEOUUzMTFFMEIzMkVDMUI2MjhFNjlEOEEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTU2QUI4OTJEOUUzMTFFMEIzMkVDMUI2MjhFNjlEOEEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQAAAAAACwAAAAACgAKAAACEIyPqcvtD6OctNqLs968+w8AIfkEAAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAAAgAAAAEAAAAAQAAAAAAAAAAAAAh+QQAAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAQAAAABAAAAAAAAAAAAIWNyZWF0ZWQgYnkgQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzADs=) repeat top left;
      `,
      explanation:
        "Creates a starry background effect using a repeated image pattern.",
    },
    {
      title: "12. Animations",
      code: `
        /* Animations */
        @keyframes glow {
          from {
            text-shadow: 0 0 10px var(--gdg-blue), 
                         0 0 20px var(--gdg-blue), 
                         0 0 30px var(--gdg-red);
          }
          to {
            text-shadow: 0 0 20px var(--gdg-blue), 
                         0 0 30px var(--gdg-yellow), 
                         0 0 40px var(--gdg-green);
          }
        }

        @keyframes hover {
          0%, 100% { transform: translateY(0) rotate(180deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `,
      explanation:
        "Defines keyframe animations:\n" +
        "- `glow`: Creates a glowing effect for text.\n" +
        "- `hover`: Animates the floating movement of the spaceship icon.",
    },
  ];

  return (
    <div className="p-8 bg-black text-white">
      <h1 className="text-3xl font-bold mb-6 text-gdgBlue">App.css</h1>
      <p className="mb-4 text-lg text-gdgGreen">
        The `App.css` file defines the visual appearance and animations for the game, maintaining a consistent GDG theme throughout the application.
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

export default AppCssPage;
