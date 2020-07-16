<template>
  <div v-if="main">
    <h4>Discover BP is a web platform for new joiners at BP. The site is made up of various instructional information guiding employees on matters such as the code of conduct and how to organise a meeting.</h4>
    <div class="image-small">
      <img
        :src="require('@/assets/images/work/dbp-overview.png')"
        alt="Discover BP overview"
        width="100%"
      />
    </div>
    <!-- <video class="video">
      <source src="~@/assets/images/work/history-vid-1.mov" type="video/mp4">
    </video> -->
    <h2>Phase One: React to Vue.js</h2>
    <h4>BP was looking to make various improvements to the site, including attaching a CMS to allow site managers to update content at will.</h4>
    <h4>The site, which was originally written in React, first needed to be converted into Vue.js, in order to allow future Vue.js developers to continue work on the site. As I had previous experience in React, largely from my studies at General Assembly, I was chosen to complete this first stage of the project.</h4>
    <h4>The new Vue.js version needed to be, from a user's standpoint, identical, allowing for a seemless switch over on completion. </h4>
    <h4>Large sections of the code were able to be copied over directly, although many of the components needed rebuilding, so that they would be compatible with the future CMS.</h4>
    <h4>By continuously switching between React and Vue.js code, phase one of this project greatly solidified my knowledge of both frameworks, by bettering my understanding of their differences.</h4>
    <div class="image">
      <img
        :src="require('@/assets/images/work/dbp-checklist.png')"
        alt="CMS"
      />
      <h5>New joiners checklist. Checked boxes are stored and retrieved using user authentication and Vuex.</h5>
    </div>
    <h2>Phase Two: Building the CMS</h2>
    <div class="image">
      <img
        :src="require('@/assets/images/work/dbp-cms-topics.png')"
        alt="CMS"
      />
      <h5>CMS</h5>
    </div>
    <div class="image">
      <img
        :src="require('@/assets/images/work/dbp-cms-overview.png')"
        alt="CMS"
      />
      <h5>CMS</h5>
    </div>
    <div class="image">
      <img
        :src="require('@/assets/images/work/dbp-cms.png')"
        alt="CMS"
      />
      <h5>CMS</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectBp",
  props: {
    main: {
      type: Object,
      required: false,
      default: () => {}
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/styles/main.scss";
@import "~@/styles/fonts.scss";

.links {
  display: flex;
  a {
    text-decoration: none;
  }
  .separator {
    padding: 0 4px;
  }
}

.portrait {
  width: 320px;
}

.details {
  margin-bottom: 26px;
  h4 {
    display: inline;
  }
}

.image {
  padding-bottom: 12px;
  img {
    width: calc(100% + 80px);
    margin-left: -40px;
    margin-bottom: -40px;
  }
  &-small {
    display: flex;
    justify-content: center;
    img {
      width: 75%;
    }
  }
}

</style>
