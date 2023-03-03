import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { UserContext } from "../UserContext";
import SpinningWheel from "../components/SpinningWheel";

function Spin() {
  const [balance, setBalance] = useState();
  const [balanceInfo, setBalanceInfo] = useState();
  const { getBalance } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchBalance = async () => {
      const response = await getBalance();
      if (response.status === 200) {
        setBalance(response.data.balance);
        if (balance <= 0) {
          setBalanceInfo("The balance is too low, please top up your account");
        }
      }
    };
    fetchBalance();
  }, [getBalance, balance, navigate]);
  return (
    <div className="flex bg-primary">
      <SpinningWheel />

      {balance <= 0 ? (
        <Stack sx={{ ml: 2, mr: 10, mt: 10 }} spacing={2}>
          <Alert severity="error">{balanceInfo}</Alert>
        </Stack>
      ) : (
        ""
      )}
    </div>
  );
}

export default Spin;
