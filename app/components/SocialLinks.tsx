// Define a type for social link
type SocialLink = {
  icon: JSX.Element;
  url: string;
  label: string;
};

import { Link } from "@remix-run/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { PiReadCvLogo } from "react-icons/pi";
import { SiBuymeacoffee } from "react-icons/si";

// Social links array
const socialLinks: SocialLink[] = [
  {
    icon: <FaGithub />,
    url: "https://github.com/uchkunrakhimow",
    label: "GitHub",
  },
  {
    icon: <FaLinkedin />,
    url: "https://linkedin.com/in/uchkunrakhimov",
    label: "LinkedIn",
  },
  {
    icon: <FaTwitter />,
    url: "https://twitter.com/uchkunrakhimov",
    label: "Twitter",
  },
  {
    icon: <PiReadCvLogo />,
    url: "https://read.cv/uchkunrakhimov",
    label: "Read CV",
  },
  {
    icon: <SiBuymeacoffee />,
    url: "https://buymeacoffee.com/uchkunrakhimov",
    label: "Buymeacoffee",
  },
];

// SocialLinks component for better separation of concerns
const SocialLinks: React.FC = () => (
  <div className="flex space-x-4 mb-4">
    {socialLinks.map(({ icon, url, label }) => (
      <Link
        key={label}
        to={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan-500 hover:text-cyan-600 transition text-[1.5rem]"
        aria-label={label}
      >
        {icon}
      </Link>
    ))}
  </div>
);

export default SocialLinks;
