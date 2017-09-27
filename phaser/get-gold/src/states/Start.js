/* globals __DEV__ */
import Phaser from 'phaser'
import BgmBtn from '../sprites/BgmBtn'
import PersonInfo from '../sprites/PersonInfo'
import vars from '../vars'

export default class extends Phaser.State {
  init() {
    //背景
    let bgImg = game.make.image(0, 0, 'bg');
    bgImg.width = this.world.width;
    bgImg.height = this.world.height;
    this.world.addChild(bgImg)

    //首页标题
    let homeTitle = game.make.image(this.world.centerX, this.world.height * 0.1, 'homeTitle');
    homeTitle.anchor.setTo(0.5, 0)
    homeTitle.width = this.world.width * 0.8;
    homeTitle.height = homeTitle.width * 0.8
    this.world.addChild(homeTitle)
    //云朵
    let cloudLeft = game.make.image(0, this.world.height * 0.25, 'cloudLeft');
    cloudLeft.width = this.world.width * 0.35;
    cloudLeft.height = cloudLeft.width * 2;
    this.world.addChild(cloudLeft)
    let cloudRight = game.make.image(this.world.width, this.world.height * 0.25, 'cloudRight');
    cloudRight.anchor.setTo(1, 0)
    cloudRight.width = this.world.width * 0.35;
    cloudRight.height = cloudRight.width * 2;
    this.world.addChild(cloudRight)

    //个人信息
    game.add.existing(new PersonInfo())

    //音乐开关
    vars.bgm = game.add.audio('bgm', 1, true);
    game.add.existing(new BgmBtn());

    //人物
    let boyImg = game.make.image(this.world.centerX, homeTitle.world.y + homeTitle.height + 30, 'boy');
    boyImg.anchor.setTo(0.5, 0)
    boyImg.width = this.world.width * 0.3;
    boyImg.height = boyImg.width * 1.5;
    this.world.addChild(boyImg)
    //开始按钮
    let btnStart = game.make.button(this.world.centerX, boyImg.world.y + boyImg.height, 'btnStart', function () {
      game.state.start('Game');
    });
    btnStart.anchor.setTo(0.5, 0)
    btnStart.width = this.world.width * 0.6;
    btnStart.height = cloudRight.width * 0.4;
    this.world.addChild(btnStart)


  }
  preload() {
  }

  create() {
    vars.bgm.play();
  }
}
