import "./App.css";
import "@pixi/events";

import { useRef, useEffect } from "react";
import { Stage, Sprite } from "@pixi/react";

export const App = () => {
  const qosSprite = "queenofswords.png";
  const stageRef = useRef();
  const qosSpriteRef = useRef();

  useEffect(() => {
    console.log(stageRef.current.props.height);
    console.log(qosSpriteRef.current);

    const handleKeyDown = (event) => {
      // Arrow keys movement example
      const speed = 5; // Adjust as needed

      switch (event.key) {
        case "ArrowLeft":
          qosSpriteRef.current.x -= speed;
          break;
        case "ArrowRight":
          qosSpriteRef.current.x += speed;
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
      height={1000}
      options={{ background: 0x1099bb }}
    >
      <Sprite ref={qosSpriteRef} image={qosSprite} x={0} y={932} />
    </Stage>
  );
};

export default App;
