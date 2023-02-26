import React, { useState, useEffect, useContext } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import PropTypes from "prop-types";
import { UserContext } from "../UserContext";

const Wallet = () => {
  const { getBalance } = useContext(UserContext);
  const [balance, setBalance] = useState(2);
  useEffect(() => {
    const fetchBalance = async () => {
      const response = await getBalance();
      if (response.status === 200) {
        setBalance(response.data.balance);
      }
    };
    fetchBalance();
  }, [getBalance]);

  const handleDeposit = () => {
    console.log("handleDeposit called");
  };
  return (
    <div className="flex flex-col bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-bold">My Wallet</h2>
      <p className="mt-2 text-gray-500">Current balance: {balance}</p>
      <div className="mt-4 flex flex-row justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleDeposit}
        >
          Deposit
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Withdraw
        </button>
      </div>

      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h2">
            Balance
          </Typography>
          <Typography color="textSecondary">Current Amount</Typography>
          <Typography variant="h3" component="p">
            {balance}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

Wallet.propTypes = {
  balance: PropTypes.number.isRequired,
};

export default Wallet;
