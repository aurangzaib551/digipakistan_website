import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/CloseRounded";
import IconButton from "@material-ui/core/IconButton";

const Message = ({ firstLoad }) => {
  const [msg, setMsg] = useState(
    window.sessionStorage.getItem("Msg") ? false : true
  );

  if (msg === false) {
    window.sessionStorage.setItem("Msg", true);
  }

  return (
    <>
      {msg && (
        // <div className="d-flex justify-content-center">
        //   <div
        //     className={
        //       firstLoad
        //         ? "message rounded animate__animated animate__fadeInDown animate__slow"
        //         : "message rounded"
        //     }
        //   >
        //     <IconButton
        //       onClick={() =>
        //         setTimeout(() => {
        //           setMsg(false);
        //         }, 400)
        //       }
        //       className="close outline"
        //     >
        //       <CloseIcon className="close-icon" />
        //     </IconButton>
        //   </div>
        //   <p className="mb-0 txt txt p-3 fw-bold text-center">
        //     Registration Open. Last Date to apply 05-Mar-2021. For queries
        //     contact DigiPAKISTAN helpline: 042-35974881 / 042-35974882
        //   </p>
        // </div>
        <>
          <div className="d-flex justify-content-center">
            <div
              className={
                firstLoad
                  ? "bar rounded animate__animated animate__fadeInDown animate__slow"
                  : "bar rounded"
              }
            >
              <p
                className={
                  firstLoad
                    ? "onTop fw-bold mb-0 p-3 text-center rounded animate__animated animate__fadeInDown animate__slow"
                    : "onTop fw-bold mb-0 p-3 text-center rounded"
                }
              >
                Registration Open. Last Date to apply 05-Mar-2021. For queries
                contact DigiPAKISTAN helpline: 042-35974881 / 042-35974882
              </p>
              <IconButton
                onClick={() =>
                  setTimeout(() => {
                    setMsg(false);
                  }, 400)
                }
                className="close outline"
              >
                <CloseIcon className="close-icon" />
              </IconButton>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Message;
