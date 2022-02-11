import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import LandingImage from "../../assets/landing.gif";
import Logo from "../../assets/logo-mini.svg";
import { history } from "../../helpers";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100vh",
    position: "relative",
    "& video": {
      objectFit: "cover",
    },
    background: `url(${LandingImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  title: {
    paddingBottom: theme.spacing(4),
  },
  letmeBtn: {
    borderColor: "white",
    color: "white",
  },
  landingLogoStyle: {
    "& img": {
      height: 100,
    },
    marginBottom: "30px",
    // padding: "20px 0",
    // position: "absolute",
    // top: "50px",
  },
}));
function Landing() {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <div className={classes.overlay}>
        <Box
          height="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          color="#fff"
        >
          <div className={classes.landingLogoStyle}>
            <img src={Logo} />
          </div>
          <Button
            variant="outlined"
            className={classes.letmeBtn}
            onClick={() => {
              history.push("/home");
            }}
          >
            Let me in
          </Button>
        </Box>
      </div>
    </section>
  );
}

export default Landing;
