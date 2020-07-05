const work = {
  computed: {
    projects() {
      const projects = [
        {
          title: "Discover BP",
          client: "BP",
          image: "DBP.jpg",
          company: "Tui",
          year: "2019-2020",
          path: "discover-bp"
        },
        {
          title: "TRP Metrics",
          client: "TRP Research",
          image: "DBP.jpg",
          company: "Tui",
          year: "2019",
          path: "trp-metrics"
        },
        {
          title: "EY",
          client: "EY",
          image: "DBP.jpg",
          company: "Tui",
          year: "2019",
          path: "ey"
        },
        {
          title: "Placeholder",
          image: "DBP.jpg",
          company: "GA",
          year: "2018",
          path: "placeholder"
        },
        {
          title: "GigHub",
          image: "DBP.jpg",
          company: "GA",
          year: "2018",
          path: "gighub"
        },
        {
          title: "Photography LDN",
          image: "DBP.jpg",
          company: "GA",
          year: "2018",
          path: "photography-ldn"
        },
        {
          title: "Squares",
          image: "squares.gif",
          company: "GA",
          year: "2018",
          path: "squares"
        }
      ];
      return projects;
    }
  }
};

export default work;
