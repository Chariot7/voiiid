import React from "react";
import Sketch from "react-p5";

console.log(document.body.style.overflow);
let angle = 0;
let rectSize = 6;
const { innerWidth, innerHeight } = window;

const circle = (props) => {
  document.body.style.overflow = "hidden";
  const windowResized = (p5) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(innerWidth, innerHeight, p5.WEBGL).parent(canvasParentRef);
    p5.background(250);
    p5.frameRate(50);
    p5.colorMode(p5.HSB, 100);
  };

  const draw = (p5) => {
    p5.rectMode(p5.CENTER);
    p5.noStroke();
    p5.fill(70, 120, 120);
    p5.translate(p5.mouseX - p5.width / 2, p5.mouseY - p5.height / 2);

    p5.rotateX(angle);
    p5.rotateY(angle);
    p5.rotateZ(angle);
    rectSize = p5.width / 180;

    p5.ellipsoid(rectSize);

    for (let i = 0; i < p5.mouseX / 40 + 2; i++) {
      let num = i * 30;
      let mouseColor = p5.map(p5.mouseX, 0, p5.width, 2, 70);
      let mouseColorY = p5.map(p5.mouseY, 0, p5.height, 2, 100);
      let numColor = p5.map(i, 0, p5.mouseX / 12, 0, 100);
      const transArr = [num,0,0,0,num,0,0,0,num,-num,0,0,0,-num,0,0,0,-num]
      
      for (let i = 0; i < transArr.length - 3; i += 3) {
        p5.push();
        p5.translate(transArr[i], transArr[i + 1], transArr[i + 2]);
        i % 2 === 0
          ? p5.fill(mouseColor + numColor / 2, mouseColorY, 100 - numColor, 100)
          : p5.fill(mouseColor, 100 - numColor, 100 - numColor, 100);
        p5.ellipsoid(rectSize);
        p5.pop();
      }
    }

    angle += 0.02;
  };

  return <Sketch setup={setup} draw={draw} windowResized={windowResized} />;
};

export default circle;
