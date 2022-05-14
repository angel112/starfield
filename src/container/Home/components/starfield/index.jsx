import { useEffect, useRef, useState } from "react";
import sizeMe from "react-sizeme";

import Particle from "./particle";

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const Starfield = ({ style, size, ...rest }) => {
  const [bounds, setBounds] = useState({
    width: window.innerWidth, height: window.innerHeight, depth: 500
  })
  
  const [stars, setStars] = useState([]);
  const canvasRef = useRef();



  function animate() {
    requestAnimationFrame(animate);
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    stars.map((star) => {
      console.log({ star });
      star.update();
    })
  }

  useEffect(() => {
    for (let i = 0; i < 300; i++) {
      const particle = new Particle(randomIntFromInterval((-1) * (bounds.width / 2 - 20), bounds.width / 2 - 20),  randomIntFromInterval((-1) * (bounds.height / 2 - 20), bounds.height / 2 - 20), bounds, randomIntFromInterval(1, 500))
      stars.push(particle);
    }
    animate();
  }, []);

  return (
    <div
      style={{
        overflow: "hidden",
        ...style,
      }}
      {...rest}
    >
      <canvas ref={canvasRef} />
    </div>
  );
};

export default sizeMe()(Starfield);
