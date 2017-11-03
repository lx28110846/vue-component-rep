import Phaser from 'phaser'

export default class extends Phaser.State {
  init () {}

  preload () {
    this.load.image('bg', './assets/images/bg.jpg');
    this.load.image('logo', './assets/images/logo.png');
    //自己，爆炸图
    this.load.image('me', './assets/images/me.png');
    this.load.spritesheet('me_die', './assets/images/me_die.png',98,122,4);
    //子弹
    this.load.image('bullet', './assets/images/bullet.png');

    //敌机，爆炸图
    this.load.image('plane1', './assets/images/plane1.png');
    this.load.spritesheet('plane1_die', './assets/images/plane1_die.png',59,36,3);
    this.load.image('plane2', './assets/images/plane2.png');
    this.load.spritesheet('plane2_die', './assets/images/plane2_die.png',70,92,4);
    this.load.image('plane3', './assets/images/plane3.png');
    this.load.spritesheet('plane3_die', './assets/images/plane3_die.png',165,256,6);
    
    // this.load.audio('bgm', 'assets/bgm/OMFG-Hello-low.mp3');
  }

  create () {
    this.state.start('Splash')
  }
}
