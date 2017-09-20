import Phaser from 'phaser'

export default class extends Phaser.Sprite {
    constructor() {
        super(game, game.world.centerX, game.world.height, 'mushroom')
        this.anchor.setTo(0.5);

        //在游戏中构造物理身体，拥有质量，可以碰撞
        game.physics.arcade.enable(this, Phaser.Physics.ARCADE);
        this.body.collideWorldBounds = true;
        this.body.bounce.set(1);
        this.body.immovable = true;
    }

    update() {
        this.x = game.input.x;

        if (this.x < 32) {
            this.x = 32;
        }
        else if (this.x > game.width-32) {
            this.x = game.width-32;
        }
    }
}
