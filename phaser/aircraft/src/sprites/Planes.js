import Phaser from 'phaser'
import vars from '../vars'

export default class extends Phaser.Group {
    constructor(config) {
        super(game)
        this.enableBody = true;
        this.physicsBodyType = Phaser.Physics.ARCADE;
        this.createMultiple(config.selfPool, config.selfPic);
        this.width = this.width * vars.zoom;
        this.height = this.height * vars.zoom;
        // this.setAll('anchor.x', 0.5);
        this.setAll('anchor.y', 0.5);
        this.setAll('outOfBoundsKill', true);
        this.setAll('checkWorldBounds', true);

        this.explosions = game.add.group();
        this.explosions.createMultiple(config.selfPool, config.diePic);
        this.explosions.forEach(function(explosion) {
          explosion.animations.add(config.diePic);
        }, this);

        game.time.events.loop(config.interval, function () {
            let plane = this.getFirstExists(false);
            if (plane) {
                plane.life = config.life
                plane.score = config.score
                let maxWidth = game.width - game.cache.getImage(config.selfPic).width;
                plane.reset(game.rnd.integerInRange(0, maxWidth), 0);
                if(!config.speed || config.speed == 0){
                    plane.body.velocity.y = game.rnd.integerInRange(1, 2) * 100;
                } else {
                    plane.body.velocity.y = config.speed;
                }
            }
        }, this);
    }

    update() {
        //我的子弹碰撞敌人
        game.physics.arcade.overlap(vars.me.bullets,this , function(bullet,plane){
            bullet.kill()
            plane.life--;
            if(plane.life <= 0){
                plane.kill();
                vars.currentGameScore += plane.score;
                vars.scoreDisplay.text = 'Score: '+vars.currentGameScore;
                var explosion = this.explosions.getFirstExists(false);
                explosion.reset(plane.body.x, plane.body.y);
                explosion.play(explosion.key, 5, false, true);
            }
        }, null, this);
        //自己碰撞敌人
        game.physics.arcade.overlap(vars.me,this , function(me,plane){
            plane.kill();
            var explosion = this.explosions.getFirstExists(false);
            explosion.reset(plane.body.x, plane.body.y);
            explosion.play(explosion.key, 5, false, true);
            me.kill()
            me.dead()
        }, null, this);
    }
}
