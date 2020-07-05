<template>
  <div class="project-main">
    <div class="side title">
      <h2 class="title" v-html="project.title" />
    </div>
    <div class="body main">
      <h4>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </h4>
      <h4>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </h4>
      <h4>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </h4>
      <h4>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </h4>
    </div>
    <div class="side description">
      <h2 class="">{{ project.year }}</h2>
    </div>
  </div>
</template>

<script>
import Work from "@/mixins/Work";

export default {
  name: "Squares",
  mixins: [Work],
  data() {
    return {
      project: {},
    };
  },
  mounted() {
    this.getProject();
  },
  methods: {
    getProject() {
      if (this.projects) {
        const project = this.projects.filter(project => project.title === 'Squares');
        this.project = project[0];
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.project-main {
  display: flex;
  justify-content: space-between;
  h2 {
    margin: 0;
  }
  .body {
    max-width: 1500px;
  }
  .side {
    display: flex;
    height: calc(100vh - 262px);
    width: 300px;
    position: sticky;
    top: 131px;
    @media only screen and (max-width: 750px) {
      display: none;
    }
  }
  .title {
    align-items: center;
    justify-content: flex-start;
    h2 {
      transform: rotate(180deg);
      writing-mode: vertical-lr;
    }
  }
  .description {
    // transform: rotate(90deg);
    align-items: center;
    white-space: nowrap;
    justify-content: flex-end;
    h2 {
      writing-mode: vertical-lr;
    }
  }
}
</style>
