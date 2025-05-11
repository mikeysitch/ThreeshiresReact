import { useNavHandler } from "../hooks/navHandler";

export default function LinkButton({ href, mobileHref, children }) {
  const { isMobile, handleNavClick } = useNavHandler();

  const handleClick = (e) => {
    if (href.startsWith("#")) {
      // Decide which href to use based on screen size
      const finalHref = isMobile && mobileHref ? mobileHref : href;
      const id = finalHref.slice(1); // remove '#' to get the id
      handleNavClick(e, id);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="bg-primary hover:bg-blue-700 text-white text-lg font-semibold px-6 py-3 rounded-md shadow transition-all"
    >
      {children}
    </button>
  );
}
