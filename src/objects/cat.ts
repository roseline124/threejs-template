import { Node } from '../models/node';
import { LoaderUtil } from '../utils/loader';

export class CatObject extends Node {
  async initalize() {
    const { scene: cat } = await LoaderUtil.loadGLTF('models/cat.glb');
    this.add(cat);
  }

  update() {}
}
