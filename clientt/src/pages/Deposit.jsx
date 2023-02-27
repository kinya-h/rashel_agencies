import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../UserContext";
import WalletCard from "../components/WalletCard";

function Deposit() {
  const [balance, setBalance] = useState();
  const [amount, setAmount] = useState("");
  const [phone, setPhone] = useState("");
  const { axiosInstance, refreshToken, getBalance } = useContext(UserContext);

  useEffect(() => {
    const fetchBalance = async () => {
      const response = await getBalance();
      if (response.status === 200) {
        setBalance(response.data.balance);
      }
    };
    fetchBalance();
  }, [getBalance]);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("stk push Token called!");
    try {
      const response = await axiosInstance.post("api/stkpush/push/", {
        amount: amount,
      });

      if (response.status === 200) {
        console.log(response);
      } else {
        alert("Error Try agin ");
      }

      return response;
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="bg-primary h-screen">
      <div className="flex w-full">
        <div className="ml-auto mr-10 mt-10 ">
          <WalletCard balance={balance} />
        </div>
      </div>

      <div className="flex items-center mt-2 justify-center bg-gray-100">
        <div className="w-full max-w-sm">
          <div className="bg-white shadow-lg rounded-lg px-8  pb-8 mb-4">
            <h2 className="mb-4 text-2xl font-extrabold text-gray-900 text-center">
              Enter amount to deposit
            </h2>
            <form onSubmit={handleSubmit}>
              <input type="hidden" name="remember" value="true" />
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Amount
                </label>
                <input
                  id="amount"
                  name="amount"
                  type="text"
                  autoComplete="amount"
                  required
                  className="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="amount"
                  value={amount}
                  onChange={handleAmountChange}
                />
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="phone"
                  autoComplete="phone"
                  required
                  className="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Phone"
                  value={phone}
                  onChange={handlePhoneChange}
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Deposit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Deposit;
