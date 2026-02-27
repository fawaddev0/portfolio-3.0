import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiGit,
  SiFigma,
  SiBootstrap,
  SiMui,
  SiCanva,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiFreelancer,
} from "react-icons/si";
import { IconType } from "react-icons";

export const getSkillIcon = (skill: string): IconType => {
  const skillLower = skill.toLowerCase();

  switch (skillLower) {
    case "html":
      return SiHtml5;
    case "css":
      return SiCss3;
    case "javascript":
      return SiJavascript;
    case "js":
      return SiJavascript;
    case "typescript":
      return SiTypescript;
    case "ts":
      return SiTypescript;
    case "react":
      return SiReact;
    case "next js":
    case "nextjs":
    case "next.js":
      return SiNextdotjs;
    case "tailwind":
    case "tailwindcss":
      return SiTailwindcss;
    case "node js":
    case "nodejs":
    case "node.js":
      return SiNodedotjs;
    case "mongodb":
      return SiMongodb;
    case "mysql":
      return SiMysql;
    case "firebase":
      return SiFirebase;
    case "git":
      return SiGit;
    case "figma":
      return SiFigma;
    case "bootstrap":
      return SiBootstrap;
    case "materialui":
    case "mui":
      return SiMui;
    case "canva":
      return SiCanva;
    case "illustrator":
      return SiAdobeillustrator;
    case "photoshop":
      return SiAdobephotoshop;
    default:
      return SiFreelancer; // Fallback icon
  }
};

export const getSkillColor = (skill: string): string => {
  const skillLower = skill.toLowerCase();
  switch (skillLower) {
    case "html":
      return "#a855f7"; // Purple-500
    case "css":
      return "#9333ea"; // Purple-600
    case "javascript":
      return "#7e22ce"; // Purple-700
    case "typescript":
      return "#a855f7"; // Purple-500
    case "react":
      return "#9333ea"; // Purple-600
    case "next js":
    case "nextjs":
    case "next.js":
      return "#ffffff"; // Keep white for contrast
    case "tailwind":
      return "#6b21a8"; // Purple-800
    case "node js":
    case "nodejs":
      return "#7e22ce"; // Purple-700
    case "mongodb":
      return "#581c87"; // Purple-900
    case "mysql":
      return "#6b21a8"; // Purple-800
    case "firebase":
      return "#a855f7"; // Purple-500
    case "git":
      return "#9333ea"; // Purple-600
    case "figma":
      return "#7e22ce"; // Purple-700
    case "bootstrap":
      return "#6b21a8"; // Purple-800
    case "materialui":
    case "mui":
      return "#a855f7"; // Purple-500
    default:
      return "#a855f7"; // Default Purple
  }
};
