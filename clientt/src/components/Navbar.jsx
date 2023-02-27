import { useState } from "react";
import { Link } from "react-router-dom";
import { close, menu, divider } from "../assets";
const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <h3 className="text-gradient font-bold text-[2rem]">RACHEL AGENCIES</h3>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {/* {navLinks.map((nav, index) => ( */}
        {/* // <li
          //   key={nav.id}
          //   className={`font-poppins font-normal cursor-pointer text-[16px] ${
          //     active === nav.title ? "text-white" : "text-dimWhite"
          //   } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
          //   onClick={() => setActive(nav.title)}
          // >
          //   <a href={`#${nav.id}`}>{nav.title}</a>
          // </li> */}

        <li className="font-poppins font-normal text-white mr-10 hover:text-blue-500 cursor-pointer text-[16px]">
          <Link to="/home">Home</Link>
        </li>
        <li className="font-poppins font-normal hover:text-blue-500  text-white mr-10 cursor-pointer text-[16px]">
          <Link to="#">Dashboard</Link>
        </li>
        <li className="font-poppins font-normal hover:text-blue-500  text-white mr-10 cursor-pointer text-[16px]">
          <Link to="#">Contact us</Link>
        </li>

        <li className="font-poppins font-normal hover:text-blue-500  text-white mr-10 cursor-pointer text-[16px]">
          <Link to="/login"> Login</Link>
        </li>
        <li className="font-poppins font-normal hover:text-blue-500  text-white mr-10 cursor-pointer text-[16px]">
          <span>
            {" "}
            <img className="divider" src={divider} />
          </span>
        </li>
        <li className="font-poppins font-normal hover:text-blue-500  text-white mr-10 cursor-pointer text-[16px]">
          <Link to="/register"> Register</Link>
        </li>
        {/* ))} */}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {/* {navLinks.map((nav, index) => ( */}
            <li
              className={`font-poppins font-medium cursor-pointer text-[16px] ${
                active ? "text-white" : "text-dimWhite"
              } `}
              onClick={() => setActive()}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className={`font-poppins font-medium cursor-pointer text-[16px] ${
                active ? "text-white" : "text-dimWhite"
              } `}
              onClick={() => setActive()}
            >
              <Link to="/">Dashboard</Link>
            </li>
            <li
              className={`font-poppins font-medium cursor-pointer text-[16px] ${
                active ? "text-white" : "text-dimWhite"
              } `}
              onClick={() => setActive()}
            >
              <Link to="/">Contact Us</Link>
            </li>

            {/* {/* // <li
              //   key={nav.id}
              //   className={`font-poppins font-medium cursor-pointer text-[16px] ${
              //     active === nav.title ? "text-white" : "text-dimWhite"
              //   } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
              //   onClick={() => setActive(nav.title)}
              // >
              //   <a href={`#${nav.id}`}>{nav.title}</a>
              // </li> 
            ))} */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
