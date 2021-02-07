import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { useMediaQuery } from "react-responsive";
import Menus from "./menus";
import Logo from "./logo";
import LaptopMenus from "./laptopMenus";
import Button from "@material-ui/core/Button";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/MenuRounded";
import IconButton from "@material-ui/core/IconButton";
import $ from "jquery";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../../store/actions/authActions";

const Nav = ({ firstLoad, signOut, uid }) => {
  // Object Destructuring
  const { push, replace } = useHistory();

  // Media Query
  const isLaptop = useMediaQuery({
    query: "(max-width: 1132px)",
  });

  const isXSmall = useMediaQuery({
    query: "(max-width: 325px)",
  });

  // Open Nav
  const handleOpen = () => {
    setTimeout(() => {
      $(".menu-laptop").addClass("open-nav");
    }, 400);
  };

  // Closing Nav
  const closeNav = () => $(".menu-laptop").removeClass("open-nav");

  // that function is doing routing for us
  const go = (link) => {
    setTimeout(() => {
      push(link);
    }, 400);
  };
  return (
    <>
      <AppBar position="fixed" className="bg-white custom-navbar">
        <Toolbar className="d-flex h-100 justify-content-center custom-toolbar justify-content-sm-between align-items-center justify-content-xl-evenly justify-content-xxl-around text-dark">
          {isLaptop && (
            <IconButton onClick={handleOpen} className="outline laptop-menus">
              <MenuIcon />
            </IconButton>
          )}

          {isXSmall ? null : <Logo uid={uid} />}

          {isLaptop ? null : <Menus firstLoad={firstLoad} />}

          {uid ? (
            <Button
              onClick={() => signOut(replace)}
              variant="contained"
              className="signOut-button"
            >
              Sign Out
            </Button>
          ) : (
            <Badge
              badgeContent="Admissions Open"
              color="error"
              className="custom-badge"
            >
              <Button
                onClick={() => go("/apply-now")}
                variant="contained"
                className="custom-button"
              >
                Apply Now
              </Button>
            </Badge>
          )}
        </Toolbar>
      </AppBar>
      {isLaptop && <LaptopMenus closeNav={closeNav} />}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    uid: state.firebase.auth.uid,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: (push) => dispatch(signOut(push)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
