import Phaser from 'phaser'
import vars from '../vars'

export default class extends Phaser.Sprite {
  constructor(boy) {
    super(game, getRandomX(), 0, 'mushroom');
    function getRandomX(){
      var tmp = game.world.randomX;
      if(tmp < 32) {
        tmp += 32;
      } else if(tmp > game.world.width-32) {
        tmp -= 32;
      }
      return tmp;
    }
    this.anchor.setTo(0.5)

    var nowFallingTime = (15 + Math.round(Math.random() * 10)) * 100;
    game.physics.enable([this], Phaser.Physics.ARCADE); //这个是设置能否被触碰
    game.add.tween(this).to({ y: game.world.height }, nowFallingTime, Phaser.Easing.Linear.None, true)
      .onComplete.add(function (item) { item.destroy(); }, this);
  }

  update() {
    game.physics.arcade.collide(this, vars.boy, null, function (gold) {
      vars.goldScore += 5;
      vars.goldBoard.text = vars.goldScore;
      gold.destroy();
    }, this);
    
  }
}
