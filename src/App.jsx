import "./App.css";
import "@pixi/events";

import { TextStyle } from "pixi.js";
import { Stage, Container, Sprite, Text } from "@pixi/react";

export const App = () => {
  const bunnyUrl = "https://pixijs.io/pixi-react/img/bunny.png";
  return (
    <Stage x={1920} y={1080} options={{ background: 0x1099bb }}>
      <Sprite image={bunnyUrl} x={300} y={150} />
      <Sprite image={bunnyUrl} x={500} y={150} />
      <Sprite image={bunnyUrl} x={400} y={200} />

      <Container x={200} y={200}>
        <Text
          text="Hello World"
          anchor={0.5}
          x={220}
          y={150}
          style={
            new TextStyle({
              align: "center",
              fill: "0xffffff",
              fontSize: 50,
              letterSpacing: 20,
              dropShadow: true,
              dropShadowColor: "#E72264",
              dropShadowDistance: 6,
            })
          }
        />
      </Container>
    </Stage>
  );
};
