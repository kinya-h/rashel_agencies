import React, { useContext } from "react";

import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

import { UserContext } from "../UserContext";
import Deposit from "./Deposit";

function LoanRequest() {
  const { loanAmount, loanDuration } = useContext(UserContext);
  return (
    <div className="bg-primary flex justify-center items-center mt-10">
      <Stack sx={{ ml: 8, mr: 2 }} spacing={2}>
        <Alert severity="info">
          Deposit the Loan processing fee of KSH 300 to Proceed.
        </Alert>
      </Stack>
      <div>
        <Deposit />
      </div>
    </div>
  );
}

export default LoanRequest;
