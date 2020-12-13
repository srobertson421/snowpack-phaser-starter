export default function scaleToFullScreen(gameObject, scene) {
  const scaleX = scene.cameras.main.width / gameObject.width;
  const scaleY = scene.cameras.main.height / gameObject.height;
  const scale = Math.max(scaleX, scaleY);
  return gameObject.setScale(scale).setScrollFactor(0);
}