import {
  PerspectiveCamera,
  WebGLRenderer
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { CatObject } from './objects/cat';
import { LightObject } from './objects/light';
import { MainScene } from './scene/room';

export const renderer = createWebGLRenderer();

const app = document.getElementById('app');
app?.appendChild(renderer.domElement);

export const camera = new PerspectiveCamera(
  30,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);
camera.position.set(0, 0, 10);

camera.updateProjectionMatrix();

const controls = new OrbitControls(camera, renderer.domElement);
const scene = new MainScene();

/**
 * add objects to scene like this.
 */
scene.setObjects(new LightObject(), new CatObject());
scene.initalize();

/**
 * main function
 */
function loop() {
  requestAnimationFrame(loop);
  scene.update();
  controls.update();
  renderer.render(scene, camera);
}

loop();

function createWebGLRenderer() {
  const renderer = new WebGLRenderer({
    antialias: true,
    alpha: true,
  });
  renderer.setPixelRatio(Math.min(Math.min(window.devicePixelRatio, 2), 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.domElement.style.position = 'absolute';
  renderer.domElement.style.top = '0';
  renderer.setClearColor(0x000000, 0); // transparent background

  return renderer;
}
