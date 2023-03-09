import ujccap from "../images/ujccap.JPG";
import brainQuest from "./images/brainQuest.JPG";
import gameFinder from "./images/gameFinder.JPG";
import {FaReact, FaNodeJs, FaSass} from "react-icons/fa"
import {SiTypescript} from "react-icons/si"
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
  ] ;
  export default Projects