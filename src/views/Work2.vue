<template>
  <div class="main">
    <div class="filters">
      <li class="stagger-in slow">
        <h3
          class="link"
          :class="{ unselected: selected !== 'all' }"
          @click="setSelected('all')"
        >
          ALL
        </h3>
      </li>
      <li class="stagger-in slow"><h3>/</h3></li>
      <li class="stagger-in slow">
        <h3
          class="link"
          :class="{ unselected: selected === '2019' || selected === '2018' }"
          @click="setSelected('2020')"
        >
          2020
        </h3>
      </li>
      <li class="stagger-in slow"><h3>/</h3></li>
      <li class="stagger-in slow">
        <h3
          class="link"
          :class="{ unselected: selected === '2020' || selected === '2018' }"
          @click="setSelected('2019')"
        >
          2019
        </h3>
      </li>
      <li class="stagger-in slow"><h3>/</h3></li>
      <li class="stagger-in slow">
        <h3
          class="link"
          :class="{ unselected: selected === '2019' || selected === '2020' }"
          @click="setSelected('2018')"
        >
          2018
        </h3>
      </li>
    </div>
    <div
      class="projects"
      :class="{ 'projects-odd': selectedProjects.length % 2 }"
    >
      <router-link
        v-for="(project, idx) in selectedProjects"
        :key="idx"
        :to="`/work/${project.path}`"
        class="project"
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
import Work from "@/mixins/Work";

export default {
  name: "Work",
  mixins: [Work],
  data() {
    return {
      selected: "all"
    };
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
      return project.year.replace("-", " ");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/styles/fonts.scss";
@import "~@/styles/main.scss";

.projects {
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

.filters {
  margin-bottom: 24px;
  display: flex;
  justify-content: center;

  h3 {
    padding: 0 4px;
  }

  .unselected {
    opacity: 0.5;
  }
}
</style>
