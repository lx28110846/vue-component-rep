import Phaser from 'phaser'
import vars from '../vars'
import utils from '../utils'

export default class extends Phaser.Graphics {
  constructor(score) {
    super(game, vars.boy.world.x+vars.boy.width/2, vars.boy.world.y-vars.boy.height/2);
    this.beginFill();
    var tipX = 0;
    if(vars.boy.x>game.world.width-vars.boy.width){
        tipX = -(game.world.width*0.25+50);
    }
    this.drawRoundedRect(tipX,0,50,35,5);//画圆角矩形
    this.endFill();
    this.alpha = 0.5;
    //内容
    let text = game.make.text(tipX+8,2,'+'+score)
    text.fill = '#FFF';
    // text.fontSize = 28;
    text.alpha = 2;
    this.addChild(text);
    var self = this;
    game.time.events.loop(500, function () {
        text.destroy();
        self.destroy();
    });
  }

  update() {
    this.y -= 2;
  }
}
