import { ReactComponent as DiscordIcon } from "@/public/svg/DiscordIcon";
import { ReactComponent as Twitter } from "@/public/svg/TwitterIcon";
import { ReactComponent as MediumIcon } from "@/public/svg/MediumIcon";
import DixtoolIcon from "../public/svg/DixtoolIcon";
import Pinkbox from "@/public/svg/Pinkbox";
import Greenbox from "@/public/svg/Greenbox";
import Bluebox from "@/public/svg/Bluebox";
export const CircleImage = "../public/Circleone.svg";

export const HeroSectionCircle = "/public/HeroSectionCircle.svg";

//

export const NAV_BAR_CONTENT = [
  { id: 1, content: "Home", pathName: "/" },
  { id: 3, content: "Feature", pathName: "#feature" },
  { id: 4, content: "Tokenomics", pathName: "#tokenomics" },
  { id: 5, content: "Roadmap", pathName: "#roadmap" },
  { id: 2, content: "Dashboard", pathName: "/" },
];

export const SOCIAL_MEDIA_ICON = [
  {
    id: 1,
    Icon: Twitter,
  },
  {
    id: 2,
    Icon: DiscordIcon,
  },
  {
    id: 3,
    Icon: MediumIcon,
  },
  {
    id: 4,
    Icon: DixtoolIcon,
  },
];

export const PRODUCTS = [
  {
    id: 1,
    name: "Windows",
    link: "hello",
  },
  {
    id: 2,
    name: "MacOS",
    link: "hello",
  },
  {
    id: 3,
    name: "Linux",
    link: "",
  },
];

export const BUSINESSES = [
  {
    id: 1,
    name: "FEATURES",
    link: "#feature",
    content: "navBar.feature",
  },
  {
    id: 2,
    name: "SERVICES",
    link: "#tokenomics",
    content: "navBar.tokenomics",
  },
  {
    id: 3,
    name: "PRICES",
    link: "#roadmap",
    content: "navBar.roadmap",
  },
  {
    id: 4,
    name: "HOW TO USE",
    link: "#platform",
  },
];

export const TOKENOMICS_CARD = [
  { id: 1, Icon: Pinkbox, label: "Section 1" },
  { id: 2, Icon: Greenbox, label: "Section 2" },
  { id: 3, Icon: Bluebox, label: "Section 3" },
  { id: 4, Icon: Pinkbox, label: "Section 4" },
];
