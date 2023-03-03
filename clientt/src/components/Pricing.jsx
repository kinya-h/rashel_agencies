import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";

const tiers = [
  {
    title: "Mini",
    price: "800",
    description: [
      "Enjoy the Experiece",
      "Buy a Ksh 800  Package ",
      " Earn 25 bob",
      "Per view",
    ],
    buttonText: "Check Out",
    buttonVariant: "outlined",
  },
  {
    title: "Pro",
    subheader: "Most popular",
    price: "3600",
    description: [
      "daily promos included",
      "Buy a Ksh 3600 Package",
      "Earn 150 bob",
      "Per View",
    ],
    buttonText: "Get started",
    buttonVariant: "contained",
  },
  {
    title: "Regular",
    price: "1600",
    description: [
      "Daily  promos included",
      "Purchase at Ksh 1600",
      "Earn Ksh 50 bob",
      "Per view ",
    ],
    buttonText: "Contact us",
    buttonVariant: "outlined",
  },
  {
    title: "Enterprise",
    price: "2600",
    description: [
      "Daily Promotions",
      "Help center access",
      "Earn Ksh 100",
      "Per View",
    ],
    buttonText: "Contact us",
    buttonVariant: "outlined",
  },
  {
    title: "Ultimate",
    price: "4800",
    description: [
      "Daily Promos & Packs",
      "Help center access",
      "Earn Ksh 200 ",
      "Per View",
    ],
    buttonText: "Get Started",
    buttonVariant: "contained",
  },
  {
    title: "Spin the Wheel",
    price: "100 ↓",
    description: [
      "Lucky Spin",
      "5 Spins Max",
      "Max Amount 100",
      "Help center access",
    ],
    buttonText: "Get Started",
    buttonVariant: "outlined",
  },
];

function PricingContent() {
  const navigate = useNavigate();

  const handlePricing = (price) => {
    navigate("/deposit");
  };
  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />

      {/* Hero unit */}
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 8, pb: 6 }}
      >
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          component="p"
        >
          Quickly Earn and Build Yourself through Promotions and Referals
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === "Enterprise" ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: "center" }}
                  action={tier.title === "Pro" ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: "center",
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === "light"
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "baseline",
                      mb: 2,
                    }}
                  >
                    <Typography
                      component="h2"
                      variant="h3"
                      color="text.primary"
                    >
                      Ksh{tier.price}
                    </Typography>
                    {/* <Typography variant="h6" color="text.secondary">
                      /mo
                    </Typography> */}
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button
                    fullWidth
                    variant={tier.buttonVariant}
                    onClick={() => {
                      handlePricing(tier.price);
                    }}
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default function Pricing() {
  return <PricingContent />;
}
