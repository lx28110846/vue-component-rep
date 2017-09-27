/* globals __DEV__ */
import Phaser from 'phaser'
import Gold from '../sprites/Gold'
import Boy from '../sprites/Boy'
import BgmBtn from '../sprites/BgmBtn'
import PersonInfo from '../sprites/PersonInfo'
import CountDown from '../sprites/CountDown'
import EndLayout from '../sprites/EndLayout'
import GoChatBtn from '../sprites/GoChatBtn'
import vars from '../vars'

export default class extends Phaser.State {
  init() {
    //背景
    let bgImg = game.add.image(0, 0, 'bg');
    bgImg.width = this.world.width;
    bgImg.height = this.world.height;

    //个人信息
    game.add.existing(new PersonInfo())

    //音乐开关
    game.add.existing(new BgmBtn());

    //进入聊天室按钮
    game.add.existing(new GoChatBtn());

    var golds;
    //对象初始加入世界
    game.physics.startSystem(Phaser.Physics.ARCADE);//物理
    //创建人物精灵
    vars.boy = new Boy();
    game.add.existing(vars.boy)
    //清零本局得分
    vars.currentGameScore = 0;
    //创建计时器
    game.add.existing(new CountDown(5));
    //循环创建金币
    game.time.events.loop(600, function () {
      var gold = new Gold()
      game.add.existing(gold)
    }, this);

  }
  preload() { }

  create() {
  }
}
