import Image1 from "../../assets/img/portfolio/project-1.jpg";
import Image2 from "../../assets/img/portfolio/project-2.jpg";
import Image3 from "../../assets/img/portfolio/project-3.jpg";
import Image4 from "../../assets/img/portfolio/project-4.jpg";
import Image5 from "../../assets/img/portfolio/project-5.jpg";

const PortfolioData = [
  {
    id: 1,
    type: "WordPress",
    image: Image1,
    tag: ["Wordpress"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Website",
        client: "Maqana",
        language: "WordPress, Sailent Theme",
        preview: "Maqana",
        link: "http://www.maqana.com/",
      },
    ],
  },

  {
    id: 2,
    type: "Core php Website",
    image: Image2,
    tag: ["Core PHP"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Employment Tank",
        client: "Freelance",
        language: "PHP (8.1.18) , Bootstrap 5 , jQuery (3.4.1) , Google Font API, JavaScript libraries",
        preview: "Employment Tank",
        link: "https://www.employmenttank.com/",
      },
    ],
  },
  {
    id: 3,
    type: "WordPress Plugin",
    image: Image3,
    tag: ["WP Plugins"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "WordPress address plugin",
        client: "Freelancing",
        language: " PHP, HTML, CSS, Javascript, WP hooks, WP Funcation",
        preview: "View Plugin",
        link: "https://github.com/ahmedalimughal/WordPress-Address-Plugin",
      },
    ],
  },
  {
    id: 4,
    type: "Wix eCommerce",
    image: Image4,
    tag: ["CMS Development"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Wix eCommerce",
        client: "IAMEVE",
        language: "React (16.14.0), core-js (2.6.12), GSAP, Polyfill 3, Lodash (4.17.21)",
        preview: "iameveami",
        link: "https://www.iameveami.com/",
      },
    ],
  },
  {
    id: 5,
    type: "WordPress eCommerce",
    image: Image5,
    tag: ["Wordpress"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Phoenix Boost",
        client: "Phoenix Boost",
        language: "WordPress, Sailent Theme, jQuery Slider, Custom CSS ",
        preview: "Phoenix Boost",
        link: "https://devu12.onlinetestingserver.com/batesok/",
      },
    ],
  },
];

export default PortfolioData;
