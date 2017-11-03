import Phaser from 'phaser'

export default class extends Phaser.Sprite {
    constructor() {
        super(game, game.world.centerX, game.world.height, 'me')
        this.anchor.setTo(0.5);
        this.width = game.world.width*0.2;
        this.height = this.width*1.25

        //在游戏中构造物理身体，拥有质量，可以碰撞
        game.physics.arcade.enable(this, Phaser.Physics.ARCADE);
        this.body.collideWorldBounds = true;
        this.body.bounce.set(1);
        this.body.immovable = true;

        //我的子弹
        this.bullets = game.add.group();
        this.bullets.enableBody = true;
        this.bullets.physicsBodyType = Phaser.Physics.ARCADE;
        this.bullets.createMultiple(50, 'bullet');
        this.bullets.setAll('anchor.x', 0.5);
        this.bullets.setAll('anchor.y', 1);
        this.bullets.setAll('outOfBoundsKill', true);
        this.bullets.setAll('checkWorldBounds', true);
        //自己开火
        game.time.events.loop(150, function () {
            let bullet = this.bullets.getFirstExists(false);
            if (bullet) {
                bullet.reset(this.x, this.top+8);
                bullet.body.velocity.y = -1200
            }
        }, this);
        
        //死亡爆炸动画，跳转over场景
        this.dead = function(){
            this.bullets.destroy();
            let explosion = game.add.sprite(this.body.x,this.body.y,'me_die');
            explosion.width = this.width;
            explosion.height = this.height;
            explosion.animations.add('me_die').onComplete.add(function(){
                this.state.start('Over');
            },game);

            explosion.reset(this.body.x,this.body.y)
            explosion.play(explosion.key,3,false,true)
        }
    }

    update() {
        this.x = game.input.x;
        this.y = game.input.y;

        if (this.x < this.width/2) {
            this.x = this.width/2;
        } else if (this.x > game.width-this.width/2) {
            this.x = game.width-this.width/2;
        }

        if (this.y < this.height/2) {
            this.y = this.height/2;
        } else if (this.y > game.height-this.height/2) {
            this.y = game.height-this.height/2;
        }
    }
}
