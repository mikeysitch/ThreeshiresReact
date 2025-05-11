import { useState } from "react";
import { navItems } from "../../data";
import { useNavHandler } from "../../hooks/navHandler";
import Header from "../../header/header";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const { getTargetId, handleNavClick } = useNavHandler();

  return (
    <nav className="w-full bg-white  z-50 shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Header title="Main Logo" />

        <button
          type="button"
          className="ml-6 p-2 px-4 focus:outline-none bg-gray-100 rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <XMarkIcon className="h-10 w-10 text-black" />
          ) : (
            <Bars3Icon className="h-10 w-10 text-black" />
          )}
        </button>
      </div>

      {/* Overlay Menu */}
      <div
        className={`z-[100] fixed inset-0 bg-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end relative top-5 right-5">
            <button
              type="button"
              className="p-2 focus:outline-none bg-gray-50"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6 text-black" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-black" />
              )}
            </button>
        </div>
       

        <ul className="flex flex-col items-center justify-center space-y-6 h-full">
          {navItems.map((item, index) => {
            const targetId = getTargetId(item);
            return (
              <li key={index}>
                <a
                  href={`#${targetId}`}
                  className="text-xl font-medium"
                  onClick={(e) => {
                    handleNavClick(e, targetId);
                    setIsOpen(false);
                  }}
                >
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}