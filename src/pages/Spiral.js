import Sketch from "react-p5";

let angleX = 0;
let angleY = 0;
let num;
let sphere;

const { innerWidth, innerHeight } = window;
window.localStorage.clear();

const spiral = (props) => {
  document.body.style.overflow = "hidden";
  const windowResized = (p5) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(innerWidth, innerHeight, p5.WEBGL).parent(canvasParentRef);
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    p5.noStroke();
  };

  const draw = (p5) => {
    p5.translate(0, -10, 0);
    num = p5.height / 48;
    sphere = p5.height / 12;
    angleX = p5.map(p5.mouseX, 0, p5.width, 0, 2 * p5.PI * 1000) / 1000;
    angleY = p5.map(p5.mouseY, 0, p5.height, 0, 2 * p5.PI * 1000) / 1000;
    p5.background(30);
    p5.ambientLight(100);

    p5.pointLight(165, 50, 190, -p5.width / 27, p5.height / 27, 320);

    p5.pointLight(
      p5.map(p5.mouseX, 0, p5.width, 190, 255),
      200,
      60,
      p5.width / 25,
      p5.height / 25,
      220
    );
    p5.pointLight(
      p5.map(p5.mouseX, 0, p5.width, 190, 255),
      200,
      60,
      p5.height / 15,
      p5.height / 25
    );
    p5.pointLight(
      p5.map(p5.mouseX, 0, p5.width, 190, 255),
      200,
      60,
      p5.height - p5.width / 15,
      p5.height - p5.height / 15,
      p5.height / 25
    );
    p5.noStroke();
    p5.specularMaterial(250);
    p5.shininess(200);

    let angleArrX = [
      -angleX,
      -angleY,
      angleX,
      -angleY,
      -angleX,
      angleY,
      -angleY,
      -angleX,
      -angleX,
      -angleY,
      angleX,
      angleY,
    ];
    // console.log(p5.mouseX/2000, p5.mouseY/2000)
    let mouseX = p5.mouseX;
    let mouseY = p5.mouseY;
    let numX = p5.map(mouseX / 2000, 0, 1.4, 0.2, 0.3);
    let numY = p5.map(mouseY / 2000, 0, 1.4, 0.2, 0.3);
    for (let i = 0; i < num * 12; i += 2 * num) {
      p5.push();
      p5.rotateX(angleArrX[i / num]);
      p5.rotateY(angleArrX[i / num + 1]);

      p5.scale(numX, numY);
      let boxSize = (p5.height * 0.925) / 2 - p5.width / 80;
      p5.box(
        boxSize + mouseX / 2 - 10,
        boxSize + mouseY / 3 - 10,
        boxSize / 2 - 10,
        200,
        200
      );
      p5.push();

      p5.rotateX(angleArrX[i / num] * -1);
      p5.rotateY(angleArrX[i / num + 1] * -1);
      p5.stroke(4, 200, 200);

      p5.box(
        boxSize + mouseX / 2 - 10,
        boxSize - 10 + mouseY / 3,
        boxSize / 2 - 10,
        200,
        200
      );
      p5.pop();

      p5.pop();
    }
  };

  return <Sketch setup={setup} draw={draw} windowResized={windowResized} />;
};
export default spiral;
