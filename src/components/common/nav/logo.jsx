import React from "react";
import { Link } from "react-router-dom";

const LOGO = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img
          src="https://i.ibb.co/LYC7rpt/logoPNG.png"
          alt="DigiPAKISTAN"
          width="90"
        />
      </Link>
    </div>
  );
};

export default LOGO;
