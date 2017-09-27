import Phaser from 'phaser'
import vars from '../vars'
import utils from '../utils'
import * as api from '../api'

export default class extends Phaser.Image {
  constructor(score) {

    api.scoreRefresh({
      openId: vars.personInfo.openId,
      score: vars.totalScore
    }).then(res => {
      console.log(res);
    })

    super(game, 0, 0);
    var color = '#ffc107',
      color16 = 0xffc107,
      self = this;

    //遮罩层
    let mask = game.make.graphics(0, 0)
    mask.beginFill();
    mask.drawRect(0, 0, game.world.width, game.world.height);//画圆角矩形
    mask.alpha = 0.75;
    mask.endFill();
    this.addChild(mask)
    //星
    let endStar = game.make.image(game.world.centerX, game.world.height * 0.1, 'endStar');
    endStar.anchor.setTo(0.5, 0)
    endStar.width = game.world.width * 0.65
    endStar.height = endStar.width * 0.9
    this.addChild(endStar)
    //获得金币数
    let currentScoreTip = game.make.text(game.world.centerX, endStar.y + endStar.height, '您获得的金币为');
    currentScoreTip.anchor.setTo(0.5, 0)
    currentScoreTip.fill = color;
    currentScoreTip.fontSize = 38
    this.addChild(currentScoreTip)
    let currentScore = game.make.text(game.world.centerX, currentScoreTip.y + currentScoreTip.height + 10, vars.currentGameScore);
    currentScore.anchor.setTo(0.5, 0)
    currentScore.fill = color;
    currentScore.fontSize = 48
    this.addChild(currentScore)
    //再来一局
    let retryBtn = game.make.graphics(game.world.width * 0.1, currentScore.y + currentScore.height + 20)
    retryBtn.name = "retryBtn"
    retryBtn.lineStyle(2, color16, 2);
    retryBtn.drawRoundedRect(0, 0, game.world.width * 0.3, game.world.width * 0.3 * 0.4, 5);//画圆角矩形
    retryBtn.inputEnabled = true;
    let retryBtnText = game.make.text(retryBtn.centerX - retryBtn.x, retryBtn.centerY - retryBtn.y, '再来一局');
    retryBtnText.anchor.setTo(0.5);
    retryBtnText.fill = color;
    retryBtnText.fontSize = game.world.width * 0.05;
    game.input.onDown.add(function (pointer) {
      if (pointer.targetObject && pointer.targetObject.sprite.name == 'retryBtn') {
        game.paused = false;
        self.destroy();
        game.state.restart();
      }
    })
    retryBtn.addChild(retryBtnText);
    this.addChild(retryBtn)
    //去聊天室
    let goChatBtn = game.make.graphics(game.world.width - game.world.width * 0.1 - game.world.width * 0.3, currentScore.y + currentScore.height + 20)
    goChatBtn.name = "goChatBtn"
    goChatBtn.lineStyle(2, color16, 2);
    goChatBtn.drawRoundedRect(0, 0, game.world.width * 0.3, game.world.width * 0.3 * 0.4, 5);//画圆角矩形
    goChatBtn.inputEnabled = true;
    let goChatBtnText = game.make.text(goChatBtn.centerX - goChatBtn.x, goChatBtn.centerY - goChatBtn.y, '走，开会去');
    goChatBtnText.anchor.setTo(0.5);
    goChatBtnText.fill = color;
    goChatBtnText.fontSize = game.world.width * 0.05;
    game.input.onDown.add(function (pointer) {
      if (pointer.targetObject && pointer.targetObject.sprite.name == 'goChatBtn') {
        console.log('goChatBtn');
        parent.gotoChat();
      }
    })
    goChatBtn.addChild(goChatBtnText);
    this.addChild(goChatBtn)
  }

  update() {
  }
}
