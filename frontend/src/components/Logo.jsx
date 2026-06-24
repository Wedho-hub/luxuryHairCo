import iconName from "../assets/silk-sculpture-hair-icon-name.svg";
import full from "../assets/silk-sculpture-hair-full.svg";

const Logo = ({ className = "", variant = "compact" }) => (
  <img
    src={variant === "full" ? full : iconName}
    alt="Silk Sculpture Hair — The Art of Luxury"
    className={`h-12 w-auto sm:h-14 ${className}`}
  />
);

export default Logo;
