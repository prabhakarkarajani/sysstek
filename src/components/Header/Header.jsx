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
  partner: {
    width: "100px",
    textAlign: "center",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    paddingTop: 40,
    color: "#333",
    "& img": {
      width: "100%",
      height: "100%",
    },
    "& $title": {
      position: "absolute",
    },
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      width: "250px",
    },
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      width: "250px",
    },
  },
  partnerMobile: {
    width: "100%",
    textAlign: "center",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    marginTop: 20,
    paddingTop: 10,
    paddingBottom: 5,
    background: "#d9e8f9",
    color: "#065997",
    "& img": {
      width: "35%",
    },
    "& $title": {
      position: "absolute",
    },
    [theme.breakpoints.down("xs")]: {
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
              {/* <div className={classes.partner}>
                <Typography className={classes.title} variant="body">
                  member of
                </Typography>
                <img src={require("../../assets/partner.png")} alt="partner" />
              </div> */}

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
          <div className={classes.partnerMobile}>
            <Typography className={classes.title} variant="body">
              member of
            </Typography>
            <img src={require("../../assets/partner.png")} alt="partner" />
          </div>
        </AppBar>
      )}
    </div>
  );
}

export default Header;
