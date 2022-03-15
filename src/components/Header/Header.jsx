import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import { history } from "../../helpers";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import Container from "@material-ui/core/Container";
import MenuItem from "@material-ui/core/MenuItem";
import Logo from "../../assets/logo.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "relative",
  },
  logo: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    height: 100,
    cursor: "pointer",
  },
  title: {
    flexGrow: 1,
  },
  goBack: {
    marginRight: "5px",
  },
  customAppBar: {
    boxShadow: "none",
    paddingTop: 20,
  },
  navBar: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
  },
  partnerMobile: {
    top: "100px",
    color: "#065997",
    right: "20px",
    width: "200px",
    display: "flex",
    position: "absolute",
    background: "#fafafa",
    marginTop: "20px",
    padding: "10px",
    justifyContent: "flex-end",
    borderRadius: "10px",
    border: "dashed 0.5px #e87950",
    zIndex: 1,
    "& img": {
      width: "190px",
      paddingTop: "10px",
    },
    "& $title": {
      position: "absolute",
      right: "15px",
      fontSize: "0.85rem",
    },
    [theme.breakpoints.down("xs")]: {
      "& img": {
        width: "60%",
      },
    },
  },
  partner: {
    // top: "100px",
    color: "#065997",
    // right: "20px",
    width: "200px",
    display: "flex",
    position: "relative",
    // background: "#fafafa",
    marginTop: "20px",
    marginLeft: "100px",
    padding: "10px",
    justifyContent: "flex-end",

    borderRadius: "10px",
    // border: "dashed 0.5px #e87950",
    // zIndex: 1,
    "& img": {
      width: "190px",
      paddingTop: "10px",
    },
    "& $title": {
      position: "absolute",
      right: "15px",
      fontSize: "0.85rem",
      textAlign: "center",
      top: "15px",
    },
    [theme.breakpoints.down("xs")]: {
      // display: "none",
      "& img": {
        width: "60%",
      },
    },
  },
}));

const pages = [
  "Home",
  "Services",
  "Technologies",
  "Company",
  "Career",
  "Contact Us",
];
function Header(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const classes = useStyles();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const show = history.location && history.location.pathname === "/404";

  const setPath = (pathname) => {
    switch (pathname) {
      case "Home": {
        return `/`;
      }
      case "Contact Us": {
        return "/Connect";
      }
      default: {
        return `/${pathname}`;
      }
    }
  };
  return (
    <div className={classes.root}>
      {!show && (
        <AppBar
          position="static"
          color="outline"
          className={classes.customAppBar}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
              >
                <img src={Logo} alt="logo" />
              </Typography>

              <div
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
              >
                <img
                  src={Logo}
                  className={classes.logo}
                  alt="logo"
                  onClick={() => {
                    history.push("/");
                  }}
                />
              </div>
              <div className={classes.partner}>
                <Typography className={classes.title} variant="body">
                  <i>Member of</i>
                </Typography>
                <img src={require("../../assets/partner.png")} alt="partner" />
              </div>
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <div className={classes.navBar}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: { xs: "block", md: "none" },
                    }}
                  >
                    {pages.map((page) => (
                      <MenuItem
                        key={page}
                        onClick={() => {
                          handleCloseNavMenu();
                          const url =
                            page === "Contact Us" ? "/connect" : `/${page}`;
                          history.push(url);
                        }}
                      >
                        <Typography textAlign="center">{page}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </div>
              </Box>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <div className={classes.navBar}>
                  {pages.map((page) => (
                    <NavLink
                      to={setPath(page)}
                      exact
                      activeClassName="active"
                      className="btn-nav"
                    >
                      {page}
                    </NavLink>
                  ))}
                </div>
              </Box>
            </Toolbar>
          </Container>
          {/* <div className={classes.partnerMobile}>
            <Typography className={classes.title} variant="body">
              <i>Member of</i>
            </Typography>
            <img src={require("../../assets/partner.png")} alt="partner" />
          </div> */}
        </AppBar>
      )}
    </div>
  );
}

export default Header;
