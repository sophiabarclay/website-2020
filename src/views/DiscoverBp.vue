<template>
  <div>
    <project-container :project="project" :type="project.company" />
  </div>
</template>

<script>
import Work from "@/mixins/Work";
import ProjectContainer from "@/components/ProjectContainer.vue";

export default {
  name: "DiscoverBp",
  components: {
    ProjectContainer
  },
  mixins: [Work],
  data() {
    return {
      project: {}
    };
  },
  mounted() {
    this.project = this.getProject("Discover BP")[0];
  }
};
</script>
