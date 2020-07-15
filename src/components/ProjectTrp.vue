<template>
  <div v-if="main">
    <h2 v-if="main.subtitle" class="futura-italic">{{ main.subtitle }}</h2>
    <h4 v-html="main.intro" />
    <div v-if="main.build" class="details">
      <h4 class="futura-italic">Build:</h4>
      <h4>{{ main.build }}</h4>
    </div>
    <!-- <div v-for="(text, idx) in main.overview" :key="idx">
      <h4 v-html="text" />
    </div> -->
    <div class="d3">
      <h2>Vue.D3.Sunburst</h2>
      <div>
        <img
          v-if="(main.images || {})[0].image"
          :src="require(`@/assets/images/work/${main.images[0].image}`)"
          :alt="main.images[0].title"
          style="width: 100%;"
        />
        <h5>{{ main.images[0].title }}</h5>
      </div>
      <h4 v-html="main.overview[0]" />
      <div>
        <img
          v-if="(main.images || {})[1].image"
          :src="require(`@/assets/images/work/${main.images[1].image}`)"
          :alt="main.images[1].title"
          height="350"
        />
        <h5>{{ main.images[1].title }}</h5>
      </div>
      <h4 v-html="main.overview[1]" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectTui",
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

h5 {
  margin-top: 8px;
}

.d3-images {
  display: flex;
  flex-wrap: wrap;
}
</style>
