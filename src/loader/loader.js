import React from "react";
import FadeLoader from "react-spinners/FadeLoader";

const Loader = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <FadeLoader
        height="40px"
        width="13px"
        radius="5px"
        margin="22px"
        color="#02a39b"
      />
    </div>
  );
};

export default Loader;
