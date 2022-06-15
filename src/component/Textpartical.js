import * as React from "react";
import ParticleImage, {
  ParticleOptions,
  Vector,
  forces,
  ParticleForce,
  getMousePosition
} from "react-particle-image";


const particleOptions: ParticleOptions = {
  filter: ({ x, y, image }) => {
    // Get pixel
    const pixel = image.get(x, y);
    // Make a particle for this pixel if blue > 50 (range 0-255)
    return pixel.b > 1;
  },
  color: ({ x, y, image }) => "red",
  radius: () => Math.random() * 1.5 + 0.5,
  mass: () => 50,
  friction: () => 0.12,
  initialPosition: ({ canvasDimensions }) => {
    return new Vector(canvasDimensions.width / 1, canvasDimensions.height / 1);
  }
};

const motionForce = (x: number, y: number): ParticleForce => {
  return forces.disturbance(x, y, 20);
};

export default function Textpartical( props) {


  return (
    <ParticleImage
      // src={"./Images/sukhi.png"}
     src={props.textimage}
      scale={1.5}
      size={50}
      entropy={0.5}
      maxParticles={1800}
      particleOptions={particleOptions}
      mouseMoveForce={motionForce}
      touchMoveForce={motionForce}
      backgroundColor="trasparent"
      
    />
  );
}
