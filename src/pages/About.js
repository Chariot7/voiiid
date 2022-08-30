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
		// use parent to render the canvas in this ref
		// (without that p5 will render the canvas outside of your component)
		p5.createCanvas(innerWidth, innerHeight, p5.WEBGL).parent(canvasParentRef);
        p5.rectMode(p5.CENTER)
        p5.frameRate(15)
        p5.angleMode(p5.DEGREES)
	};

	const draw = (p5) => {
        p5.scale(1,-1)
		p5.background(30);
        p5.translate(-p5.width*2,-p5.height/2)
        for(x = 0; x<innerWidth/shapeSize + shapeSize -80 ; x+=1){
            for(y = 0; y<innerHeight/shapeSize + shapeSize - 80; y+=1){
            let spacingX = x===0? 0: p5.mouseX/2;
            let spacingY = y===0? 0: p5.mouseY/8;
            p5.push()
            let negNum;
            if(x % 2 === 0){
                p5.stroke(143, 22, 8)
                p5.fill(230, 180, 50, 150)
                negNum = -1
                // p5.scale(1,-1)
            } else {
                p5.fill(100, 220, 10, 150)
                p5.stroke(70, 200, 10)
                negNum = 1
                // p5.scale(1,-1)

            }
            p5.translate(x*shapeSize + shapeSize/2 + x*spacingX, y*shapeSize+ shapeSize/2 + y*spacingY, -y*250 )
            p5.rotateX(p5.mouseY* negNum)
            p5.rotateY(p5.mouseX)
            p5.strokeWeight(3)
            let boxDims = p5.mouseX*.6
            // p5.mouseX > 45?  p5.mouseX/6 -10 : 1 ;
            p5.box(boxDims, p5.mouseY/6, )
            p5.pop()
            }
              
          }
            };

	return <Sketch setup={setup} draw={draw} windowResized={windowResized} />;
};
export default about;