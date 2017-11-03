import 'pixi'
import 'p2'
import Phaser from 'phaser'

import BootState from './states/Boot'
import SplashState from './states/Splash'
import StartState from './states/Start'
import GameState from './states/Game'
import OverState from './states/Over'

import config from './config'


class Game extends Phaser.Game {
  constructor () {
    const docElement = document.documentElement
    const width = docElement.clientWidth
    const height = docElement.clientHeight

    super(width, height, Phaser.CANVAS, 'content', null)

    this.state.add('Boot', BootState, false)
    this.state.add('Splash', SplashState, false)
    this.state.add('Start', StartState, false)
    this.state.add('Game', GameState, false)
    this.state.add('Over', OverState, false)

    this.state.start('Boot')

  }
}

window.game = new Game()