import { AmbientLight } from 'three';
import { Node } from '../models/node';

export class LightObject extends Node {
  async initalize() {
    // you can add any lights
    const ambientLight = new AmbientLight(0xffffff);
    ambientLight.intensity = 3
    this.add(ambientLight);
  }

  update() {}
}
