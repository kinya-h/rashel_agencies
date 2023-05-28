import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import PayBillDeposit from "./PayBillDeposit";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import PropTypes from "prop-types";
import { UserContext } from "../UserContext";

const Wallet = () => {
  const { getBalance } = useContext(UserContext);
  const [balance, setBalance] = useState(2);
  const [low, setLow] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchBalance = async () => {
      const response = await getBalance();
      if (response.status === 200) {
        setBalance(response.data.balance);
      }
    };
    fetchBalance();
    if (balance <= 5) {
      setLow(true);
    }
  }, [getBalance, balance]);

  const handleDeposit = () => {
    setLow(true);
    // navigate("/deposit");
  };
  return (
    <div className="ml-20 justify-center items-center">
      <div className="flex flex-col  bg-white p-6 w-3/4 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold">My Wallet</h2>
        <p className="mt-2 text-gray-500">Current balance: {balance}</p>
        <div className="mt-4 flex flex-row justify-between">
          <div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleDeposit}
            >
              Deposit
            </button>
          </div>
          {low ? <PayBillDeposit /> : ""}
          <div>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              WithDraw
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Wallet.propTypes = {
  balance: PropTypes.number.isRequired,
};

export default Wallet;
