import { useMediaQuery } from "react-responsive";

export function useNavHandler() {
  const isMobile = useMediaQuery({ maxWidth: 800 });

  const getTargetId = (item) => (isMobile ? item.mobileId : item.id);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    window.history.pushState(null, "", `#${id}`);
  };

  return { isMobile, getTargetId, handleNavClick };
}
