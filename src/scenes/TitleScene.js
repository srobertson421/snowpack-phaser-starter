import Phaser from 'phaser';

import getCenterX from '../utils/getCenterX';
import getCenterY from '../utils/getCenterY';

class TitleScene extends Phaser.Scene {
  constructor() {
    super({ key: 'title' });
  }

  preload() {}

  create() {
    console.log(this);
    this.titleText = this.add.text(getCenterX(this), getCenterY(this), 'Hello World!');
    this.titleText.setOrigin(0.5);
    console.log(this.titleText);
  }

  update() {}
}

export default TitleScene;