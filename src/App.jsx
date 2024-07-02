import "./App.css";
import "@pixi/events";

import { useRef, useEffect, useState } from "react";
import { Stage, Sprite } from "@pixi/react";

export const App = () => {
  const qosSprite = "queenofswords.png";
  const stageRef = useRef();
  const qosSpriteRef = useRef();

  const [position, setPosition] = useState({ x: 0, y: 932 });
  const [velocity, setVelocity] = useState(0); // Vertical velocity
  const [isJumping, setIsJumping] = useState(false); // To prevent continuous jumping

  const gravity = 0.5; // Gravity force
  const jumpStrength = -10; // Initial jump velocity

  // Key controls
  useEffect(() => {
    const handleKeyDown = (event) => {
      const speed = 5; // Adjust as needed

      switch (event.key) {
        case "ArrowLeft":
          setPosition((prevPosition) => ({
            ...prevPosition,
            x: prevPosition.x - speed,
          }));
          break;
        case "ArrowRight":
          setPosition((prevPosition) => ({
            ...prevPosition,
            x: prevPosition.x + speed,
          }));
          break;
        case " ":
          if (!isJumping) {
            setVelocity(jumpStrength);
            setIsJumping(true);
          }
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
  }, [isJumping]);

  // Gravity effect
  useEffect(() => {
    let animationFrameId;

    const applyGravity = () => {
      setVelocity((prevVelocity) => prevVelocity + gravity);
      setPosition((prevPosition) => {
        let newY = prevPosition.y + velocity;

        // Stop at the ground level (bottom of the stage)
        if (newY >= 932) {
          // Adjust according to your ground level
          newY = 932;
          setVelocity(0);
          setIsJumping(false);
        }

        return {
          ...prevPosition,
          y: newY,
        };
      });

      animationFrameId = requestAnimationFrame(applyGravity);
    };

    // Start the animation loop
    animationFrameId = requestAnimationFrame(applyGravity);

    // Clean up the animation frame on component unmount
    return () => cancelAnimationFrame(animationFrameId);
  }, [velocity]);

  return (
    <Stage
      ref={stageRef}
      width={1000}
      height={1000}
      options={{ background: 0x1099bb }}
    >
      <Sprite
        ref={qosSpriteRef}
        image={qosSprite}
        x={position.x}
        y={position.y}
      />
    </Stage>
  );
};

export default App;

// import "./App.css";
// import "@pixi/events";

// import { useRef, useEffect, useState } from "react";
// import { Stage, Sprite } from "@pixi/react";

// export const App = () => {
//   const qosSprite = "queenofswords.png";
//   const stageRef = useRef();
//   const qosSpriteRef = useRef();

//   const [position, setPosition] = useState({ x: 0, y: 932 });

//   //key controls
//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       // Arrow keys movement example
//       const speed = 5; // Adjust as needed
//       const jump = 20;

//       console.log(event);

//       switch (event.key) {
//         case "ArrowLeft":
//           qosSpriteRef.current.x -= speed;
//           break;
//         case "ArrowRight":
//           qosSpriteRef.current.x += speed;
//           break;
//         case " ":
//           qosSpriteRef.current.y -= jump;
//           break;
//         default:
//           break;
//       }
//     };

//     // Add event listener for keyboard keydown events
//     window.addEventListener("keydown", handleKeyDown);

//     // Clean up the event listener on component unmount
//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, []); // Empty dependency array ensures this effect runs only once

//   //gravity
//   console.log(stageRef);

//   return (
//     <Stage
//       ref={stageRef}
//       width={1000}
//       height={1000}
//       options={{ background: 0x1099bb }}
//     >
//       <Sprite
//         ref={qosSpriteRef}
//         image={qosSprite}
//         x={position.x}
//         y={position.y}
//       />
//     </Stage>
//   );
// };

// export default App;
