import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { NavLink } from "react-router-dom";

 const NavBarPrimary = () => {
  const [click, setClick] = useState(false);

  const content = (
    <div className="absolute left-0 right-0 block w-full bg-white transition lg:hidden md:top-[60px] sm:top-[50px] z-20">
      <ul className="p-20 text-xl text-end max-sm:text-base">
        <Link to="/">
          <li className="py-4 my-4 text-center border-b cursor-pointer text-darkGray border-primary hover:border-primary hover:text-orange">HOME</li>
        </Link>
        <Link to="/plakater/drama">
          <li className="py-4 my-4 text-center border-b cursor-pointer text-darkGray border-primary hover:border-primary hover:text-orange">PLAKATER</li>
        </Link>
        <Link to="/omos">
          <li className="py-4 my-4 text-center border-b cursor-pointer text-darkGray border-primary hover:border-primary hover:text-orange">OM OS</li>
        </Link>
        <Link to="/kontakt">
          <li className="py-4 my-4 text-center border-b cursor-pointer text-darkGray border-primary hover:border-primary hover:text-orange">KONATAKT</li>
        </Link>
        <Link to="/login">
          <li className="py-4 my-4 text-center border-b cursor-pointer text-darkGray border-primary hover:border-primary hover:text-orange">LOGIN</li>
        </Link>
      </ul>
    </div>
  );

  return (
    <nav className="bg-white max-w-[1200px] m-auto pb-2">
        <div className="max-w-[1000px] m-auto">
      <div className="z-50 flex justify-end items-center flex-1 ml-auto h-10vh lg: border-b-2 bg-white border-orange max-w-[1400px] m-auto grid grid-cols-2 grid-rows-2 gap-4">
        <div className="flex items-center row-span-2">
        <h2 className="text-[5vw] lg:text-[54px] font-black text-orange font-titillium-web whitespace-pre">WALLYWOOD</h2>
        </div>
        <div className="ml-auto">
        <NavLink to="/cart">
        {/* Shopping basket SVG */}
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="20.25" height="15.75" viewBox="0 0 20.25 15.75">
          <defs>
            <clipPath id="clip-path">
              <rect width="20.25" height="15.75" fill="none"/>
            </clipPath>
          </defs>
          <g id="Repeat_Grid_4" data-name="Repeat Grid 4" clipPath="url(#clip-path)">
            <g transform="translate(-979.75)">
              <g id="Icon_awesome-shopping-basket" data-name="Icon awesome-shopping-basket" transform="translate(979.75)">
                <path id="Icon_awesome-shopping-basket-2" data-name="Icon awesome-shopping-basket" d="M20.25,8.719v.563a.844.844,0,0,1-.844.844h-.281l-.918,6.426A1.687,1.687,0,0,1,16.536,18H3.714a1.688,1.688,0,0,1-1.671-1.449l-.918-6.426H.844A.844.844,0,0,1,0,9.281V8.719a.844.844,0,0,1,.844-.844H3.211L6.965,2.713a1.125,1.125,0,0,1,1.82,1.323L5.993,7.875h8.263L11.465,4.037a1.125,1.125,0,0,1,1.82-1.323l3.754,5.162h2.367A.844.844,0,0,1,20.25,8.719Zm-9.281,6.188V10.969a.844.844,0,0,0-1.688,0v3.938a.844.844,0,1,0,1.688,0Zm3.938,0V10.969a.844.844,0,0,0-1.687,0v3.938a.844.844,0,0,0,1.688,0Zm-7.875,0V10.969a.844.844,0,0,0-1.688,0v3.938a.844.844,0,0,0,1.688,0Z" transform="translate(0 -2.25)"/>
              </g>
            </g>
          </g>
        </svg>
      </NavLink>
            </div>
        <div className="hidden lg:flex md:flex col-start-2 w-full border-w-full relative flex-row">
        <ul className="flex flex-row gap-8 text-[14px]">
            <Link className="m-0" to="/">
              <li className="pr-4 transition cursor-pointer text-darkGray  hover:text-orange">HOME</li>
            </Link>
            <Link to="/posters/drama">
              <li className="pr-4 transition cursor-pointer text-darkGray  hover:text-orange">PLAKATER</li>
            </Link>
            <Link to="/omos">
              <li className="pr-4 transition cursor-pointer whitespace-pre text-darkGray  hover:text-orange">OM OS</li>
            </Link>
            <Link to="/kontakt">
              <li className="transition cursor-pointer text-darkGray  hover:text-orange">KONATAKT</li>
            </Link>
            
            <Link to="/login">
              <li className="transition cursor-pointer text-darkGray  hover:text-orange">LOGIN</li>
            </Link>
          </ul>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden md:hidden flex flex-row-reverse ">
          {click && content}
          <button className="block transition text-primary" onClick={() => setClick(!click)} style={{ zIndex: 100 }}>
            {click ? <FaTimes /> : <CiMenuBurger />}
          </button>
        </div>
      </div>
      </div>
    </nav>
  );
};

export default NavBarPrimary;
