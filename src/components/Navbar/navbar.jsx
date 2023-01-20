import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import swal from "sweetalert";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const links = [
    { id: 1, name: "why us" },
    { id: 2, name: "pricing" },
    { id: 3, name: "company" },
    { id: 4, name: "support" },
    { id: 5, name: "log in" },
  ];

  return (
    <div className="bg-[#F1F9F9] fixed w-full md:px-[50px] z-[10000] px-5 flex md:flex-row flex-col items-center justify-between py-4">
      <div className="flex md:w-auto w-full justify-between items-center">
        <p className="text-[#1C2126] text-3xl font-bold">
          REN<span className="text-[#003356]">MPAY</span>
        </p>
        <GiHamburgerMenu onClick={() => setNavOpen(!navOpen)} className="text-3xl text-[#003356] lg:hidden" />
      </div>
      <div className={`md:w-2/3 w-full flex md:flex-row flex-col justify-end md:h-auto transition ease-linear overflow-hidden items-center ${navOpen === true ? "h-auto" : "h-0"}`}>
        <ul className="flex md:w-[70%] w-full md:flex-row md:h-auto h-[80vh] py-3 flex-col items-center justify-between mr-5">
          {links.map((link) => {
            return (
              <li className="lg:text-lg md:text-xs capitalize font-semibold cursor-pointer" key={link.id}>
                {link.name}
              </li>
            );
          })}
        </ul>
        <button className="bg-[#003356] md:w-[30%] w-full hover:bg-[#f1f9f9] hover:border hover:border-[#003356] hover:text-[#003356] text-white capitalize lg:text-lg md:text-xs px-2 py-[10px] rounded-[15px]" onClick={() => swal("Coming Soon!", "The future is not something we enter. The future is something we create.  - Leonard I. Sweet")}>
          create a free account
        </button>
      </div>
    </div>
  );
};

export default Navbar;
