/* globals __DEV__ */
import Phaser from 'phaser'
import vars from '../vars'

export default class extends Phaser.State {
  init() {
    //背景
    let bgTileSprite = new Phaser.TileSprite(game,0,0,this.world.width,this.world.height,'bg');
    bgTileSprite.autoScroll(0,30)
    this.world.addChild(bgTileSprite)

    //分数牌遮罩层
    let mask = game.make.graphics(0, 0)
    mask.beginFill();
    mask.drawRect(0, 0, game.world.width, game.world.height);//画圆角矩形
    mask.alpha = 0.55;
    mask.endFill();
    game.add.existing(mask)
    //分数牌
    let x = game.world.centerX - game.world.width * 0.3
    let width = game.world.width * 0.6
    let scoreBoard = game.add.graphics(x, game.world.centerY-130)
    scoreBoard.beginFill(0xF0F0F0)
    scoreBoard.lineStyle(1, 0x000, 1);
    scoreBoard.drawRoundedRect(0, 0, width, 200, 5);//画圆角矩形
    scoreBoard.moveTo(0,50)
    scoreBoard.lineTo(width,50)
    scoreBoard.moveTo(0,135)
    scoreBoard.lineTo(width,135)
    scoreBoard.endFill()
    //分数牌标题
    let title = game.make.text(scoreBoard.centerX-x,0,'飞机大战分数');
    title.anchor.setTo(0.5,-0.5)
    title.fontSize = 18
    scoreBoard.addChild(title);
    //分数
    let scoreText = game.make.text(scoreBoard.centerX-x,75,vars.currentGameScore);
    scoreText.anchor.setTo(0.5,0)
    scoreText.fontSize = 32
    scoreBoard.addChild(scoreText);
    //再来一局按钮
    let reStartBtn = game.make.graphics((scoreBoard.centerX-x)/2,150);
    reStartBtn.beginFill(0xB0B0B0)
    reStartBtn.lineStyle(1, 0x000, 1)
    reStartBtn.drawRoundedRect(0, 0, width/2, 35, 18);//画圆角矩形
    reStartBtn.endFill();
    reStartBtn.inputEnabled = true;
    reStartBtn.events.onInputUp.add(function(obj){
      this.state.start('Start')
    },this);
    let reStartBtnText = game.make.text(reStartBtn.centerX-reStartBtn.left,5,'再来一局');
    reStartBtnText.anchor.setTo(0.5,0)
    reStartBtnText.fontSize = 18
    reStartBtn.addChild(reStartBtnText)
    scoreBoard.addChild(reStartBtn)
  }
  preload() { }

  create() {
  }

  update() {
  }
}
