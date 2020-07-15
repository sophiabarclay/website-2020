<template>
  <div class="main">
    <div class="controls">
      <div
        class="control stagger-in slow"
        :class="{ unselected: selected !== 'all' }"
        data-filter="all"
        @click="setSelected('all')"
      >
        <h3>All</h3>
      </div>
      <div class="stagger-in slow"><h3>/</h3></div>
      <div
        class="control stagger-in slow"
        :class="{
          unselected: selected === 'nineteen' || selected === 'eighteen'
        }"
        data-filter=".twenty"
        @click="setSelected('twenty')"
      >
        <h3>2020</h3>
      </div>
      <div class="stagger-in slow"><h3>/</h3></div>
      <div
        class="control stagger-in slow"
        :class="{
          unselected: selected === 'twenty' || selected === 'eighteen'
        }"
        data-filter=".nineteen"
        @click="setSelected('nineteen')"
      >
        <h3>2019</h3>
      </div>
      <div class="stagger-in slow"><h3>/</h3></div>
      <div
        class="control stagger-in slow"
        :class="{
          unselected: selected === 'nineteen' || selected === 'twenty'
        }"
        data-filter=".eighteen"
        @click="setSelected('eighteen')"
      >
        <h3>2018</h3>
      </div>
    </div>
    <div
      class="container"
      :class="{ 'projects-odd': selectedProjects.length % 2 }"
    >
      <router-link
        v-for="(project, idx) in projects"
        :key="idx"
        :to="`/work/${project.path}`"
        class="project mix"
        :class="getFilterClass(project)"
      >
        <div>
          <img
            :src="require(`@/assets/images/work/${project.overviewImage}`)"
            :alt="project.title"
            width="600px"
          />
          <div class="project-overlay">
            <h1>{{ project.title }}</h1>
            <h2>{{ project.year }}</h2>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import mixitup from "mixitup";
import Work from "@/mixins/Work";

export default {
  name: "app",
  mixins: [Work],
  data() {
    return {
      containerEl: "",
      mixer: "",
      selected: "all"
    };
  },
  mounted() {
    this.containerEl = document.querySelector(".container");
    this.mixer = mixitup(this.containerEl);
  },
  computed: {
    selectedProjects() {
      if (this.selected === "all") return this.projects;
      let projects = [...this.projects];
      return projects.filter(project => project.year.includes(this.selected));
    }
  },
  methods: {
    setSelected(filter) {
      this.selected = filter;
    },
    getFilterClass(project) {
      if (project.year === "2020") return "twenty";
      if (project.year === "2019-2020") return "nineteen twenty";
      else if (project.year === "2019") return "nineteen";
      else if (project.year === "2018") return "eighteen";
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/styles/fonts.scss";
@import "~@/styles/main.scss";

/* Controls
---------------------------------------------------------------------- */
.controls {
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
  h3 {
    padding: 0 4px;
  }

  .unselected {
    h3 {
      color: #999999;
    }
  }
}
.control {
  h3 {
    padding: 0 4px;
  }
}

.container {
  padding: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-between;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .project {
    position: relative;
    margin-bottom: 32px;
    text-decoration: none;

    &:hover {
      img {
        opacity: 0.3;
      }
      .project-overlay {
        display: flex;
      }
    }

    img {
      @media only screen and (max-width: 1390px) {
        width: 580px;
      }
      @media only screen and (max-width: 1350px) {
        width: 560px;
      }
      @media only screen and (max-width: 1310px) {
        width: 540px;
      }
      @media only screen and (max-width: 1280px) {
        width: 500px;
      }
      @media only screen and (max-width: 1200px) {
        width: 450px;
      }
      @media only screen and (max-width: 1090px) {
        width: 420px;
      }
      @media only screen and (max-width: 1040px) {
        width: 400px;
      }
      @media only screen and (max-width: 990px) {
        width: 380px;
      }
      @media only screen and (max-width: 950px) {
        width: 360px;
      }
      @media only screen and (max-width: 910px) {
        width: 340px;
      }
      @media only screen and (max-width: 900px) {
        width: 600px;
      }
      @media only screen and (max-width: 700px) {
        width: 100%;
      }
    }

    &-overlay {
      display: none;
      width: 100%;
      text-align: center;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: absolute;
      padding: 0 12px;
      top: 42%;

      h1,
      h2 {
        color: #000;
      }

      @media only screen and (max-width: 900px) {
        position: relative;
        display: flex;

        h1 {
          line-height: 1;
          margin-bottom: 0;
          margin-top: 12px;
          font-size: 18px !important;
          color: #000;
        }
        h2 {
          margin-top: 12px;
          margin-bottom: 0;
          font-size: 16px !important;
          color: #000;
        }
      }
    }
  }
  &-odd {
    .project {
      &:last-of-type {
        margin-right: auto;
      }
    }
  }

  h1 {
    margin-top: 0;
    line-height: 0;
  }

  @media only screen and (max-width: 900px) {
    justify-content: center;
    .project {
      margin-left: auto;
      margin-right: auto;
    }
  }
}

// .filters {
// }
</style>
