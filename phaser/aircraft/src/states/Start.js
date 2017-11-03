/* globals __DEV__ */
import Phaser from 'phaser'
import vars from '../vars'

export default class extends Phaser.State {
  init() {
    //背景
    let bgTileSprite = new Phaser.TileSprite(game,0,0,this.world.width,this.world.height,'bg');
    bgTileSprite.autoScroll(0,50)
    bgTileSprite.inputEnabled = true;
    bgTileSprite.events.onInputUp.add(function(obj){
      this.state.start('Game')
    },this);
    this.world.addChild(bgTileSprite)

    //logo
    let logoImg = game.make.image(this.world.centerX, 0, 'logo');
    logoImg.anchor.setTo(0.5, -1)
    logoImg.width = this.world.width * 0.8;
    bgTileSprite.addChild(logoImg)

    //开始提示
    let startText = new Phaser.Text(game,this.world.centerX,this.world.centerY,'点击屏幕开始')
    startText.anchor.setTo(0.5,0)
    startText.fontSize = game.world.width*0.05;
    startText.update = function(){
      if(this.alpha <= 0) this.alpha = 1;
      this.alpha -= 0.015;
    }
    this.world.addChild(startText)

    //音乐开关
    // vars.bgm = game.add.audio('bgm', 1, true);
    // game.add.existing(new BgmBtn());

  }
  preload() {
  }

  create() {
  }
}
