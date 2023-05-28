import React, { useState } from "react";
import Typography from "@mui/material/Typography";

function PayBillDeposit() {
  const [code, setCode] = useState("");

  const handleFormChange = (e) => {
    e.preventDefault();
  };

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  return (
    <div>
      <div className="flex">
        <div className="bg-secondary rounded-md ml-auto mr-10 mt-2 shadow-lg">
          <div className="m-2">
            <Typography
              component="h4"
              variant="h5"
              sx={{ p: 2 }}
              color="common.white"
            >
              {" "}
              Paybill Number: 756756
            </Typography>
            <Typography
              component="h4"
              variant="h5"
              sx={{ px: 2 }}
              color="common.white"
            >
              {" "}
              Account Number: 39870
            </Typography>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="ml-auto mr-10 mt-2">
          <form onSubmit={handleFormChange}>
            <label
              htmlFor="username"
              className="block text-gray-700 font-bold mb-1 text-secondary"
            >
              Enter Mpesa Reference code below:
            </label>
            <input
              type="text"
              Placeholder="Enter Mpesa Reference Code"
              className="border border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent rounded mr-2 p-1.5"
              onChange={handleCodeChange}
            />

            <button
              type="submit"
              className="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Done
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PayBillDeposit;
