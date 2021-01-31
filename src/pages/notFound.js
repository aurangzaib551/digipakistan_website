import React from "react";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

const NotFound = () => {
  //   Object Destructuring
  const { push } = useHistory();

  return (
    <>
      <div
        className="d-flex flex-column align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <h1 className="display-4 text-center">404 &middot; Page not found</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <Button
          onClick={() =>
            setTimeout(() => {
              push("/");
            }, 400)
          }
          variant="contained"
          className="custom-button"
        >
          Go to Home Page
        </Button>
      </div>
    </>
  );
};

export default NotFound;
