<template>
    <div class="starter">
        <div class="arrow"></div>
        <div class="start-btn" @click="start">
            <span>抽奖</span>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        start: function() {
            this.$emit("start");
        }
    }
}
</script>
<style lang="scss">
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