<template>
  <section class="video-gallery mx-auto">
    <iframe id="iframe-youtube" class="w-100 mx-auto d-block" style="aspect-ratio: 16/9; max-width: 720px" :src="video_list" frameborder="0"></iframe>

    <div class="my-slider my-3">
      <div v-for="(item, index) in cards" :key="`slide-${index}`">
        <div class="card">
          <img :src="`https://i.ytimg.com/vi/${item.yt_id}/hqdefault.jpg`" class="card-img" :alt="item.title"
            style="aspect-ratio: 16/9; object-fit: cover; " />
            <a @click="changeVideo(item.yt_id)" class="stretched-link"></a>
          <!-- <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">
              {{ item.desc }}
            </p>
            <a :href="item.link" class="btn btn-primary">{{
              item.btn_label ? item.btn_label : "Read More"
            }}</a>
          </div> -->
        </div>
      </div>
    </div>
  </section>

</template>

<script setup>
// import { tns } from "tiny-slider/src/tiny-slider";

import { onMounted, ref } from "vue";
onMounted(() => {
  var slider = tns({
    container: ".my-slider",
    slideBy: "page",
    mouseDrag: true,
    swipeAngle: false,
    loop: false,
    gutter: 15,
    controls: false,
    nav: false,
    responsive: {
      320: {
        items: 2,
        edgePadding: 30,
      },
      768: {
        items: 3,
      },
    },
  });
});

let cards = [
  {
    yt_id: "25-uWvTy8Xw",
    // title: "Personal financing within arm’s reach.",
  },
  {
    yt_id: "u-Hnqe3uqEA",
    // title: "How to apply via the MAE app for Maybank payroll customers",
  },
  {
    yt_id: "kMEn8eSp4CE",
    // title: "How to apply via the M2U web for Maybank payroll customers",
  },
  {
    yt_id: "qbEHSSPmkLk",
    // title: "How to apply via the MAE app for non-Maybank payroll customers.",
  },
  {
    yt_id: "So9HrNSjPfE",
    // title: "How to apply via the M2U web for non-Maybank payroll customers.",
  },
];

let video_list = ref(
  `https://www.youtube.com/embed/${cards[0].yt_id}?enablejsapi=1&autoplay=1`
);

function changeVideo(yt_id) {
  video_list.value = `https://www.youtube.com/embed/${yt_id}?enablejsapi=1&autoplay=1`;
}
</script>

<style lang="scss">
// @import "tiny-slider/dist/tiny-slider.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/tiny-slider.css";

.video-gallery .card {
  cursor: pointer;
}
</style>
