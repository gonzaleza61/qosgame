import "./App.css";
import "@pixi/events";

import { useRef, useEffect } from "react";
import { Stage, Sprite } from "@pixi/react";

export const App = () => {
  const bunnyUrl = "https://pixijs.io/pixi-react/img/bunny.png";
  const stageRef = useRef();
  const bunnyRef = useRef();

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Arrow keys movement example
      const speed = 5; // Adjust as needed
      switch (event.key) {
        case "ArrowUp":
          bunnyRef.current.y -= speed;
          break;
        case "ArrowDown":
          bunnyRef.current.y += speed;
          break;
        case "ArrowLeft":
          bunnyRef.current.x -= speed;
          break;
        case "ArrowRight":
          bunnyRef.current.x += speed;
          break;
        default:
          break;
      }
    };

    // Add event listener for keyboard keydown events
    window.addEventListener("keydown", handleKeyDown);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <Stage
      ref={stageRef}
      width={1000}
      height={500}
      options={{ background: 0x1099bb }}
    >
      <Sprite ref={bunnyRef} image={bunnyUrl} x={0} y={463} />
    </Stage>
  );
};

export default App;
