import Phaser from 'phaser'
import EndLayout from '../sprites/EndLayout'
import vars from '../vars'

export default class extends Phaser.Graphics {
    constructor(time) {
        super(game, game.world.centerX-20, game.world.width*0.07)
        this.width = game.world.width*0.3;
        this.height = game.world.width*0.3*0.4;
        this.beginFill(0xFFFFFF,0.5);
        this.drawRoundedRect(0,0,game.world.width*0.2,game.world.width*0.3*0.35,5);//画圆角矩形
        this.endFill();
        
        function getShowTimeText(time){
            if(time>=0 && time<10) return '0:0'+time;
            if(time>=10 && time<60) return '0:'+time;
        }

        let showTime = game.make.text(this.centerX-this.x+8,this.centerY-this.y+2,getShowTimeText(time));
        // showTime.anchor.setTo(0.5)
        showTime.fontSize = game.world.width*0.08;
        this.addChild(showTime);

        var self = this;
        var countDown = setInterval(function(){
            time -= 1;
            showTime.text = getShowTimeText(time);
            vars.countDown = time;
            if(time<=0){
                game.paused = true;
                clearInterval(countDown);
                game.add.existing(new EndLayout())
            }
        },1000);
    }

    update() {
    }
}
