import Phaser from 'phaser'
import { centerGameObjects } from '../utils'
import vars from '../vars'
import * as api from '../api'

export default class extends Phaser.State {
  init() {
  }

  preload() {
    this.load.image('bg', './assets/images/bg.png');
    this.load.image('homeTitle', './assets/images/home-title.png');
    this.load.image('cloudLeft', './assets/images/cloud-left.png');
    this.load.image('cloudRight', './assets/images/cloud-right.png');
    this.load.image('bgmOpen', './assets/images/bgm-open.png');
    this.load.image('bgmClose', './assets/images/bgm-close.png');
    this.load.image('boy', './assets/images/boy.png');
    this.load.image('btnStart', './assets/images/btn-start.png');
    this.load.image('pinfo', './assets/images/pinfo.png');
    this.load.image('scoreBg', './assets/images/score-bg.png');
    this.load.image('gold', './assets/images/gold.png');
    this.load.image('company', './assets/images/company.png');
    this.load.image('csii', './assets/images/csii.png');
    this.load.image('endStar', './assets/images/end-star.png');

    this.load.audio('bgm', 'assets/bgm/OMFG-Hello-low.mp3');
  }

  create() {
    // this.state.start('Start')
    //?query=${userInfo.openId}&score=${userInfo.score}&username=${userInfo.userName}
    //ohoJmwEmPJE5kV11kdFn50EF9LDc

    function GetQueryString(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return decodeURI(r[2]); 
      return null;
    }
    vars.personInfo.nickName = GetQueryString('username')
    vars.personInfo.totalScore = vars.totalScore = parseInt(GetQueryString('score'));
    vars.personInfo.openId = GetQueryString('query')

    // api.userQuery({
    //   openId: 'ohoJmwEmPJE5kV11kdFn50EF9LDc'
    // }).then(res => {
    //   if (res.data.userInfo) {
    //     vars.personInfo.nickName = res.data.userInfo.userName
    //     vars.personInfo.totalScore = vars.totalScore = res.data.userInfo.score
    //     vars.personInfo.openId = res.data.userInfo.openId
    //   }
    // })
    var self = this;
    vars.companyList = ['金融科技','云计算','大数据','分布式','直销银行','营销平台','互联网银行','统一支付']
    api.getCompanyList().then(res => {
      vars.companyList.push.apply(vars.companyList,res.data.List);
      console.log(vars.companyList);
      self.state.start('Start')
    })
  }
}
