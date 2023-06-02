<template>
    <!-- https://www.section.io/engineering-education/build-a-portfolio-website-with-vite-and-threejs/ -->

    <!-- https://threejs.org/docs/index.html#manual/en/introduction/Drawing-lines -->
    
    <canvas id="ThreeGettingStarted"></canvas>

</template>

<script>
import * as THREE from 'three';

document.addEventListener("DOMContentLoaded", () => {

    const canvas = document.getElementById('ThreeGettingStarted');
    const renderer = new THREE.WebGLRenderer({ canvas: canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const scene = new THREE.Scene();

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);

    scene.add(cube);
    camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render(scene, camera);
    };

    animate();
})
</script>