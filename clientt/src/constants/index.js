import { people01, people02, people03 } from "../assets";
import { SiStarship } from "react-icons/si";
import { GoShield } from "react-icons/go";
import { AiOutlineSend } from "react-icons/ai";
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";

export const features = [
  {
    id: "feature-1",
    icon: (
      <SiStarship className="w-[64px] h-[64px] rounded-full text-dimWhite bg-purple-800" />
    ),
    title: "Rewards",
    content:
      "The best online trading that offer some tantalizing combinations of promotions and prizes",
  },
  {
    id: "feature-2",
    icon: (
      <GoShield className="w-[60px] h-[60px] text-dimWhite rounded-full bg-purple-800" />
    ),
    title: "100% Secured",
    content:
      "We take proactive steps make sure your information and transactions are secure.",
  },
  {
    id: "feature-3",
    icon: (
      <AiOutlineSend className="w-[64px] h-[64px] text-dimWhite rounded-full bg-purple-800" />
    ),
    title: "Balance Transfer",
    content:
      "A transfer money in and out of your wallet with no interest charges.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Digital currencies Exchanged",
    value: "$30B+",
  },
  {
    id: "stats-2",
    title: "Trusted wallet Investors",
    value: "1M+",
  },
  {
    id: "stats-3",
    title: "Countries Supported",
    value: "95+",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: (
      <FiInstagram className={`w-[21px] h-[21px]  cursor-pointer text-white`} />
    ),
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: (
      <FiFacebook className={`w-[21px] h-[21px]  cursor-pointer text-white`} />
    ),
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: (
      <FiTwitter className={`w-[21px] h-[21px]  cursor-pointer text-white`} />
    ),
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: (
      <FiLinkedin className={`w-[21px] h-[21px]  cursor-pointer text-white`} />
    ),
    link: "https://www.linkedin.com/",
  },
];
