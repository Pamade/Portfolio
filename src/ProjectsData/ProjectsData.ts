import ujccap from "../images/ujccap.JPG";
import brainQuest from "../images/brainQuest.JPG";
import gameFinder from "../images/gameFinder.JPG";
import aksim from "../images/test.PNG";
import mogo from "../images/mogo.PNG";
import digitalAgency from "../images/digitalAgency.JPG"
import {FaReact, FaNodeJs, FaSass} from "react-icons/fa"
import {SiTypescript, SiTailwindcss} from "react-icons/si"
import {TbBrandRedux} from "react-icons/tb"
import { FaJava } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";


const Projects = [
    {
      name: "Aksim",
      path: "/aksim",
      backgroundImg: aksim,
      liveView: "https://aksimf.netlify.app/",
      technologiesIcons: [FaReact, SiTypescript, FaNodeJs, FaSass, FaJava, SiMysql],
      description:"Full stack application created with: React, Typescript, Java (Spring boot), Sass, MySql. This is a full-stack web application that allows users to create, edit, publish, and manage articles",
      githubLink:'https://github.com/Pamade/AKSIM-CLIENT'
    },
    {
      name: "Digital Agency",
      path: "/digital-agency",
      backgroundImg: digitalAgency,
      liveView: "https://digitalagencypm.netlify.app/",
      technologiesIcons: [FaReact, SiTypescript, SiTailwindcss],
      description:"Single Page application created with: React, Typescript, Tailwind.",
      githubLink:'https://github.com/Pamade/Digital-Agency'
    },
    {
      name:"Brain Quest",
      path:"/brain-quest",
      backgroundImg:brainQuest,
      liveView:"https://loquacious-pika-234024.netlify.app/",
      technologiesIcons:[FaReact, FaSass, TbBrandRedux],
      description:'Application created with: React, Sass, Redux. In the first mini-game, the user must remember a sequence of numbers. They are given a short amount of time to guess the number. If they guess correctly, the game presents a new number with an additional digitIn the second mini-game, the user must remember the location of a number within a group of boxes. The game displays multiple boxes with numbers, which then disappear. The user must recall which box the number was in.The third mini-game requires the user to remember words. The game asks the user if they have seen the word before or not. The user has three lives, and they lose a life if they choose incorrectly.In the fourth mini-game, the user must click on falling circles. If the user misses a circle or clicks on the wrong one, they lose a life.',
      githubLink:"https://github.com/Pamade/brain-quest"
    },
  //   {      
  //     name:"Game Finder",
  //     path:"/game-finder",
  //     backgroundImg:gameFinder,
  //     liveView:"https://brilliant-pika-2eebed.netlify.app/",
  //     technologiesIcons:[FaReact, FaSass, TbBrandRedux],
  //     description:'Application created with: React, Sass, Redux. On the first page, the most popular games from the last 30 days are displayed. Users can select different categories such as publishers, games, developers, and genres using the menu on the left side. The user can also use a filter to refine their search. Additionally, there is a single page dedicated to each game. Users can access this page to view specific information about a game, such as its description, user release date, and ratings.',
  //     githubLink:"https://github.com/Pamade/game-finder-v2"
  // },
  {
    name:"MoGo",
    path:"/mogo",
    backgroundImg:mogo,
    liveView:"https://pamade.github.io/MoGo/",
    technologiesIcons:[FaHtml5, FaCss3Alt],
    description:"Simple static website",
    githubLink:"https://github.com/Pamade/MoGo"

  }

  ] ;
  export default Projects