import {
  CatmullRomCurve3,
  Color,
  Fog,
  Geometry,
  PerspectiveCamera,
  Points,
  PointsMaterial,
  Scene,
  Vector3,
  VertexColors,
  WebGLRenderer
} from "three";
import * as THREE from "three";
const OrbitControls = require("three-orbit-controls")(THREE);

//Get window size
var ww = window.innerWidth,
  wh = window.innerHeight;

//Create a WebGL renderer
var renderer = new WebGLRenderer({
  canvas: document.querySelector("canvas")
});
renderer.setSize(ww, wh);

//Create an empty scene
var scene = new Scene();

//Create a perpsective camera
var camera = new PerspectiveCamera(45, ww / wh, 0.001, 1000);
camera.position.z = 400;

//Array of points
var points = [
  [68.5, 185.5],
  [1, 262.5],
  [270.9, 281.9],
  [345.5, 212.8],
  [178, 155.7],
  [240.3, 72.3],
  [153.4, 0.6],
  [52.6, 53.3],
  [68.5, 185.5]
];

//Convert the array of points into vertices
for (var i = 0; i < points.length; i++) {
  var x = points[i][0];
  var y = 0;
  var z = points[i][1];
  points[i] = new Vector3(x, y, z);
}
//Create a path from the points
var path = new CatmullRomCurve3(points);

// Define the precision of the finale tube, the amount of divisions
var tubeDetail = 500;
// Define the precision of the circles
var circlesDetail = 10;

// Define the radius of the finale tube
var radius = 5;
// Get all the circles that will compose the tube
var frames = path.computeFrenetFrames(tubeDetail, true);

// Create an empty Geometry where we will put the particles
var geometry = new Geometry();

// First loop through all the circles
for (var i = 0; i < tubeDetail; i++) {
  // Get the normal values for each circle
  var normal = frames.normals[i];
  // Get the binormal values
  var binormal = frames.binormals[i];

  // Calculate the index of the circle (from 0 to 1)
  var index = i / tubeDetail;
  // Get the coordinates of the point in the center of the circle
  var p = path.getPointAt(index);

  // Loop for the amount of particles we want along each circle
  for (var j = 0; j < circlesDetail; j++) {
    // Clone the position of the point in the center
    var position = p.clone();

    // Calculate the angle for each particle along the circle (from 0 to Pi*2)
    var angle = (j / circlesDetail) * Math.PI * 2;
    // Calculate the sine of the angle
    var sin = Math.sin(angle);
    // Calculate the cosine from the angle
    var cos = -Math.cos(angle);

    // Calculate the normal of each point based on its angle
    var normalPoint = new Vector3(0, 0, 0);
    normalPoint.x = cos * normal.x + sin * binormal.x;
    normalPoint.y = cos * normal.y + sin * binormal.y;
    normalPoint.z = cos * normal.z + sin * binormal.z;
    // Multiple the normal by the radius
    normalPoint.multiplyScalar(radius);

    // We add the normal values for each point
    position.add(normalPoint);
    geometry.vertices.push(position);
  }
}

// Material for the points
var material = new PointsMaterial({
  size: 1, // The size of each point
  sizeAttenuation: true, // If we want the points to change size depending of distance with camera
  color: 0xff0000 // The color of the points
});

// Create a points object based on the vertices we calculated and the material
var tube = new Points(geometry, material);
//Add tube into the scene
scene.add(tube);

// First create a new color based on the index of the vertice
var color = new Color("hsl(" + index * 360 * 4 + ", 100%, 50%)");
// Push the color into the colors array in the Geometry object
geometry.colors.push(color);

var material = new PointsMaterial({
  size: 0.2,
  vertexColors: VertexColors // We specify that the colors must come from the Geometry
});

// Add some fog in the scene
scene.fog = new Fog(0x000000, 30, 150);

var controls = new OrbitControls(camera);

var percentage = 0;
function render() {
  // Increase the percentage
  percentage += 0.0005;
  // Get the point where the camera should go
  var p1 = path.getPointAt(percentage % 1);
  // Get the point where the camera should look at
  var p2 = path.getPointAt((percentage + 0.01) % 1);
  camera.position.set(p1.x, p1.y, p1.z);
  camera.lookAt(p2);

  // Render the scene
 
}



export default function AnimationScreen() {
  return (
    <div>
    <scene/>
    <camera/>
    </div>
  )
}
