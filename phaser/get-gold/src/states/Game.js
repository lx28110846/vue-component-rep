/* globals __DEV__ */
import Phaser from 'phaser'
import Mushroom from '../sprites/Mushroom'
import Boy from '../sprites/Boy'
import vars from '../vars'

export default class extends Phaser.State {
  init() { }
  preload() { }

  create() {
    const bannerText = 'CSII'
    let banner = this.add.text(this.world.centerX, this.game.height * 0.8, bannerText)
    banner.font = 'Bangers'
    banner.padding.set(10, 16)
    banner.fontSize = 40
    banner.fill = '#77BFA3'
    banner.smoothed = false
    banner.anchor.setTo(0.5)

    const goldText = 'Gold: ';
    let goldTextBoard = game.add.text(game.world.centerX - 100, 100, goldText);
    vars.goldScore = 0;
    vars.goldBoard = game.add.text(game.world.centerX, 100, vars.goldScore);


    function initGame() {
      var golds;
      //对象初始加入世界
      game.physics.startSystem(Phaser.Physics.ARCADE);//物理
      //创建人物精灵
      vars.boy = new Boy();
      game.add.existing(vars.boy)
      //循环创建金币
      game.time.events.loop(800, function () {
        var mushroom = new Mushroom()
        // mushroom.update = function () {
          
        // }
        game.add.existing(mushroom)
      }, this);
    }

    function createGold() {

    }

    initGame();
  }

  render() {
    // if (__DEV__) {
    //   this.game.debug.spriteInfo(this.mushroom, 32, 32)
    // }
  }
}
