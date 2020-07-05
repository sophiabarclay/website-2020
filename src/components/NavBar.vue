<template>
  <nav class="nav">
    <div class="burger">
      <div @click="toggleburger">
        <p v-if="!burgerOpen">Menu</p>
        <p v-else>x close</p>
      </div>
      <ul v-if="burgerOpen" class="burger-list">
        <li
          v-for="(link, idx) in navLinks"
          :key="idx"
          class="active"
          @click="toggleburger"
        >
          <router-link
            class="link"
            v-if="link.type === 'route'"
            :to="link.to"
            >{{ link.name }}</router-link
          >
          <a
            class="link"
            v-if="link.type === 'download'"
            :href="link.to"
            download
            >{{ link.name }}</a
          >
        </li>
        <li class="burger-social">
          <a
            href="https://github.com/sophiabarclay"
            target="_blank"
            class="social"
          >
            <app-icon name="github" :size="25" />
          </a>
          <a
            href="https://www.linkedin.com/in/sophiabarclay"
            target="_blank"
            class="social"
          >
            <app-icon name="linkedin" />
          </a>
        </li>
      </ul>
    </div>
    <div class="nav-side">
      <div @click="toggleMenu">
        <p class="link" v-if="!menuOpen">Menu</p>
        <p class="link" v-else>x close</p>
      </div>
      <ul v-if="menuOpen">
        <li
          v-for="(link, idx) in navLinks"
          :key="idx"
          class="active"
          @click="toggleMenu"
        >
          <router-link
            class="link"
            v-if="link.type === 'route'"
            :to="link.to"
            >{{ link.name }}</router-link
          >
          <a
            class="link"
            v-if="link.type === 'download'"
            :href="link.to"
            download
            >{{ link.name }}</a
          >
        </li>
      </ul>
    </div>
    <div
      class="nav-title ease"
      :class="[isScrolled ? 'title-small' : 'title-large']"
      @click="closeMenu"
    >
      <router-link class="link" to="/">SOPHIA BARCLAY</router-link>
    </div>
    <div class="nav-side">
      <!-- <a href="mailto:barclay.sophia@gmail.com" class="social">
        <img width="20px" src="@/assets/images/email.png" />
      </a> -->
      <div class="social">
        <a
          href="https://github.com/sophiabarclay"
          target="_blank"
          class="social-icon"
        >
          <app-icon name="github" class="github" />
        </a>
        <a
          href="https://www.linkedin.com/in/sophiabarclay"
          target="_blank"
          class="social-icon"
        >
          <app-icon name="linkedin" />
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
import AppIcon from "@/components/AppIcon.vue";

export default {
  name: "NavBar",
  components: {
    AppIcon
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  data() {
    return {
      burgerOpen: false,
      menuOpen: false,
      isScrolled: false,
      navLinks: [
        { type: "route", name: "About", to: "/about" },
        { type: "route", name: "Work", to: "/work" }
        // { type: "download", name: "CV", to: "@/assets/pdfs/SophiaBarclayCV.jpg" }
      ]
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu() {
      this.menuOpen = false;
    },
    toggleburger() {
      this.burgerOpen = !this.burgerOpen;
    },
    handleScroll() {
      if (window.scrollY > 138) {
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/styles/fonts.scss";
@import "~@/styles/main.scss";

.nav {
  z-index: 5;
  padding: 24px 0 20px;
  background: #fff;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  font-family: "BebasNeue";
  font-size: 28px;
  @media only screen and (max-width: 900px) {
    justify-content: center;
    padding: 12px 0;
  }
  a {
    text-decoration: none;
    color: #000;
    // &.router-link-exact-active {
    //   color: #42b983;
    // }
  }
  p {
    margin: 0;
  }
  ul {
    margin: 0;
    padding-left: 0;
    position: absolute;

    li {
      list-style: none;
      animation-name: animateIn;
      animation-duration: 350ms;
      animation-delay: calc(var(--animation-order) * 100ms);
      animation-fill-mode: both;
      animation-timing-function: ease-in-out;
    }
    @keyframes animateIn {
      0% {
        opacity: 0;
        transform: scale(0.6) translateY(-8px);
      }

      100% {
        opacity: 1;
      }
    }
  }
  .title-large {
    font-size: 72px;
    transition: font-size ease-in-out 0.1s;
  }

  .title-small {
    font-size: 32px;
    transition: font-size ease-in-out 0.1s;
  }

  &-side {
    width: 200px;

    &:last-of-type {
      display: flex;
      justify-content: flex-end;
      @media only screen and (max-width: 900px) {
        display: none;
      }

      .social {
        display: flex;
        align-items: flex-start;
        .social-icon {
          padding-left: 8px;
        }
        .github {
          padding-top: 2px;
        }
      }
    }
    @media only screen and (max-width: 900px) {
      display: none;
    }
  }
  .burger {
    display: none;
    position: absolute;
    right: 0;
    z-index: 10;
    &-list {
      text-align: right;
      right: 0;
    }
    &-social {
      display: flex;
      .social {
        padding-left: 3px;
      }
    }

    @media only screen and (max-width: 900px) {
      display: inline;
    }
  }
}
</style>
