import React from "react";
import CodeDisplay from "../../components/CodeDisplay";

const AppCssPage = () => {
    const sections = [
        {
          title: "1. Theme Variables and Reset",
          code: `/* Theme Variables */
    :root {
      --gdg-blue: #4285F4;
      --gdg-red: #EA4335;
      --gdg-yellow: #FBBC04;
      --gdg-green: #34A853;
      --game-width: min(800px, 95vw);
      --game-height: min(600px, 90vh);
      --spaceship-width: clamp(40px, 10vw, 80px);
      --spaceship-height: clamp(60px, 15vw, 120px);
      --bullet-width: clamp(2px, 1vw, 4px);
      --bullet-height: clamp(5px, 2vw, 10px);
      --obstacle-size: clamp(10px, 3vw, 20px);
    }
    
    /* Reset and Base Styles */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      margin: 0;
      padding: 0;
      background: black;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      font-family: 'Google Sans', system-ui, sans-serif;
      overflow-x: hidden;
    }`,
          explanation: `This section establishes the foundation of the game's styling:
    
    - **CSS Variables**: Defines GDG brand colors and responsive dimensions using CSS custom properties
    - **Responsive Units**: Uses clamp() and min() functions for fluid typography and sizing
    - **Box Sizing**: Applies border-box to all elements for predictable layouts
    - **Body Setup**: Centers content vertically and horizontally with flexbox
    - **Font Stack**: Uses Google Sans with system fallbacks
    - **Overflow Control**: Prevents horizontal scrolling`
        },
        {
          title: "2. Game Container and Layout",
          code: `/* Game Container */
    .game-container {
      width: var(--game-width);
      height: var(--game-height);
      background: #000033;
      position: relative;
      overflow: hidden;
      border: clamp(1px, 0.3vw, 2px) solid #ffffff;
      touch-action: none;
      border-radius: clamp(5px, 2vw, 10px);
      box-shadow: 0 0 20px rgba(66, 133, 244, 0.3);
    }
    
    /* Layout Utilities */
    .flex-center {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .absolute-center {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }`,
          explanation: `Game container and layout utilities:
    
    - **Responsive Dimensions**: Uses CSS variables for width/height
    - **Touch Handling**: Prevents default touch behaviors with touch-action
    - **Visual Enhancement**: Adds subtle border and shadow effects
    - **Overflow Control**: Keeps game elements contained
    - **Utility Classes**: Provides reusable positioning helpers
    - **Border Radius**: Scales with viewport size using clamp()`
        },
        {
          title: "3. Game Elements",
          code: `/* Spaceship */
    .spaceship {
      width: var(--spaceship-width);
      height: var(--spaceship-height);
      position: absolute;
      background-image: url('/assets/spaceship.png');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      transition: left 0.1s linear;
      image-rendering: pixelated;
      z-index: 10;
    }
    
    /* Obstacles */
    .obstacle {
      width: var(--obstacle-size);
      height: var(--obstacle-size);
      background: white;
      position: absolute;
      border-radius: 50%;
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
      animation: pulse 1.5s infinite ease-in-out;
    }
    
    /* Bullets */
    .bullet {
      width: var(--bullet-width);
      height: var(--bullet-height);
      background: var(--gdg-yellow);
      position: absolute;
      border-radius: 2px;
      box-shadow: 0 0 5px var(--gdg-yellow);
    }`,
          explanation: `Styling for main game elements:
    
    - **Spaceship**: 
      - Responsive sizing using CSS variables
      - Smooth movement transitions
      - Pixelated rendering for retro effect
      - Z-index management for proper layering
    
    - **Obstacles**: 
      - Circular design with border-radius
      - Glowing effect with box-shadow
      - Pulse animation for visual interest
      - Dynamic sizing based on viewport
    
    - **Bullets**: 
      - Slim rectangular design
      - Glowing effect matching GDG theme
      - Responsive dimensions
      - Optimized for visibility`
        },
        {
            title: "4. UI Components",
            code: `/* Score Display */
      .score-display {
        position: absolute;
        top: clamp(5px, 2vw, 10px);
        right: clamp(5px, 2vw, 10px);
        color: white;
        background: rgba(66, 133, 244, 0.2);
        padding: clamp(3px, 1vw, 5px) clamp(5px, 2vw, 10px);
        border-radius: clamp(3px, 1vw, 5px);
        font-size: clamp(14px, 3vw, 20px);
        font-weight: bold;
        z-index: 100;
        backdrop-filter: blur(4px);
      }
      
      /* Timer */
      .timer {
        position: absolute;
        top: 10px;
        left: 10px;
        font-size: clamp(1rem, 2.5vw, 1.2rem);
        font-weight: bold;
        color: white;
        background: rgba(0, 0, 0, 0.5);
        padding: 5px 10px;
        border-radius: 5px;
        z-index: 1000;
        backdrop-filter: blur(4px);
      }
      
      /* Health Bar */
      .health-bar {
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        width: clamp(100px, 30%, 200px);
        height: 10px;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 5px;
        overflow: hidden;
        z-index: 100;
      }
      
      .health-bar-fill {
        height: 100%;
        background: var(--gdg-green);
        transition: width 0.3s ease-out;
      }`,
            explanation: `UI components with responsive design:
      
      - **Score Display**: 
        - Responsive positioning and sizing using clamp()
        - Semi-transparent background with blur effect
        - Maintains readability at all viewport sizes
        - High z-index for visibility
      
      - **Timer**: 
        - Fixed positioning with responsive font size
        - Blurred background for contrast
        - Consistent padding and border radius
        - Priority z-index placement
      
      - **Health Bar**: 
        - Centered positioning with transform
        - Responsive width using percentage
        - Smooth transition for health changes
        - Visual feedback through color`
          },
          {
            title: "5. Game Over Screen",
            code: `/* Game Over Screen */
      .game-over {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 33, 0.95);
        padding: clamp(15px, 4vw, 30px);
        border-radius: clamp(5px, 2vw, 10px);
        text-align: center;
        color: white;
        width: clamp(200px, 80%, 400px);
        backdrop-filter: blur(10px);
        z-index: 2000;
        animation: fadeIn 0.3s ease-out;
      }
      
      .game-over h2 {
        font-size: clamp(24px, 5vw, 36px);
        margin: 0 0 15px 0;
        background: linear-gradient(45deg, var(--gdg-blue), var(--gdg-red));
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }
      
      .game-over p {
        font-size: clamp(16px, 3vw, 24px);
        margin: 0 0 20px 0;
        opacity: 0.9;
      }
      
      .restart-button {
        background: var(--gdg-blue);
        border: none;
        color: white;
        padding: clamp(10px, 3vw, 15px) clamp(20px, 5vw, 30px);
        font-size: clamp(16px, 2.5vw, 20px);
        border-radius: 25px;
        cursor: pointer;
        transition: all 0.3s ease;
      }
      
      .restart-button:hover {
        background: var(--gdg-green);
        transform: scale(1.05);
      }`,
            explanation: `Game over screen styling:
      
      - **Modal Container**: 
        - Centered positioning with transform
        - Responsive padding and border radius
        - Blur effect for depth
        - Fade-in animation
      
      - **Typography**: 
        - Gradient text effect for title
        - Responsive font sizing
        - Optimal line height and spacing
        - High contrast for readability
      
      - **Restart Button**: 
        - GDG theme colors
        - Hover animations
        - Touch-friendly sizing
        - Responsive padding`
          },
          {
            title: "6. Mobile Controls",
            code: `/* Mobile Controls */
      .mobile-controls {
        display: none;
        position: fixed;
        bottom: 20px;
        left: 0;
        right: 0;
        padding: 10px;
        justify-content: space-around;
        z-index: 1000;
        gap: clamp(10px, 3vw, 20px);
      }
      
      .control-button {
        width: clamp(50px, 15vw, 70px);
        height: clamp(50px, 15vw, 70px);
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.2);
        border: 2px solid rgba(255, 255, 255, 0.3);
        color: white;
        font-size: clamp(20px, 5vw, 30px);
        display: flex;
        align-items: center;
        justify-content: center;
        touch-action: manipulation;
        transition: all 0.2s ease;
      }
      
      .control-button:active {
        background: rgba(255, 255, 255, 0.4);
        transform: scale(0.95);
      }
      
      @media (max-width: 768px) {
        .mobile-controls {
          display: flex;
        }
      }`,
            explanation: `Mobile-specific controls:
      
      - **Control Container**: 
        - Hidden by default, shown on mobile
        - Fixed positioning for consistent access
        - Flexible spacing with gap
        - Touch-optimized layout
      
      - **Control Buttons**: 
        - Circular design for touch targets
        - Responsive sizing with clamp()
        - Visual feedback on interaction
        - Semi-transparent styling
      
      - **Touch Optimization**: 
        - Manipulation handling
        - Active state feedback
        - Proper spacing for touch targets
        - Smooth transitions`
          },
          {
            title: "7. Animations and Effects",
            code: `/* Animations */
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      
      @keyframes pulse {
        0% { transform: scale(1); opacity: 0.8; }
        50% { transform: scale(1.1); opacity: 1; }
        100% { transform: scale(1); opacity: 0.8; }
      }
      
      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }
      
      @keyframes glow {
        0% { box-shadow: 0 0 5px var(--gdg-blue); }
        50% { box-shadow: 0 0 20px var(--gdg-blue); }
        100% { box-shadow: 0 0 5px var(--gdg-blue); }
      }
      
      /* Particle Effects */
      .particle {
        position: absolute;
        pointer-events: none;
        animation: fadeOut 1s forwards;
      }
      
      @keyframes fadeOut {
        to {
          opacity: 0;
          transform: translate(var(--tx), var(--ty));
        }
      }`,
            explanation: `Animation and visual effects:
      
      - **Fade Animations**: 
        - Smooth opacity transitions
        - Used for elements entering/leaving
        - Performance optimized
        - Configurable durations
      
      - **Pulse Effect**: 
        - Subtle scale changes
        - Opacity variations
        - Continuous animation
        - Applied to obstacles
      
      - **Float Animation**: 
        - Vertical movement
        - Smooth easing
        - Used for idle elements
        - Natural motion
      
      - **Particle System**: 
        - Dynamic positioning
        - Custom properties for movement
        - Fade out effect
        - Zero interference with gameplay`
          },
          {
            title: "8. Responsive Design",
            code: `/* Media Queries */
      @media (max-width: 768px) {
        :root {
          --game-width: 100vw;
          --game-height: 100vh;
        }
      
        .game-container {
          border-radius: 0;
        }
      
        .spaceship {
          bottom: 15vh !important;
        }
      
        .score-display,
        .timer {
          font-size: clamp(12px, 2.5vw, 16px);
        }
      }
      
      @media (max-height: 600px) {
        .game-container {
          height: 90vh;
        }
      
        .mobile-controls {
          bottom: 10px;
        }
      }
      
      /* High DPI Screens */
      @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
        .spaceship {
          image-rendering: auto;
        }
      }
      
      /* Reduced Motion */
      @media (prefers-reduced-motion: reduce) {
        * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
          scroll-behavior: auto !important;
        }
      }`,
            explanation: `Comprehensive responsive design:
      
      - **Mobile Adaptations**: 
        - Full viewport usage
        - Adjusted positioning
        - Optimized font sizes
        - Touch-friendly interfaces
      
      - **Height Considerations**: 
        - Vertical space optimization
        - Control positioning
        - Maintained playability
        - Flexible layouts
      
      - **High DPI Support**: 
        - Image rendering optimization
        - Crisp graphics
        - Device-specific adjustments
      
      - **Accessibility**: 
        - Reduced motion support
        - Performance optimization
        - User preference respect
        - Enhanced usability`
          }
        
      ];

  return (
    <div className="p-8 bg-black text-white">
      <h1 className="text-3xl font-bold mb-6 text-gdgBlue">App.css</h1>
      <p className="mb-4 text-lg text-gdgGreen">
        The App.css file defines the visual styles, animations, and responsive design for the space shooter game, maintaining a consistent GDG theme throughout the application.
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
