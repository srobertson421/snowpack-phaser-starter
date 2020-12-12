import Phaser from 'phaser';

// Scenes
import TitleScene from './scenes/TitleScene';

const game = new Phaser.Game({
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: [
    TitleScene
  ]
});