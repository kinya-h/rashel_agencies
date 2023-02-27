import React from "react";
import illustration from "./assets/illustration.svg";
import illustrations from "./assets/illustrations.svg";
import bankumnwwtusc from "./assets/bankumnwwtusc.svg";
import icon5 from "./assets/icon5.svg";
import icon4 from "./assets/icon4.svg";
import icon3 from "./assets/icon3.svg";
import icon from "./assets/icon.svg";
import icon2 from "./assets/icon2.svg";
import lightcoin from "./assets/icon1.svg";
import arrowRight from "./assets/arrowRight.svg";
import curve from "./assets/group111.svg";
import arrowUp from "./assets/arrowUp.svg";
import divider from "./assets/divider.svg";

function Land() {
  return (
    <div>
      <div className="bg-primary fixed w-full h-12">
        {/* <span className="ml-auto text-white pt-5">RASHEL AGENCIES</span> */}

        <nav className="container flex justify-end relative mx-auto mt-3.5">
          <ul className="flex items-center justify-end space-x-6 text-white font-Arial ">
            <li>
              <a href="#" className="hover:text-blue-900">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-900">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-500">
                Contacts
              </a>
            </li>
            <li>
              <a href="login/" className="hover:text-gray-500">
                Login
              </a>
            </li>
            <li>
              <span>
                {" "}
                <img className="divider" src={divider} />
              </span>
            </li>
            <li>
              <a href="register/" className="hover:text-gray-500">
                Register
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="bg-primary">
        <div className="flex  self-end items-center w-full	 justify-space-between ">
          <div className="m-5 pr-5  max-w-xs  break-word">
            <span className="text-3xl font-bold text-white">
              <h1>Fastest &amp; secure platform to invest your money </h1>
            </span>
            <span className="text-center  my-4 text-lightgray">
              Swap earn and build on the leading online investment platform
            </span>
            <div>
              <button className="bg-blue-500 text-white mt-14 py-2 px-2 rounded-full">
                {" "}
                Try for Free{" "}
              </button>
            </div>
          </div>

          {/* swap earn and build on the leading online ivestment platform */}
          <img
            className="z-1 self-start object-contain w-96	h-96 ml-auto mt-5 mr-6 pl-5"
            src={illustration}
            alt="btc"
          />
        </div>

        <div className="flex bg-primary justify-between p-5">
          <div className="flex">
            <img className="w-21 mx-6	h-21" src={icon5} />
            <div className="flex-column">
              <span className="font-bold text-white	 leading-10">$30B</span>
              <h1 className="text-sm text-lightgray">
                Digital Currency Exchanged
              </h1>
            </div>
          </div>
          <div className="flex">
            <img className="w-21 mx-6	h-21" src={icon4} />
            <div className="flex-column">
              <span className="font-bold text-white	 leading-10">1M+</span>
              <h1 className="text-sm text-lightgray">
                Trusted Wallet Investors
              </h1>
            </div>
          </div>

          <div className="flex">
            <img className="w-21 mx-6	h-21" src={icon3} />
            <div className="flex-column">
              <span className="font-bold text-white	 leading-10">95</span>
              <h1 className="text-sm text-lightgray">Countries Supported</h1>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <img
            className="z-1 ml-6 pl-10 self-start object-contain w-96	mr-auto h-96"
            src={illustrations}
          />

          <div className=" flex-column mr-24 pr-5  max-w-xs  break-word">
            <h1 className="text-white font-bold font-2xl ">
              Why you should choose Rashel Agencies
            </h1>
            <h1 className="text-gray text-center ">
              Experience the next generation online Trading platform. No
              financial borders, extra fees, or fake reviews.
            </h1>
            <button className="bg-blue-500 text-white mt-5 p-2 rounded-full">
              {" "}
              Learn More
            </button>
          </div>
        </div>

        {/* Another Section */}
        <div className="bg-lightgray ">
          <div className="flex justify-center items-center ">
            <h1 className="font-bold font-2xl text-primary  mt-16">
              Trade Securely and Earn Money Online
            </h1>
          </div>

          <div className="flex justify-between mr-24  ml-24 mb-24">
            <div className="flex flex-col ml-10 pb-5 mt-10 items-center  rounded-lg pt-0.5 pb-0.5  bg-secondary w-52 h-70">
              <img className="w-10 h-10 object-contain pt-2" src={icon} />
              <span className="font-bold mt-4 text-white">Bitcoin</span>
              <span className="p-2 text-center text-lightgray">
                Digital currency in which a record of transactions is
                maintained.
              </span>
              <button className="bg-blue-500 text-white mt-10  p-2 rounded-full">
                {" "}
                Start Trading
              </button>
            </div>

            <div className="flex shadow-lg shadow-gray-500/50 flex-col ml-10 mt-10 items-center  rounded-lg pt-0.5 pb-0.5  bg-white w-52 h-70">
              <img
                className="w-10 h-10 object-contain pt-2"
                src={icon2}
                alt="etherium"
              />
              <span className="font-bold mt-4 text-secondary">Etherium</span>
              <span className="p-2 text-center text-gray">
                Blockchain technology to create and run decentralized digital
                applications.
              </span>
              <button className="text-white  p-2 rounded-full">
                {" "}
                <img className=" object-contain" src={arrowRight} />{" "}
              </button>
            </div>
            <div className="flex flex-col ml-10 mt-10 items-center  rounded-lg pt-0.5 pb-0.5  bg-white w-52 h-70">
              <img
                className="w-10 h-10 object-contain pt-2"
                src={lightcoin}
                alt="lightcoin"
              />
              <span className="font-bold mt-4 text-secondary">Light coin</span>
              <span className="p-2  text-center text-gray">
                Cryptocurrency that enables instant payments to anyone in the
                world.
              </span>
              <button className="text-white  mt-2 p-2 rounded-full">
                {" "}
                <img className=" object-contain " src={arrowRight} />{" "}
              </button>
            </div>
          </div>

          <div className="bg-secondary">
            <div className="flex justify-center items-justify  mx-auto max-w-xs ">
              <h1 className="font-bold font-2xl text-white text-center  mt-16  ">
                Market sentiments, portfolio, and run the infrastructure of your
                choice
              </h1>
            </div>
            <div className="flex justify-between mr-24  ml-24 mt-5 ">
              <div className="max-w-xs h-70">
                <h1 className="font-bold font-3xl text-white ">
                  {" "}
                  Invest Smart
                </h1>
                <h1 className="text-justify pt-3  text-lightgray ">
                  Get full statistic information about the behaviour of buyers
                  and sellers will help you to make the decision.{" "}
                </h1>
              </div>
              <div>
                <div className="w-84 rounded bg-lightprimary flex flex-col   mt-10 items-center justify-center  ">
                  <div className=" flex self-start pt-3 pl-2">
                    <img className="w-10 h-10 object-contain pt-2" src={icon} />

                    <div className="p-2">
                      <h1 className="font-bold font-3xl text-white ">
                        {" "}
                        Bitcoin
                      </h1>
                      <span className="text-gray font-sm">
                        0.00080 BTC
                      </span>{" "}
                      <span className="ml-44  text-blue-600">+125%</span>
                    </div>
                  </div>
                  <img
                    className="z-1 object-contain w-96	h-32  my-auto mr-6 pl-5"
                    src={curve}
                    alt="btc"
                  />
                  <div className="bg-lighterBlue w-32 -mb-60 z-1 absolute	self-start ml-10 p-4 rounded-lg">
                    <h2 className="text-lg font-bold text-white mb-2">
                      Increase in Trade
                    </h2>
                    <div className="flex items-center">
                      <span className="text-green-500 font-bold text-xl mr-2">
                        +75%
                      </span>
                      <img className="h-5" src={arrowUp} alt="Arrow up" />
                    </div>
                    <p className="text-white mt-2">Sell option</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-secondary">
            <h1>HELO</h1>
            <h1>HELO</h1>
            <h1>HELO</h1>
            <h1>HELO</h1>
            <h1>HELO</h1>
            <h1>HELO</h1>
            <h1>HELO</h1>
            <h1>HELO</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Land;
