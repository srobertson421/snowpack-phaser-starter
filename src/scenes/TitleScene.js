import Phaser from 'phaser';

import getCenterX from '../utils/getCenterX';
import getCenterY from '../utils/getCenterY';
import scaleToFullScreen from '../utils/scaleToFullScreen';

import bg0Path from '../assets/background0.png';
import bg1Path from '../assets/background1.png';
import bg2Path from '../assets/background2.png';
import bg3Path from '../assets/background3.png';
import bg4Path from '../assets/background4.png';

class TitleScene extends Phaser.Scene {
  constructor() {
    super({ key: 'title' });
  }

  preload() {
    const imageNum = Phaser.Math.RND.between(0,4);
    const imagePaths = [ bg0Path, bg1Path, bg2Path, bg3Path, bg4Path ];
    console.log(imagePaths[imageNum]);
    this.load.image('bg', imagePaths[imageNum]);
  }

  create() {
    this.background = scaleToFullScreen(
      this.add.image(getCenterX(this), getCenterY(this), 'bg'),
      this
    );

    this.titleText = this.add.text(getCenterX(this), getCenterY(this), 'Hello World!');
    this.titleText.setOrigin(0.5);
    this.titleText.setColor('black');
    this.titleText.setFontSize('36px');
  }

  update() {}
}

export default TitleScene;