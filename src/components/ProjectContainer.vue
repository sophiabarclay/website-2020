<template>
  <div>
    <div class="project-main">
      <div class="side title">
        <h2 class="title" v-html="project.title" />
      </div>
      <div class="body main">
        <div class="mobile-header">
          <h1 class="mobile-header title" v-html="project.title" />
          <h1 class="separator">|</h1>
          <h1 class="mobile-header date" v-html="project.year" />
        </div>
        <project-ga v-if="project.company === 'GA'" :main="project.main" />
        <project-dst
          v-if="project.company === 'Project Dastaan'"
          :main="project.main"
        />
        <project-bp v-if="project.client === 'BP'" :main="project.main" />
        <project-trp
          v-if="project.client === 'TRP Research'"
          :main="project.main"
        />
      </div>
      <div class="side date">
        <h2 class="">{{ project.year }}</h2>
      </div>
    </div>
    <router-link to="/work" class="bottom">
      <img src="@/assets/images/arrow-left.jpg" width="50" height="15" />
      <h3 class="link back">Back to all work</h3>
    </router-link>
  </div>
</template>

<script>
import ProjectDst from "@/components/ProjectDst.vue";
import ProjectGa from "@/components/ProjectGa.vue";
import ProjectBp from "@/components/ProjectBp.vue";
import ProjectTrp from "@/components/ProjectTrp.vue";

export default {
  name: "ProjectContainer",
  components: {
    ProjectGa,
    ProjectDst,
    ProjectBp,
    ProjectTrp
  },
  props: {
    project: {
      type: Object,
      required: true
    },
    type: {
      type: String,
      required: false,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/styles/main.scss";
@import "~@/styles/fonts.scss";

.bottom {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin-bottom: 20px;
  img {
    margin-right: 12px;
  }
  .back {
    font-family: "FuturaItalic";
    color: #000;
  }
  &:hover {
    h3 {
      color: #999999;
    }
  }
}

.mobile-header {
  display: none;
  font-family: "FuturaItalic";
  justify-content: left;
  .title,
  .date {
    margin: 0;
  }
  .separator {
    padding: 0 6px;
    margin: 0;
    line-height: 1.6em;
    font-size: 1.5em;
  }
  @media only screen and (max-width: 750px) {
    display: flex;
  }
}

.project-main {
  display: flex;
  justify-content: space-between;
  margin-bottom: 80px;
  h2 {
    margin: 0;
  }
  .body {
    max-width: 1500px;
    font-family: "FuturaItalicLight";
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
  .date {
    align-items: center;
    white-space: nowrap;
    justify-content: flex-end;
    h2 {
      writing-mode: vertical-lr;
    }
  }
}
</style>
