<template>
    <div id="preloader"></div>
</template>
<script setup>
import { onMounted } from "@vue/runtime-core";

onMounted(() => {
    console.log(window.onload)
    window.addEventListener('load')

    window.onload = function () {
        const preloader = document.querySelector('#preloader');
        preloader.classList.add('preloader-hidden');
    };
})
</script>
<style lang="scss">
#preloader {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    background-color: #333;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

#preloader::before {
    content: '';
    width: 50px;
    height: 50px;
    background-color: #fff;
    border-radius: 50%;
    animation: preloader-spin 1s linear infinite;
}

@keyframes preloader-spin {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

.preloader-hidden {
    display: none;
}
</style>