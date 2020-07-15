const work = {
  methods: {
    getProject(title) {
      if (this.projects) {
        const project = this.projects.filter(
          project => project.title === title
        );
        return project;
      }
    }
  },
  computed: {
    projects() {
      const projects = [
        {
          title: "Discover BP",
          client: "BP",
          color: "pink",
          overviewImage: "dbp-main.png",
          company: "Tui",
          year: "2019-2020",
          path: "discover-bp",
          main: {}
        },
        {
          title: "TRP Metrics",
          client: "TRP Research",
          color: "green",
          overviewImage: "trp-main.png",
          company: "Tui",
          year: "2019",
          path: "trp-metrics",
          main: {
            logo: "tui-logo.svg",
            intro:
              "This project was undertaken for Tui's client TRP Research, a media research and analysis company that derives insight and meaning from media data.",
            overview: [
              "Using the package Vue.D3.Sunburst, a reusable vue sunburst charts component relying on D3.js, we created a customised chart to represent a channel's total viewing, broken down by genre, brand (TV channel) and series.",
              "The default styling that comes with Vue.D3.Sunburst is fairly limited. We worked with the package restrictions by manipulating the DOM to match the provided designs."
            ],
            build: "Vue.js, D3.js, Chart.js",
            images: [
              {
                title: "Vue.D3.Sunburst in action",
                image: "trp-d3.gif"
              },
              {
                title: "Vue.D3.Sunburst default styling",
                image: "trp-d3-original.png"
              }
            ]
          }
        },
        {
          title: "Project Dastaan",
          client: "Project Dastaan",
          color: "blue",
          overviewImage: "project-dastaan.png",
          company: "Project Dastaan",
          year: "2019",
          path: "project-dastaan",
          main: {
            logo: "pd-logo.png",
            subtitle: "Project Dastaan Website mobile responsivness",
            overview: [
              '<a class="wavy-link" href="https://projectdastaan.org/" target="_blank">Project Dastaan</a> recreates the lived history of the 1947 Partition of the Indian subcontinent using Virtual Reality, reconnecting partition witnesses to their childhood homes.',
              "In the run up to the release of their latest feature film, Project Dastaan tasked me with improving their website's mobile display using Wordpress. The website, which was not previoulsly mobile responsive, is now fully accessible and navigable across all mobile devices, with standardised margins and font-sizes."
            ],
            build: "Wordpress, CSS",
            footnote:
              "* Please note: the website has since been updated and therefore the changes I made are no longer all in place.",
            images: [
              {
                title: "Project Dastaan mobile",
                image: "dastaan-mobile.png"
              }
            ]
          }
        },
        {
          title: "Placeholder",
          overviewImage: "placeholder-wireframes.png",
          company: "GA",
          color: "green",
          year: "2018",
          path: "placeholder",
          main: {
            logo: "ga-logo.png",
            subtitle: "General Assembly Project 4",
            timeframe: "1 week",
            build:
              "React, Bulma, Insomnia, bcrypt, Mongoose, Chai, Mocha, MapBox API, Heroku",
            overview: [
              "This was my fourth and final project during the WDI course at General Assembly (full time 12-week immersive). For this project, I paired up with one of my classmates to create Placeholder, an architecture mapping app, where users can pin their favourite buildings to a map, follow like-minded users and discover other architectural gems by location on a map of the world. Users can also create 'tours' by grouping buildings into curated collections, with the ability to add a description and receive comments.",
              "The idea for this project came to me originally during a trip to Tel Aviv, earlier in 2018. As someone interested in architecture, particularly buildings from the Bauhaus movement, visiting the iconic Bauhaus examples was central to my trip. Before setting off, I had researched the city's most significant buildings on various platforms including Instagram, architecture websites and travel forums, collecting the sites I wanted to visit before saving them in Google Maps. It occured to me that this was a rather lengthy process, and could be improved by a one-stop-shop app where fellow architecture nerds could share their favourite buildings all on the same map.",
              "This project was completed in week 12 of the 12-week WDI course at General Assembly. As we started learning React in Week 11, the key learning points from this project centred on consolidating my knowledge of React."
            ],
            images: [
              {
                title: "Placeholder gif",
                image: "placeholder.gif",
                width: "320"
              }
            ],
            liveSite: "https://sophiabarclay.com/#",
            github: "https://github.com/sophiabarclay/wdi-project-four"
          }
        },
        {
          title: "GigHub",
          overviewImage: "gighub-main.png",
          company: "GA",
          color: "pink",
          year: "2018",
          path: "gighub",
          main: {
            logo: "ga-logo.png",
            subtitle: "General Assembly Project 3",
            timeframe: "1 week",
            build:
              "AngularJS, Bulma, Insomnia, bcrypt, JWT, Mongoose, Leaflet.js map, OpenStreetMap API, Heroku",
            overview: [
              "My third project at General Assembly was a collaborative three-person effort to build a fully RESTful gig listing app, allowing venues to upload upcoming events to an open platform which users can then search for and click to attend. We used MongoDB, Node.js & Express to build the server-side API, and AngularJS to build the front-end that consumes our API."
            ],
            images: [
              {
                title: "GigHub gif",
                image: "gighub.gif"
              }
            ],
            liveSite: "https://gighub-projectthree.herokuapp.com/",
            github: "https://github.com/sophiabarclay/wdi-project-three"
          }
        },
        {
          title: "Photography LDN",
          overviewImage: "photography-ldn-main.png",
          company: "GA",
          color: "blue",
          year: "2018",
          path: "photography-ldn",
          main: {
            logo: "ga-logo.png",
            subtitle: "General Assembly Project 2",
            timeframe: "1 week",
            build:
              "Node.js, Express, EJS, MongoDB, NodeJS, JavaScript ES6, Heroku",
            overview: [
              "A fully RESTful Express app showcasing upcoming photography exhibitions in London. The app allows users to register, login and logout, add, edit and delete exhibitions, and add and delete comments on exhibitions."
            ],
            images: [
              {
                title: "PhotographyLDN gif",
                image: "photography-ldn.gif"
              }
            ],
            liveSite: "https://fierce-earth-26546.herokuapp.com/",
            github: "https://github.com/sophiabarclay/wdi-project-two"
          }
        },
        {
          title: "SQUARES",
          overviewImage: "squares-levels.png",
          company: "GA",
          color: "green",
          year: "2018",
          path: "squares",
          main: {
            logo: "ga-logo.png",
            subtitle: "General Assembly Project 1",
            timeframe: "1 week",
            build: "HTML5, CSS, JavaScript ES6",
            overview: [
              "SQUARES was designed for my first project at General Assembly, and was my first solo attempt at using JavaScript.",
              "The game is loosely based on the same concept as Pac-Man, whereby the player (white) must cover all of the red squares while avoiding the randomly moving grey squares, or 'ghosts'. If the player collides with a ghost they are given the option to start again, and if they succeed in covering all of the red squares, they are given the option to play the second level.",
              "Before deciding on which grid-based game I wanted to create for this project, I researched a number of different options and discovered that the majority of games in this area follow similar design principles: what I refer to as the early-80s arcade aesthetic. In response to the overload of pixellated, neon-on-black observed during this research stage, I opted for the complete opposite, keeping the design stripped-down and minimal, a refreshing change in my opinion."
            ],
            images: [
              {
                title: "Squares gif",
                image: "squares.gif",
                width: "580px"
              }
            ],
            liveSite: "https://sophiabarclay.github.io/wdi-project-one/",
            github: "https://github.com/sophiabarclay/wdi-project-one"
          }
        }
      ];
      return projects;
    }
  }
};

export default work;
