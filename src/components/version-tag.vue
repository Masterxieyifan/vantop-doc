<!--
 * @Descripttion:
 * @Author: 蔡远程
 * @Date: 2021-08-27 09:40:12
 * @LastEditTime: 2021-11-15 14:15:14
 * @LastEditors: 蔡远程
-->
<template>
    <div class="version-tag--wrap" :style="{'color': color}">
        <div :style="{'background': `linear-gradient(to right,transparent,${color})`}"></div>
        <div :style="{'background': `linear-gradient(to bottom,transparent,${color})`}"></div>
        <div :style="{'background': `linear-gradient(to left,transparent,${color})`}"></div>
        <div :style="{'background': `linear-gradient(to top,transparent,${color})`}"></div>
        {{text}}
    </div>
</template>

<script>
export default {
    name: 'VersionTag',
    props: {
        text: {
            type: String,
            default: '',
        },
        color: {
            type: String,
            default: '#22C55E',
        },
    },
};
</script>

<style scoped lang="scss">
.version-tag--wrap {
    position: relative;
    padding: 10px;
    font-size: 14px;
    transition: 0.5s;
    letter-spacing: 4px;
    overflow: hidden;
    div {
        position: absolute;
        &:nth-child(1){
            width: 100%;
            height: 2px;
            top: 0;
            left: -100%;
            animation: versionAnimate1 2s linear infinite;
        }
        &:nth-child(2){
            width: 2px;
            height: 100%;
            top: -100%;
            right: 0;
            animation: versionAnimate2 2s linear infinite;
            animation-delay: 0.5s;
        }
        &:nth-child(3){
            width: 100%;
            height: 2px;
            bottom: 0;
            right: -100%;
            animation: versionAnimate3 2s linear infinite;
            animation-delay: 1s;
        }
        &:nth-child(4){
            width: 2px;
            height: 100%;
            bottom: -100%;
            left: 0;
            animation: versionAnimate4 2s linear infinite;
            animation-delay: 1.5s;
        }
    }
}
@keyframes versionAnimate1 {
    0% {
        left: -100%;
    }
    50%,100% {
        left: 100%;
    }
}
@keyframes versionAnimate2 {
    0% {
        top: -100%;
    }
    50%,100% {
        top: 100%;
    }
}
@keyframes versionAnimate3 {
    0% {
        right: -100%;
    }
    50%,100% {
        right: 100%;
    }
}
@keyframes versionAnimate4 {
    0% {
        bottom: -100%;
    }
    50%,100% {
        bottom: 100%;
    }
}
</style>
