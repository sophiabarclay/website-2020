<template>
  <div class="about main">
    <div class="right">
      <h4>Hi!</h4>
      <h4>I'm a front-end developer looking for work.</h4>
      <h4>
        Until very recently, I've had the privilege of working at
        <a class="wavy-link" href="https://generalassemb.ly/" target="_blank"
          >Tui Media</a
        >, a small but awesome agency in Soho, London. Here, I had the
        opportunity to work on a number of websites for clients including EY and
        BP. I progressed quickly from working under another developer, to taking
        the lead on projects myself.
      </h4>
      <h4>
        I studied web development at
        <a class="wavy-link" href="https://generalassemb.ly/" target="_blank"
          >General Assembly</a
        >
        on their WDI (now SEI) bootcamp.
      </h4>
      <h4>
        Before turning to the dark side, I worked in communications in the
        Chinese consumer market as well as the international hospitality sector.
        I hope to bring the knowledge acquired in my previous jobs to a role in
        a collaborative team of developers, in an environment where I can
        continue to grow and broaden my skills.
      </h4>
      <h4>
        If you'd like to hear more about my work or just want to say hello,
        please feel free to reach out
        <a class="wavy-link" href="mailto:barclay.sophia@gmail.com">here</a>.
      </h4>
      <h4>Thanks for stopping by :)</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<style lang="scss" scoped>
@import "~@/styles/main.scss";

.about {
  display: flex;
  justify-content: flex-end;
  .right {
    width: 50%;
    @media only screen and (max-width: 900px) {
      width: 100%;
    }
  }
}
</style>
