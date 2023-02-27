import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import SpinningWheel from "../components/SpinningWheel";

function Spin() {
  const [balance, setBalance] = useState();
  const { getBalance } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchBalance = async () => {
      const response = await getBalance();
      if (response.status === 200) {
        setBalance(response.data.balance);
        if (balance <= 0) {
          alert("The balance is too low, please to up your account");
          navigate("/deposit");
        }
      }
    };
    fetchBalance();
  }, [getBalance, balance, navigate]);
  return (
    <div>
      <SpinningWheel />
    </div>
  );
}

export default Spin;
