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
import { useLocation } from "react-router-dom";

const Nav = () => {
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

  // Object Destructuring
  const { pathname } = useLocation();

  if (pathname) {
    $(".menu-laptop").removeClass("open-nav");
  }
  return (
    <>
      <AppBar position="fixed" className="bg-white custom-navbar">
        <Toolbar className="d-flex h-100 justify-content-center custom-toolbar justify-content-sm-between align-items-center justify-content-xl-evenly justify-content-xxl-around text-dark">
          {isLaptop && (
            <IconButton onClick={handleOpen} className="outline laptop-menus">
              <MenuIcon />
            </IconButton>
          )}

          {isXSmall ? null : <Logo />}

          {isLaptop ? null : <Menus />}

          <Badge
            badgeContent="Admissions Open"
            color="error"
            className="custom-badge"
          >
            <Button variant="contained" className="custom-button">
              Apply Now
            </Button>
          </Badge>
        </Toolbar>
      </AppBar>
      {isLaptop && <LaptopMenus />}
    </>
  );
};

export default Nav;
