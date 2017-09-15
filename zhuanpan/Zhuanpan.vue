<template>
    <div class="zhuanpan" :style="{height: zHeight}">
        <div class="outer-frame">
            <div class="bg-frame">
                <prize-board :prizeList="prizeList" 
                    :preAction="preAction"
                    :afterAction="afterAction" 
                    @setIsPlaying="setIsPlaying"></prize-board>
            </div>
            <div class="bubbles" :class="playingClassName">
                <span v-for="(item,index) in 12" :key="item" :style="{transform: 'rotate(' + (30 * index + 1) + 'deg)'}">
                    <span></span>
                </span>
            </div>
        </div>
    </div>
</template>
<script>
import PrizeBoard from './PrizeBoard'

export default {
    props: ['prizeList','preAction','afterAction'],
    components: {
        PrizeBoard
    },
    data() {
        return {
            zWidth: '',
            zHeight: '',
            playingClassName: ''
        }
    },
    watch: {
        zWidth: function(value) {
            this.zHeight = value + 'px';
        }
    },
    mounted() {
        this.zWidth = document.querySelector('.zhuanpan').clientWidth;
    },
    methods: {
        setIsPlaying: function(isPlaying){
            if(isPlaying){
                this.playingClassName = 'playing';
                if(this.preAction) this.preAction();
            } else {
                this.playingClassName = '';
                if(this.afterAction) this.afterAction();
            }
        }
    }
}
</script>
<style lang="scss">
@keyframes bubbles1 {
    0% {
        background: radial-gradient(#ffc063, #ff8d00);
    }
    100% {
        background: radial-gradient(#ff9800, #fff);
        box-shadow: 0 0 0.5rem 0.3rem #fff;
    }
}

@keyframes bubbles2 {
    0% {
        background: radial-gradient(#ff7aee, #ff1ee2);
    }
    100% {
        background: radial-gradient(#ff00df, #fff);
        box-shadow: 0 0 0.5rem 0.3rem #fff;
    }
}

@keyframes bubbles3 {
    0% {
        background: radial-gradient(#78ff40, #4ce80c);
    }
    100% {
        background: radial-gradient(#4aff00, #fff);
        box-shadow: 0 0 0.5rem 0.3rem #fff;
    }
}

.zhuanpan {
    box-sizing: border-box;
    position: relative;
    width: 100%;
    height: 0;

    .outer-frame {
        padding: 1.4rem;
        position: relative;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: radial-gradient(#3c1c01 58%, #b76620 66%, #150a00 78%);
        box-shadow: 0 0 1rem 0.1rem #000;
        z-index: 1;

        .bg-frame {
            padding: 1.5rem;
            position: relative;
            width: 100%;
            height: 100%;
            background: radial-gradient(#ec99ff 58%, #c100ff 70%);
            border-radius: 50%;
            z-index: 1;
        }
        .bubbles {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 50%;
            left: 0;
            transform: translateY(-50%);

            span {
                display: block;
                position: absolute;
                width: 100%;
                top: 50%;

                span {
                    position: absolute;
                    left: 0.3rem;
                    width: 0.8rem;
                    height: 0.8rem;
                    background-color: #FFF;
                    border-radius: 50%
                }
            }
            span:nth-child(n) span {
                background: radial-gradient(#ffc063, #ff8d00);
                animation: bubbles1 1.5s infinite steps(2);
            }

            span:nth-child(2n) span {
                background: radial-gradient(#ff7aee, #ff1ee2);
                animation: bubbles2 1.5s .3s infinite steps(2);
            }

            span:nth-child(3n) span {
                background: radial-gradient(#78ff40, #4ce80c);
                animation: bubbles3 1.5s .6s infinite steps(2);
            }
        }
        
        .bubbles.playing span:nth-child(n) span {
            background: radial-gradient(#ffc063, #ff8d00);
            animation: bubbles1 0.3s infinite steps(2);
        }

        .bubbles.playing span:nth-child(2n) span {
            background: radial-gradient(#ff7aee, #ff1ee2);
            animation: bubbles2 0.3s .2s infinite steps(2);
        }

        .bubbles.playing span:nth-child(3n) span {
            background: radial-gradient(#78ff40, #4ce80c);
            animation: bubbles3 0.3s .4s infinite steps(2);
        }

    }
}
</style>


