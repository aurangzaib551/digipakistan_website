import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/CloseRounded";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import { useHistory, useLocation } from "react-router-dom";

const Message = ({ firstLoad }) => {
  const [msg, setMsg] = useState(
    window.sessionStorage.getItem("Msg") ? false : true
  );

  if (msg === false) {
    window.sessionStorage.setItem("Msg", true);
  }

  const msgOnLoad = window.sessionStorage.getItem("Msg on load");

  // Object Destructuring
  const { push } = useHistory();
  const { pathname } = useLocation();

  return (
    <>
      {msg && pathname === "/" && msgOnLoad === null && (
        <>
          <div
            className={
              firstLoad
                ? "message d-flex animate__animated animate__fadeIn animate__slow justify-content-center align-items-center"
                : "message d-flex justify-content-center align-items-center"
            }
          >
            <div className="content p-3 py-4 rounded-">
              <h3 className="text-center fw-bold">
                DigiPAKISTAN <br /> National Skills Development Initiative
              </h3>
              {/* <h4 className="fw-normal text-center">
                <span className="fw-bold">Registration Open.</span> Last Date to
                apply <span className="fw-bold">15-Mar-2021.</span> For queries
                contact <span className="fw-bold">DigiPAKISTAN helpline:</span>{" "}
                042-35974881 / 042-35974882
              </h4> */}

              <h4 className="fw-normal text-center">
                Registerations are closed. Check your status by clicking log in
                button.
              </h4>
              <IconButton
                onClick={() =>
                  setTimeout(() => {
                    setMsg(false);
                    window.sessionStorage.setItem("Msg on load", 1);
                  }, 400)
                }
                className="close outline"
              >
                <CloseIcon className="close-icon" />
              </IconButton>
              <div className="d-flex justify-content-center mt-3">
                <Button
                  variant="contained"
                  className="custom-button"
                  onClick={() =>
                    setTimeout(() => {
                      push("/apply-now");
                      setMsg(false);
                      window.sessionStorage.setItem("Msg on load", 1);
                    }, 400)
                  }
                >
                  Log In
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Message;
