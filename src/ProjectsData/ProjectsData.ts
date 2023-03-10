import ujccap from "../images/ujccap.JPG";
import brainQuest from "../images/brainQuest.JPG";
import gameFinder from "../images/gameFinder.JPG";
import {FaReact, FaNodeJs, FaSass} from "react-icons/fa"
import {SiTypescript} from "react-icons/si"
import {TbBrandRedux} from "react-icons/tb"
import {DiMongodb} from "react-icons/di"

const Projects = [
    {
      name: "Ujccap",
      path: "/ujccap",
      backgroundImg: ujccap,
      liveView: "https://ujccap-client.vercel.app/",
      technologiesIcons: [FaReact, SiTypescript, FaNodeJs, FaSass, DiMongodb],
      description:"Full stack application created with: React, Typescript, NodeJS (express), Sass, MongoDB. This is simple advertising portal, with user authorization. To create account, user has to provid email and password, and optionally choose avatar or use google account. After creating profile user will be able to login to the account, but won't be able to put up auctions. User is obligated to verify email, and create Seller Profile to start selling. Application allows for adding offers to favourites, in a profile page user can see Recently Watched Offers, any user can review other profiles, is possible to change email, password (only for users not registered via google).",
      githubLink:'https://github.com/Pamade/Ujccap-client'
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
    {      
      name:"Game Finder",
      path:"/game-finder",
      backgroundImg:gameFinder,
      liveView:"https://brilliant-pika-2eebed.netlify.app/",
      technologiesIcons:[FaReact, FaSass, TbBrandRedux],
      description:'Application created with: React, Sass, Redux. On the first page, the most popular games from the last 30 days are displayed. Users can select different categories such as publishers, games, developers, and genres using the menu on the left side. The user can also use a filter to refine their search. Additionally, there is a single page dedicated to each game. Users can access this page to view specific information about a game, such as its description, user release date, and ratings.',
      githubLink:"https://github.com/Pamade/game-finder-v2"
  }

  ] ;
  export default Projects