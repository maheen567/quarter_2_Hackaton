import React from "react";
import { IoMdMenu } from "react-icons/io";
import { BsHandbag } from "react-icons/bs";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "#",
  },
  {
    id: 2,
    title: "Menu",
    link: "#",
  },
  {
    id: 3,
    title: "Blog",
    link: "#",
  },
  {
    id: 4,
    title: "Pages",
    link: "#",
  },
  {
    id: 5,
    title: "About",
    link: "#",
  },
  {
    id: 6,
    title: "Shop",
    link: "#",
  },
  {
    id: 7,
    title: "Contact",
    link: "#",
  },
];

export default function Navbar() {
  return (
    <>
      <div className="bg-black text-[#ffffff] pt-11 px-1">
        <nav className="navbar">
          {/* _____ Logo Section ______*/}
          <div className="font-bold text-2xl block text-center leading-6">
            <a href="#" className="font-[poppins]">
              Food<span className="text-customYellow">Truck</span>
            </a>
          </div>

          <div className="flex items-center justify-between">
            {/* ______ Menu Section _______*/}
            <div>
              <ul className="flex items-start gap-8 font-[inter] font-normal text-[16px] pt-4 cursor-pointer">
                {NavbarMenu.map((item) => (
                  <li key={item.id}>
                    <a href={item.link}>{item.title}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* _________ Hamburger Menu Section___________ */}
            <div className="flex items-center gap-3">
              <div className="flex px-4 py-2 rounded-full border-2 border-customYellow overflow-hidden max-w-md mx-auto font-[inter] ">
                <input
                  placeholder="Search..."
                  className="w-[250px] outline-none bg-transparent text-gray-600 text-sm placeholder:text-white"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 192.904 192.904"
                  width="16px"
                  className="fill-gray-100"
                >
                  <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
                </svg>
              </div>
              <BsHandbag className="h-[24px] w-[24px]" />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
