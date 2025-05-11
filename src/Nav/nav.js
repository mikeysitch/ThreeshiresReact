import { navItems } from "../data";
import { useNavHandler } from "../hooks/navHandler";

function Nav() {
  const { getTargetId, handleNavClick } = useNavHandler();

  return (
    <nav>
      <ul className="w-full py-2.5 bg-primary  flex justify-center list-none">
        {navItems.map((item, index) => {
          const targetId = getTargetId(item);
          return (
            <li key={index}>
              <a
                href={`#${targetId}`}
                onClick={(e) => handleNavClick(e, targetId)}
                className="
                  px-[50px] py-[50px]  text-black   no-underline   transition-all
                  duration-300  ease-in-out  hover:text-white "
              >
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
