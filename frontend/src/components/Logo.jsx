import newLogo from "../assets/newlogo.jpeg";

const Logo = ({ className = "" }) => (
  <div className={`flex items-center ${className}`}>
    <img
      src={newLogo}
      alt="Silk Sculpture Hair — The Art of Luxury"
      className="h-14 w-14 rounded-2xl bg-white object-contain p-1 shadow-sm sm:h-16 sm:w-16"
    />
  </div>
);

export default Logo;
