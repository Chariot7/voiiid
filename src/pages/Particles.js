import Sketch from 'react-p5';

const particleArr = [];

const { innerWidth, innerHeight } = window;
window.localStorage.clear();

const particles = (props) => {
  document.body.style.overflow = 'hidden';
  const windowResized = (p5) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(innerWidth, innerHeight, p5.WEBGL).parent(canvasParentRef);
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    p5.noStroke();
    p5.frameRate(15)
  };

  const draw = (p5) => {
    p5.background(0);
  
  
  for (let i = 0; i < 2; i++) {
    let p = new Particle(p5);
    particleArr.push(p);
  }
  for (let i = particleArr.length - 1; i >= 0; i--) {
    particleArr[i].update();
    particleArr[i].show(p5);
    if (particleArr[i].finished()) {
      // remove this particle
      particleArr.splice(i, 1);
    }
  }
  };

  class Particle {

    constructor(p5) {
      console.log("test")
      console.log(p5)
      this.x = 0;
      this.xDirection = true;
      this.y = 50;
      this.z = 50
      this.vx = p5.random(-p5.mouseX/114 - 4,p5.mouseX/114 + 4);
      this.vy = p5.random(-p5.mouseY/114 - 4,p5.mouseY/114 + 4);
      this.vz = p5.random(-(p5.mouseY/114 + p5.mouseX/114)/2 - 4,(p5.mouseY/114 + p5.mouseX/114)/2 + 4)
      this.r = 55;
      this.b = 105;
      this.g = 105;
      this.vr = p5.random(0,3)
      this.vb = p5.random(0,3)
      this.vg = p5.random(0,3)
      this.alpha = 255;
      this.locX = p5.mouseX - p5.width / 2;
      this.locY = p5.mouseY - p5.height / 2;
      this.xSize = p5.mouseX/6
      this.ySize = p5.mouseY/16
      this.zSize = p5.mouseX/26
      console.log(p5.random(-4,4))
      console.log("test")
    }
  
    finished() {
      return this.alpha < 0;
    }
  
    update() {
      this.x += this.vx
      this.y += this.vy;
      this.z += this.vz
      this.alpha -= 3.1;
      this.r += this.vr;
      this.g -= this.vg;
      this.b -= this.vb;
    }
  
    show(p5) {
      console.log(this.p5)
      p5.noStroke();
      //stroke(255);
      
      p5.push()
      p5.translate(this.x,this.y, this.z )
      p5.fill(this.r, this.g, this.b);
      p5.pointLight(p5.width/3, p5.width/3, p5.width/3, this.locX, this.locY, this.z + p5.width/5);
      p5.pointLight(p5.height/3, p5.height/3, p5.height/3, this.locX+ p5.height/4, this.locY+ 130, this.z + p5.height/3);
      p5.ambientLight(p5.height/10)
      p5.rotateX(p5.mouseX/98)
      p5.rotateY(p5.mouseY/98)
      p5.rotateZ(p5.mouseX/98)
      p5.box(this.xSize, this.ySize, this.zSize);
      p5.pop()
      
      p5.push()
      p5.translate(this.x,this.y, this.z )
      p5.fill(this.r, this.g, this.b);
      p5.pointLight(p5.width/3, p5.width/3, p5.width/3, this.locX, this.locY, this.z + 90);
      p5.pointLight(p5.height/3, p5.height/3, p5.height/3, this.locX+ 130, this.locY+ 130, this.z + 230);
      p5.ambientLight(p5.height/7)
      p5.rotateX(p5.mouseY/90)
      p5.rotateY(p5.mouseX/90)
      p5.rotateZ(p5.mouseY/90)
      p5.box(p5.mouseX/6, p5.mouseY/16, p5.mouseX/26);
      p5.pop()
      
      p5.push()
      p5.translate(this.x,this.y, this.z )
      p5.fill(this.r, this.g, this.b);
      p5.pointLight(250, 250, 250, this.locX, this.locY, this.z + 90);
      p5.pointLight(250, 250, 250, this.locX+ 130, this.locY+ 130, this.z + 230);
      p5.ambientLight(p5.height/7)
      p5.rotateX(p5.mouseY/94)
      p5.rotateY(p5.mouseY/94)
      p5.rotateZ(p5.mouseX/94)
      p5.box(p5.mouseX/6, p5.mouseY/16, p5.mouseX/26);
      p5.pop()
      
    }
  
  }

  return <Sketch setup={setup} draw={draw} windowResized={windowResized} />;
};
export default particles;
