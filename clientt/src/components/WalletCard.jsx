import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import Title from "./Title";

function preventDefault(event) {
  event.preventDefault();
}

export default function WalletCard({ balance }) {
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`;
  return (
    <React.Fragment>
      <Card
        sx={{ maxWidth: 250 }}
        className="items-center justify-center bg-blue"
      >
        <CardContent>
          <Typography component="h2" variant="h6" color="primary" gutterBottom>
            Current Balance{" "}
          </Typography>
          <Typography component="p" variant="h4">
            Ksh {balance}
          </Typography>
          <Typography color="text.secondary" sx={{ flex: 1 }}>
            on {currentDate}
          </Typography>
          <div></div>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}
