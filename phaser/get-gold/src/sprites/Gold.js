import Phaser from 'phaser'
import vars from '../vars'
import utils from '../utils'
import ScoreTip from '../sprites/ScoreTip'

export default class extends Phaser.Sprite {
  constructor() {
    var randomTmp = Math.ceil(Math.random() * 10),
      key, widthTmp, goldScoreTmp;
    if (randomTmp < 6) { //50%概率金币
      key = 'gold';
      goldScoreTmp = Math.ceil(Math.random() * 3)+2
      switch (goldScoreTmp) {
        case 3:
          widthTmp = game.world.width * 0.1;
          break;
        case 4:
          widthTmp = game.world.width * 0.125;
          break;
        case 5:
          widthTmp = game.world.width * 0.15;
          break;
      }
    }
    if(randomTmp>=6 && randomTmp<9){//30%概率公司
      key = 'company';
      goldScoreTmp = 6;
      widthTmp = game.world.width * 0.25;
    }
    if(randomTmp>=9 && randomTmp<11){//20%概率csii
      key = 'csii';
      goldScoreTmp = 8;
      widthTmp = game.world.width * 0.4;
    }

    super(game, utils.getRandomX(game.world.randomX, widthTmp), 0, key);
    this.anchor.setTo(0.5)
    this.glodScore = goldScoreTmp;
    this.width = this.height = widthTmp
    switch(key){
      case 'company':
        this.height = this.width * 0.5
        //公司名称
        let index = Math.ceil(Math.random() * vars.companyList.length-1);
        console.log(index);
        let companyName = vars.companyList[index];
        console.log(companyName)
        let text = game.make.text(this.world.centerX,this.world.centerY,companyName)
        text.anchor.setTo(0.5)
        text.fill = '#FFF';
        text.fontSize = 38
        this.addChild(text);
        break;
      case 'csii':
        this.height = this.width * 0.75
        break;
    }

    var nowFallingTime = (15 + Math.round(Math.random() * 10)) * 100; //下落速度
    game.physics.enable([this], Phaser.Physics.ARCADE); //这个是设置能否被触碰
    game.add.tween(this).to({ y: game.world.height }, nowFallingTime, Phaser.Easing.Linear.None, true)
      .onComplete.add(function (item) { item.destroy(); }, this);
  }

  update() {
    game.physics.arcade.collide(this, vars.boy, null, function (gold) {
      vars.currentGameScore += this.glodScore;
      vars.totalScore += this.glodScore;
      vars.scoreBoard.text = vars.totalScore;
      game.add.existing(new ScoreTip(this.glodScore))
      gold.destroy();
    }, this);

  }
}
