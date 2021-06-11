import React from "react";
import Button from "@material-ui/core/Button";

const Team = () => {
  return (
    <>
      <div className="container-fluid bg-img mt pt5 pb-5">
        <div className="container  pt5 pb-5 d-flex align-items-center text-white">
          <h1 className="mt-5 mb-5 pt-5 pb-5 ser-head">
            MEET OUR <span>TEAM</span>
          </h1>
        </div>
      </div>
      <div className="container pt-5 pb-5">
        <h1 className="text-center cards-head pb-5">Team</h1>
        <div className="row me-0">
          <div className="col-md-6 col-lg-4 p-3">
            <div className="card pt-3" style={{ width: "100%" }}>
              <div className="d-flex justify-content-center">
                <img
                  src="https://i.ibb.co/QdYNqz7/Male-Model-Businessman-Suit.jpg"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <div className="title-parent pt-3 pb-1 mb-3 ">
                  <h3 className="card-title card-title-name text-center">
                    Kamran Ahmad
                  </h3>
                  <h6 className="card-title text-center">Autocad Trainer</h6>
                </div>
                <p className="card-text text-center">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="d-flex justify-content-center">
                  <Button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#first"
                    className="custom-button"
                    variant="contained"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>

            {/* Modal */}
            <div
              className="modal fade mt"
              id="first"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="fw-bold modal-title" id="exampleModalLabel">
                      Modal title
                    </h5>
                  </div>
                  <div className="modal-body">...</div>
                  <div className="modal-footer">
                    <Button
                      type="button"
                      data-bs-dismiss="modal"
                      className="custom-button"
                      variant="contained"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
