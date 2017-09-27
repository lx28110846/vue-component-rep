import Phaser from 'phaser'
import WebFont from 'webfontloader'

export default class extends Phaser.State {
  init () {}

  preload () {}

  create () {
    this.state.start('Splash')
  }
}
