import React from "react";
import Input from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import HelperText from "@material-ui/core/FormHelperText";
import Alert from "@material-ui/lab/Alert";
import mobileCodes from "country-telephone-data";
import { useMediaQuery } from "react-responsive";

const PersonalInformation = (props) => {
  // Object Destructuring
  const { formData, handleChange, errors } = props;

  // Media Query
  const isSmall = useMediaQuery({
    query: "(max-width: 576px)",
  });

  const isXSmall = useMediaQuery({
    query: "(max-width: 369px)",
  });
  return (
    <>
      <div className="heading mt-3">
        <h4 className="fw-bold mb-0">Personal Information</h4>
      </div>
      <Input
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        label="Full Name *"
        fullWidth
        variant="standard"
        className="mt-3"
      />
      {errors.fullName && (
        <Alert severity="error" variant="filled">
          {errors.fullName}
        </Alert>
      )}
      <Input
        name="fatherName"
        value={formData.fatherName}
        onChange={handleChange}
        label="Father Name *"
        fullWidth
        variant="standard"
        className="mt-3"
      />
      {errors.fatherName && (
        <Alert severity="error" variant="filled">
          {errors.fatherName}
        </Alert>
      )}
      <Input
        name="applicant"
        value={formData.applicant}
        onChange={handleChange}
        label="Applicant *"
        fullWidth
        variant="standard"
        className="mt-3"
        select
      >
        <MenuItem value="Local Pakistani">Local Pakistani</MenuItem>
        <MenuItem value="Overseas">Overseas</MenuItem>
      </Input>

      {errors.applicant && (
        <Alert severity="error" variant="filled">
          {errors.applicant}
        </Alert>
      )}

      {formData.applicant === "Local Pakistani" && (
        <>
          <Input
            name="cnic"
            value={formData.cnic}
            onChange={handleChange}
            label="CNIC / Form-B *"
            fullWidth
            variant="standard"
            className="mt-3"
            aria-describedby="cnic"
          />
          <HelperText name="cnic" error>
            (Enter your 13 digits CNIC / Form-B No. without hyphenation)
          </HelperText>
          {errors.cnic && (
            <Alert severity="error" variant="filled">
              {errors.cnic}
            </Alert>
          )}
          <div className="d-flex justify-content-between mt-3 align-items-center h-100">
            <div className="d-flex border-bottom bor side-no border-color mb-1">
              <p className="mb-0 pe-2 pe-sm-0 pb-1">PK</p>
              <p className="mb-0 pe-2 pe-sm-0 pb-1 ms-sm-2">+92</p>
            </div>
            <div className=" w-100">
              <Input
                id="no"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                label="Mobile Number *"
                fullWidth
                variant="standard"
                aria-describedby="no"
              />
              <HelperText name="no" error>
                (If you are Pakistani provide your valid mobile # in the format
                e.g. 3001234567)
              </HelperText>
              {errors.mobileNumber && (
                <Alert severity="error" variant="filled">
                  {errors.mobileNumber}
                </Alert>
              )}
            </div>
          </div>
        </>
      )}

      {formData.applicant === "Overseas" && (
        <>
          <div className="row">
            <div className="col-12">
              <Input
                name="overseasCNIC"
                value={formData.overseasCNIC}
                onChange={handleChange}
                label="CNIC / Form-B *"
                fullWidth
                variant="standard"
                className="mt-3"
                aria-describedby="cnic"
              />
              <HelperText name="cnic" error>
                (Enter your valid CNIC without hyphenation)
              </HelperText>
              {errors.overseasCNIC && (
                <Alert severity="error" variant="filled">
                  {errors.overseasCNIC}
                </Alert>
              )}
            </div>
            <div className="col-4 col-sm-4 col-lg-2 mt-3">
              <Input
                name="countryCode"
                label={isSmall ? "Code *" : "Country Code *"}
                value={formData.countryCode}
                onChange={handleChange}
                fullWidth
                variant="standard"
                aria-describedby="countryCode"
                select
              >
                {mobileCodes.allCountries.map((country, index) => {
                  return (
                    <MenuItem key={index} value={`+${country.dialCode}`}>
                      +{country.dialCode} &nbsp; &nbsp; {country.name}
                    </MenuItem>
                  );
                })}
              </Input>
              {errors.countryCode && (
                <Alert severity="error" variant="filled">
                  {errors.countryCode}
                </Alert>
              )}
            </div>
            <div className="col-8 col-sm-8 col-lg-10 mt-3">
              <Input
                name="overseasMobileNumber"
                label={isXSmall ? "Number *" : "Mobile Number *"}
                value={formData.overseasMobileNumber}
                onChange={handleChange}
                fullWidth
                variant="standard"
                aria-describedby="overseasNo"
              />
              <HelperText name="overseasNo" error>
                (In case of Overseas Pakistani, Enter your country code before
                number. Kindly provide valid contact number)
              </HelperText>
              {errors.overseasMobileNumber && (
                <Alert severity="error" variant="filled">
                  {errors.overseasMobileNumber}
                </Alert>
              )}
            </div>
          </div>
        </>
      )}
      <Input
        name="emailAddress"
        disabled
        value={formData.emailAddress}
        onChange={handleChange}
        label="Email Address *"
        fullWidth
        variant="standard"
        className="mt-3"
      />
      <Input
        name="dob"
        value={formData.dob}
        onChange={handleChange}
        label="Date of Birth *"
        fullWidth
        variant="standard"
        className="mt-3"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
      />
      {errors.dob && (
        <Alert severity="error" variant="filled">
          {errors.dob}
        </Alert>
      )}
      <Input
        name="gender"
        value={formData.gender}
        onChange={handleChange}
        label="Gender *"
        fullWidth
        variant="standard"
        className="mt-3"
        select
      >
        <MenuItem value="Male">Male</MenuItem>
        <MenuItem value="Female">Female</MenuItem>
      </Input>
      {errors.gender && (
        <Alert severity="error" variant="filled">
          {errors.gender}
        </Alert>
      )}
    </>
  );
};

export default PersonalInformation;
