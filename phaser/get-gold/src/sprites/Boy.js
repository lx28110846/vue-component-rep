import Phaser from 'phaser'

export default class extends Phaser.Sprite {
    constructor() {
        super(game, game.world.centerX, game.world.height, 'boy')
        this.anchor.setTo(0.5);
        this.width = game.world.width*0.25;
        this.height = this.width*1.5

        //在游戏中构造物理身体，拥有质量，可以碰撞
        game.physics.arcade.enable(this, Phaser.Physics.ARCADE);
        this.body.collideWorldBounds = true;
        this.body.bounce.set(1);
        this.body.immovable = true;
    }

    update() {
        this.x = game.input.x;

        if (this.x < this.width/2) {
            this.x = this.width/2;
        }
        else if (this.x > game.width-this.width/2) {
            this.x = game.width-this.width/2;
        }
    }
}
