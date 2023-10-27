import {  Object3D, Scene } from 'three';
import { INode } from '../models/node';

export class MainScene extends Scene implements INode {
  room!: Object3D;

  #objects: Object3D[] = [];

  setObjects(...objects: Object3D[]) {
    this.#objects = objects;
    this.#objects.forEach((obj) => {
      this.add(obj);
    });
  }

  async initalize() {
    // you can add main scene before initializing objects

    await Promise.all(this.#objects.map((obj: any) => obj.initalize()));
  }

  update() {
    this.updateMatrixWorld(true); // if your objects don't need changes of position or rotation, you can remove this line.
    this.#objects.forEach((obj: any) => obj.update());
  }
}
