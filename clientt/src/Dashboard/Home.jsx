import React, { useState } from "react";
import Sidebar from "./SideBar";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";

import { MdDashboard ,MdAccountCircle} from "react-icons/md";
import { FcSettings } from "react-icons/fc";
import { RiLoginBoxLine } from "react-icons/ri";
import { BiArrowBack, BiHelpCircle } from "react-icons/bi";
import { BsWalletFill } from "react-icons/bs";
function Home() {
  const [open, setOpen] = useState(true);
  const [cryptoHoldings, setCryptoHoldings] = useState([
    { name: "Bitcoin", symbol: "BTC", amount: 2.5, value: 125000 },
    { name: "Ethereum", symbol: "ETH", amount: 10, value: 30000 },
    { name: "Dogecoin", symbol: "DOGE", amount: 10000, value: 1000 },
  ]);
  const [totalBalance, setTotalBalance] = useState(157000);
  const [availableBalance, setAvailableBalance] = useState(60000);
  const [tradeFormData, setTradeFormData] = useState({
    symbol: "",
    amount: "",
    type: "buy",
  });

  const Menus = [
    {
      title: "RASHEL AGNCIES",
      icon: (
        <MdDashboard className="w-8 h-8 text-lightergray rounded-full hover:bg-gray-100 text-3xl" />
      ),
    },
    {
      title: "Dashboard",
      icon: (
        <MdDashboard className="w-8 h-8 text-lightergray rounded-full hover:bg-gray-100 text-3xl" />
      ),
      gap: true,
    },
    {
      title: "Inbox",
      icon: (
        <RiLoginBoxLine className="w-8 h-8 text-lightergray rounded-full hover:bg-gray-100 text-3xl" />
      ),
      gap: true,
    },
    {
      title: "Accounts",
      icon: (
        <MdAccountCircle className="w-8 h-8 text-lightergray rounded-full hover:bg-gray-100 text-3xl" />
      ),
      gap: true,
    },
    {
      title: "My Wallet",
      icon: (
        <BsWalletFill className="w-8 h-8 text-lightergray  hover:bg-gray-100 text-3xl" />
      ),
      gap: true,
    },

    {
      title: "Settings",
      icon: (
        <FcSettings className="w-8 h-8 text-lightergray rounded-full hover:bg-gray-100 text-3xl" />
      ),
    },
    {
      title: "Help",
      icon: (
        <BiHelpCircle className="w-8 h-8 text-lightergray rounded-full hover:bg-gray-100 text-3xl" />
      ),
    },
  ];

  const handleTradeFormChange = (e) => {
    setTradeFormData({
      ...tradeFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitTrade = (e) => {
    e.preventDefault();

    const { symbol, amount, type } = tradeFormData;
    const price = 50000; // replace with API call to get current price

    const value = price * parseFloat(amount);

    if (type === "buy" && value > availableBalance) {
      alert("Insufficient funds!");
      return;
    }

    const updatedCryptoHoldings = cryptoHoldings.map((crypto) => {
      if (crypto.symbol === symbol) {
        if (type === "buy") {
          return {
            ...crypto,
            amount: crypto.amount + parseFloat(amount),
            value: crypto.value + value,
          };
        } else {
          return {
            ...crypto,
            amount: crypto.amount - parseFloat(amount),
            value: crypto.value - value,
          };
        }
      } else {
        return crypto;
      }
    });

    const updatedTotalBalance =
      type === "buy" ? totalBalance - value : totalBalance + value;

    const updatedAvailableBalance =
      type === "buy" ? availableBalance - value : availableBalance + value;

    setCryptoHoldings(updatedCryptoHoldings);
    setTotalBalance(updatedTotalBalance);
    setAvailableBalance(updatedAvailableBalance);
    setTradeFormData({ symbol: "", amount: "", type: "buy" });
  };

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-64" : "w-20 "
        } bg-primary z-40 h-screen p-5  pt-8 relative duration-300`}
      >
        <BiArrowBack
          className={`absolute cursor-pointer -right-3 top-9 w-7 h-7 
           border-2 rounded-full text-white bg-blue-600 ${
             !open && "rotate-180"
           }`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <MdDashboard className="cursor-pointer w-8 h-8 rounded-full hover:bg-gray-100 text-3xl text-lightergray duration-500" />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Rashel
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <div className="hover:bg-divbg   items-center  w-full p-1.5 rounded-md flex">
                {" "}
                {Menu.icon}
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  <h1 className="text-white font-medium ml-2 mr-2 text-xl">
                    {Menu.title}
                  </h1>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold ">Home Page</h1>
      </div>
    </div>
  );
}

export default Home;
