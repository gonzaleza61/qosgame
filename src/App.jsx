import "./App.css";
import "@pixi/events";

import { useRef, useEffect } from "react";
import { Stage, Sprite, Container } from "@pixi/react";

export const App = () => {
  const bunnyUrl = "https://pixijs.io/pixi-react/img/bunny.png";
  const stageRef = useRef();
  const bunnyRef = useRef();

  console.log(bunnyRef.current.height);

  return (
    <Stage
      ref={stageRef}
      width={1000}
      height={500}
      options={{ background: 0x1099bb }}
    >
      <Sprite ref={bunnyRef} image={bunnyUrl} position={[0, 463]} />
    </Stage>
  );
};

export default App;
