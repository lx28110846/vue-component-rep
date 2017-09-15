<template>
    <div class="prize-board">
        <ul :style="rotateStyle">
            <li v-for="item in prizeList" :key="item.id" :style="item.styleObject">
                <a href="#" :style="{transform: aTransform}">
                    {{item.name}}
                </a>
            </li>
        </ul>
        <div class="starter">
            <div class="arrow"></div>
            <div class="start-btn" @click="preStart">
                <span>抽奖</span>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'

export default {
    props: ['prizeList'],
    data() {
        return {
            aTransform: '',
            rotateStyle: {},
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
                transform: 'rotate(' + (this.rotate * i + 90 - this.rotate / 2) + 'deg) skew(' + skew + 'deg)',
                // backgroundColor: this.prizeList[i].bgColor
            }
            Vue.set(this.prizeList[i], 'styleObject', style);
        }
    },
    methods: {
        preStart: function() {
            this.$emit("setIsPlaying", true);
        },
        start: function(loterry) {
            var self = this;
            this.rotate = this.rotate - this.rotate % 360 + this.minRotate + 360 - loterry * 360 / this.count;
            this.rotateStyle = {
                transform: 'rotate(' + this.rotate + 'deg)',
                transitionDuration: this.duration + 's'
            };
            setTimeout(function() {
                self.$emit("setIsPlaying", false);
            }, this.duration * 1000);
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

        li:nth-child(odd) {
            background-color: #ffbc20
        }

        li:nth-child(even) {
            background-color: #FFF4D6 // background-color: #FFE226
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

$outerFrameColor1: #ffbc20;
$outerFrameColor0: #e60101;
$innerBtnColor: #b50101;

.starter {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 4.8rem;
    height: 4.8rem;
    background-color: $outerFrameColor0;
    border: 0.3rem solid $outerFrameColor1;
    border-radius: 50%;
    z-index: 10;

    .arrow {
        position: absolute;
        top: -1.6rem;
        left: 50%;
        transform: translateX(-50%);
        border-left: 0.5rem solid transparent;
        border-right: 0.5rem solid transparent;
        border-bottom: 1.8rem solid $outerFrameColor0;
    }

    .start-btn {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        width: 3.6rem;
        height: 3.6rem;
        background-color: $innerBtnColor;
        border-radius: 50%;
        box-shadow: 0 0 1rem 0px #FFF;

        span {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
            font-size: 1.2rem;
            width: 2.4rem;
            color: $outerFrameColor1;
        }
    }
}
</style>