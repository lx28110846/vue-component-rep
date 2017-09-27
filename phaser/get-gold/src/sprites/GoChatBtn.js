import Phaser from 'phaser'
import vars from '../vars'
import utils from '../utils'

export default class extends Phaser.Graphics {
  constructor(score) {
    super(game, game.world.width-game.world.width*0.23, game.world.width*0.23);
    this.name='GoChatBtn'
    this.beginFill(0xffeb3b);
    this.drawRoundedRect(0,0,game.world.width*0.2,game.world.width*0.08,5);//画圆角矩形
    this.endFill();
    //内容
    let text = game.make.text(this.centerX-this.x,this.centerY-this.y+2,'进入聊天室')
    text.anchor.setTo(0.5)
    text.fontSize = game.world.width*0.035;
    this.addChild(text);

    this.inputEnabled = true;
    game.input.onDown.add(function(pointer){
      if(pointer.targetObject && pointer.targetObject.sprite.name == 'GoChatBtn'){
        console.log('GoChatBtn.');
        parent.gotoChat();
      }
    })
  }

  update() {
  }
}
