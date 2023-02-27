import React from "react";
import Wallet from "../components/Wallet";

const TradingPage = () => {
  const balance = 500; // assume we get the user's balance from an API

  return (
    <div>
      <h1>Welcome to the trading page</h1>
      <Wallet balance={balance} />
    </div>
  );
};

export default TradingPage;
