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
              <h3 className="fw-bold text-center">
                DigiPAKISTAN <br /> National Skills Development Initiative
              </h3>
              <h4 className="fw-light text-center">
                Registration Open. Last Date to apply 05-Mar-2021. For queries
                contact DigiPAKISTAN helpline: 042-35974881 / 042-35974882
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
                  Apply Now
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
