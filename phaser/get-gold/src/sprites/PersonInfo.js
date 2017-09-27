import Phaser from 'phaser'
import vars from '../vars'

export default class extends Phaser.Sprite {
    constructor() {
        super(game, game.world.width*0.05, game.world.width*0.05, 'pinfo')
        this.width = game.world.width*0.35;
        this.height = this.width*0.45;

        //昵称
        let nickNameStr = vars.personInfo.nickName || '超级金币王'
        let nickName = game.make.text(90,25,nickNameStr)
        nickName.fontSize = 36;
        nickName.fill = '#FFF';
        this.addChild(nickName)

        //分数背景
        let scoreBg = game.make.image(90, 75, 'scoreBg');
        scoreBg.width = 220;
        scoreBg.height = 60;
        this.addChild(scoreBg)
        //金币图标
        let gold = game.make.image(scoreBg.world.x, scoreBg.world.y+2, 'gold');
        gold.width = 65;
        gold.height = 58;
        this.addChild(gold)

        //分数 添加到全局变量vars中
        vars.scoreBoard = game.make.text(scoreBg.centerX-20, scoreBg.world.y+10, vars.totalScore);
        vars.scoreBoard.fontSize = 36;
        vars.scoreBoard.fill = '#FFF';
        this.addChild(vars.scoreBoard)

    }

    update() {
    }
}
