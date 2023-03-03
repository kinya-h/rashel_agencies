import React from "react";
import Wallet from "../components/Wallet";

const TradingPage = () => {
  const balance = 500; // assume we get the user's balance from an API

  return (
    <div>
      <Wallet balance={balance} />
    </div>
  );
};

export default TradingPage;
