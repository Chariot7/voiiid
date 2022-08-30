import Sketch from "react-p5";

let shapeSize = 90;
let x;
let y;
const {innerWidth, innerHeight} = window;

const about = (props) => {
	const windowResized = (p5) => {
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight)
    }
    
    const setup = (p5, canvasParentRef) => {
		p5.createCanvas(innerWidth, innerHeight, p5.WEBGL).parent(canvasParentRef);
        p5.rectMode(p5.CENTER)
        p5.frameRate(15)
        p5.angleMode(p5.DEGREES)
	};

	const draw = (p5) => {
        p5.scale(1,-1)
		p5.background(20, 10, 30);
        p5.translate(-p5.width*2,-p5.height/2)
        for(x = 0; x<innerWidth/shapeSize + shapeSize -80 ; x+=1){
            for(y = 0; y<innerHeight/shapeSize + shapeSize - 80; y+=1){
            let spacingX = x===0? 0: p5.mouseX * 0.55;
            let spacingY = y===0? 0: p5.mouseY/8;
            p5.push()
            let negNum;
            let xColor = p5.map(p5.mouseX, 0, p5.width, 0, 175)
            let yColor = p5.map(p5.mouseY, 0, p5.height, 0, 175)
            if(x % 2 === 0){
                p5.stroke(255 -yColor, yColor + 5*y, yColor+ 5*y, 255)
                p5.fill(xColor + 5*y, xColor+ 5*y, 255 - xColor, 220)
                negNum = -1
            } else {
                p5.fill(255 -yColor, yColor + 5*y, yColor+ 5*y, 220)
                p5.stroke(xColor + 5*y, xColor+ 5*y, 255 - xColor, 255)
                negNum = 1

            }
            p5.translate(x*shapeSize + shapeSize/2 + x*spacingX, y*shapeSize+ shapeSize/2 + y*spacingY, -y*250 )
            p5.rotateX(p5.mouseY* negNum)
            p5.rotateY(p5.mouseX)
            p5.strokeWeight(3)
            let boxDims = p5.mouseX*.6
            p5.box(boxDims, p5.mouseY/6, )
            p5.pop()
            }
              
          }
            };

	return <Sketch setup={setup} draw={draw} windowResized={windowResized} />;
};
export default about;