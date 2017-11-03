/* globals __DEV__ */
import Phaser from 'phaser'
import Me from '../sprites/Me'
import Planes from '../sprites/Planes'
import vars from '../vars'

export default class extends Phaser.State {
  init() {
    //背景
    let bgTileSprite = new Phaser.TileSprite(game,0,0,this.world.width,this.world.height,'bg');
    bgTileSprite.autoScroll(0,30)
    this.world.addChild(bgTileSprite)

    //对象初始加入世界
    game.physics.startSystem(Phaser.Physics.ARCADE);//物理
    //创建人物精灵
    vars.me = new Me();
    game.add.existing(vars.me)
    //清零本局得分
    vars.currentGameScore = 0;
    //左上角分数显示
    vars.scoreDisplay = game.add.text(10,10,'Score: '+vars.currentGameScore);
    //创建敌人池
    vars.planes1 = new Planes({
      selfPool: 30,
      selfPic: 'plane1',
      diePic: 'plane1_die',
      score: 100,
      interval: 300,
      speed: 0,
      life: 1
    });
    vars.planes2 = new Planes({
      selfPool: 10,
      selfPic: 'plane2',
      diePic: 'plane2_die',
      score: 500,
      interval: 4*1000,
      speed: 200,
      life: 8
    });
    vars.planes3 = new Planes({
      selfPool: 50,
      selfPic: 'plane3',
      diePic: 'plane3_die',
      score: 1000,
      interval: 10*1000,
      speed: 80,
      life: 20
    });

  }
  preload() { }

  create() {
  }

  update() {
  }
}
