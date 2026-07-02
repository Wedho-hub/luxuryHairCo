import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// React Router does not reset scroll position on navigation — without this,
// clicking a nav link from halfway down a page leaves the new page rendered
// at that same scroll offset. Reset to top on every route change.
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
