export default {
  centerGameObjects(objects){
    objects.forEach(function (object) {
      object.anchor.setTo(0.5)
    })
  },
  getRandomX(worldRandomX,widthTmp){
    var tmp = game.world.randomX;
    if (tmp < widthTmp / 2) {
      tmp += widthTmp / 2;
    } else if (tmp > game.world.width - widthTmp / 2) {
      tmp -= widthTmp / 2;
    }
    return tmp;
  }
}

