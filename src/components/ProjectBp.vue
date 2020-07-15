<template>
  <div v-if="main">
    <h2>Phase 1: React to Vue.js</h2>
    <h4>Before continuing development on</h4>
    <div class="details">
      <h4 class="futura-italic">Build: React, Vue.js</h4>
    </div>
    <h2>Phase 2: Building the CMS</h2>
    <div class="image">
      <img
        :src="require('@/assets/images/work/dbp-cms-topics.png')"
        alt="CMS"
        width="100%"
      />
      <h5>CMS</h5>
    </div>
    <div class="image">
      <img
        :src="require('@/assets/images/work/dbp-cms-overview.png')"
        alt="CMS"
        width="100%"
      />
      <h5>CMS</h5>
    </div>
    <div class="image">
      <img
        :src="require('@/assets/images/work/dbp-cms.png')"
        alt="CMS"
        width="100%"
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
</style>
