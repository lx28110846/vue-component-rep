<template>
    <div class="prize-board">
        <ul :style="rotateStyle">
            <li v-for="item in prizeList" :key="item.id" :style="item.styleObject">
                <a href="#" :style="{transform: aTransform}">
                    {{item.name}}
                </a>
            </li>
        </ul>
        <starter @start="start"></starter>
    </div>
</template>
<script>
import Vue from 'vue'
import Starter from './Starter'

export default {
    props: ['prizeList'],
    components: {
        Starter
    },
    data() {
        return {
            aTransform: '',
            rotateStyle: {},
            isPlaying: false,
            minRotate: 1800,
            rotate: 0,
            count: 0,
            duration: 5
        }
    },
    mounted() {
        this.count = this.prizeList.length;
        this.rotate = 360 / this.count;
        var skew = 90 - this.rotate;
        this.aTransform = 'skew(-' + skew + 'deg) rotate(' + ((-this.rotate / 2) - skew) + 'deg)';
        for (var i in this.prizeList) {
            this.prizeList[i].id = i;
            var style = {
                transform: 'rotate(' + (this.rotate * i + 90 - this.rotate/2) + 'deg) skew(' + skew + 'deg)',
                // backgroundColor: this.prizeList[i].bgColor
            }
            Vue.set(this.prizeList[i], 'styleObject', style);
        }
    },
    methods: {
        start: function() {
            if(this.isPlaying) return;
            this.isPlaying = true;
            var self = this;
            this.$emit("setIsPlaying",true);
            var loterry = this.getLoterry();
            this.rotate = this.rotate - this.rotate%360 + this.minRotate + 360 - loterry*360/this.count;
            this.rotateStyle = {
                transform: 'rotate('+ this.rotate +'deg)',
                transitionDuration: this.duration+'s'
            };
            setTimeout(function(){
                self.isPlaying = false;
                self.$emit("setIsPlaying",false);
            },this.duration*1000);
        },
        getLoterry: function(){
            var vmObj = this.$parent
            while(vmObj.$el.className != 'zhuanpan'){
                vmObj = vmObj.$parent;
            }
            return vmObj.$parent.$data.loterry
        }
    }
}
</script>
<style lang="scss">
.prize-board {
    width: 100%;
    height: 100%;

    ul {
        background-color: #FFF;
        position: relative;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        position: relative;
        overflow: hidden;
        box-shadow: 0 0 1rem 0.2rem #7d3d00;
        z-index: 3;

        transition: all 5s cubic-bezier(0.68, 0.01, 0.13, 1);

        li:nth-child(odd){
            background-color: #ffbc20
        }

        li:nth-child(even){
            background-color: #FFF4D6
            // background-color: #FFE226
        }

        li {
            position: absolute;
            width: 50%;
            height: 50%;
            transform-origin: 100% 100%;
            overflow: hidden;
            a {
                display: block;
                height: 200%;
                width: 200%;
                text-decoration: none;
                color: #e60101;
                padding-top: 1em;
                text-align: center;
            }
        }
    }
}
</style>