<template>
  <div>
    <project-container :project="project" :type="project.company" />
  </div>
</template>

<script>
import Work from "@/mixins/Work";
import ProjectContainer from "@/components/ProjectContainer.vue";

export default {
  name: "TrpMetrics",
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
    this.project = this.getProject("TRP Metrics")[0];
  }
};
</script>
