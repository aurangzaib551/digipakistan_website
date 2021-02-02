import React, { useEffect } from "react";
import $ from "jquery";
import { useLocation } from "react-router-dom";

const GoToTop = () => {
  // Object Destructuring
  const { pathname } = useLocation();

  // when new route is open then page goes to top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Setting top btn when scroll goes to 1104px down
  $(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 904) {
      $(".top").addClass("d-flex");
      $(".top").removeClass("d-none");
    } else {
      $(".top").removeClass("d-flex");
      $(".top").addClass("d-none");
    }
  });
  return (
    <span
      onClick={() => window.scrollTo(0, 0)}
      className="top d-none animate__animated animate__fadeIn"
    >
      <i className="fas fa-arrow-up"></i>
    </span>
  );
};

export default GoToTop;
