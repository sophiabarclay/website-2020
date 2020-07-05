<template>
  <svg
    class="svg"
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    viewBox="0 0 330 330"
  >
    <path :d="path" fill="#000" />
    <!-- <path :d="path" fill="#000" fill-rule="evenodd" clip-rule="evenodd" /> -->
  </svg>
</template>

<script>
import AppIcons from "@/mixins/AppIcons";

export default {
  name: "AppIcon",
  mixins: [AppIcons],
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      required: false,
      default: 24
    }
  },
  computed: {
    path() {
      const name = this.name;
      const paths = this.paths;
      return paths[name];
    }
  }
};
</script>

<style lang="scss" scoped>
.svg {
  &:hover {
    path {
      fill: #999999;
    }
  }
}
</style>
