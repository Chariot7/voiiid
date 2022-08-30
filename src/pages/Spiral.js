import Sketch from "react-p5";

let angleX = 0;
let angleY = 0;
let num;
let sphere;

const {innerWidth, innerHeight} = window;
window.localStorage.clear();

const spiral = (props) => {
    
    const windowResized = (p5) => {
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight)
    }

	const setup = (p5, canvasParentRef) => {
		p5.createCanvas(innerWidth, innerHeight, p5.WEBGL).parent(canvasParentRef);
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight)
        p5.noStroke();
        
	};

	const draw = (p5) => {
        p5.translate(0,-10,0);
        num  = p5.height/48;
        sphere = p5.height/12;
        angleX = p5.map(p5.mouseX, 0, p5.width, 0, 2*p5.PI*1000)/1000;
        angleY = p5.map(p5.mouseY, 0, p5.height, 0, 2*p5.PI*1000)/1000;
		p5.background(30);
        p5.ambientLight(90)

        p5.pointLight(165, 50, 190, -p5.mouseX/3, p5.mouseY/3, 320)
  
        p5.pointLight(p5.map(p5.mouseX, 0, p5.width, 190, 255), 200, 60, p5.mouseX/3, p5.mouseY/3, 220)
        p5.noStroke()
        p5.specularMaterial(250)
        p5.shininess(200)
        p5.push()
       
        p5.pop()

        let angleArrX = [ -angleX, -angleY, angleX, -angleY, -angleX, angleY, -angleY, - angleX, -angleX , -angleY, angleX, angleY]
        
        for(let i = 0 ; i < num * 12; i += 2*num){
            p5.push()
            p5.rotateX(angleArrX[i/num] )
            p5.rotateY(angleArrX[i/num + 1] )
            
                let boxSize = p5.height * 0.925 /2
                p5.scale(p5.mouseX/800, p5.mouseY/1200)
                p5.sphere(sphere)
                p5.box(boxSize+p5.mouseX/3, boxSize + p5.mouseY/6, boxSize,200,200)
                p5.push()
                
                p5.rotateX(angleArrX[i/num] * -1)
                p5.rotateY(angleArrX[i/num + 1] * -1)
                p5.stroke(4,200,200)
                
                p5.box(boxSize+p5.mouseX/3 , boxSize + p5.mouseY/6 , boxSize,200,200)
                p5.pop()
            
            p5.pop()
        }
            };


	return <Sketch setup={setup} draw={draw} windowResized={windowResized} />;
};
export default spiral