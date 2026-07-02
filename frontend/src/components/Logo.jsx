import iconImg from "../assets/silk-sculpture-hair-icon.svg";
import iconName from "../assets/silk-sculpture-hair-icon-name.svg";
import full from "../assets/silk-sculpture-hair-full.svg";

const SRCS = { icon: iconImg, compact: iconName, full };

const Logo = ({ className = "h-12 w-auto sm:h-14", variant = "compact" }) => (
  <img
    src={SRCS[variant] ?? iconName}
    alt="Silk Sculpture Hair — The Art of Luxury"
    className={className}
  />
);

export default Logo;
