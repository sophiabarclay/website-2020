<template>
  <div v-if="main">
    <h2 v-if="main.subtitle" class="futura-italic">{{ main.subtitle }}</h2>
    <div v-for="(text, idx) in main.overview" :key="idx">
      <h4 v-html="text" />
    </div>
    <!-- <div class="links">
      <a v-if="main.liveSite" :href="main.liveSite" target="_blank"
        ><h4 class="wavy-link futura-italic">Live site</h4></a
      >
    </div> -->
    <div v-if="main.build" class="details">
      <h4 class="futura-italic">Technologies used:</h4>
      <h4>{{ main.build }}</h4>
    </div>
    <img
      v-if="(main.images || {})[0].image"
      :src="require(`@/assets/images/work/${main.images[0].image}`)"
      :alt="main.images[0].title"
      :style="
        main.images[0].width ? `width: ${main.images[0].width}` : 'width: 100%'
      "
    />
    <h4 v-if="main.footnote" v-html="main.footnote" />
  </div>
</template>

<script>
export default {
  name: "ProjectDst",
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

img {
  margin-bottom: 26px;
}
</style>
