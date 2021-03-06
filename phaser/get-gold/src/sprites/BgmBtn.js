import Phaser from 'phaser'
import vars from '../vars'

export default class extends Phaser.Button {
    constructor() {
        var key = 'bgmOpen';
        if(!vars.playingMusic){
            vars.bgm.pause();
            key = 'bgmClose';
        }
        super(game, game.world.width-game.world.width*0.13, game.world.width*0.13, key,function(){
            if(vars.playingMusic){
                vars.bgm.pause();
                this.loadTexture('bgmClose');
                vars.playingMusic = false;
                this.angle = 0;
            } else {
                vars.bgm.resume();
                this.loadTexture('bgmOpen');
                vars.playingMusic = true
            }
        })
        this.anchor.setTo(0.5);
        this.width = game.world.width*0.13;
        this.height = game.world.width*0.13;

    }

    update() {
        if(vars.playingMusic){
            this.angle += 5;
        }
    }
}
