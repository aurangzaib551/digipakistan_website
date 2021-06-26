import React from "react";
import Input from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import HelperText from "@material-ui/core/FormHelperText";
import Alert from "@material-ui/lab/Alert";
import InputAdornment from "@material-ui/core/InputAdornment";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PersonalInformation = (props) => {
  // Object Destructuring
  const { formData, handleChange, setFormData } = props;

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

      <Input
        name="fatherName"
        value={formData.fatherName}
        onChange={handleChange}
        label="Father Name *"
        fullWidth
        variant="standard"
        className="mt-3"
      />

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

          <Input
            className="mt-3"
            id="no"
            name="mobileNumber"
            value={formData.mobileNumber.slice(3)}
            onChange={(event) => {
              setFormData({
                ...formData,
                mobileNumber: `+92${event.target.value}`,
                messageNumber: `92${event.target.value}`,
              });
            }}
            label="Phone Number *"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">+92</InputAdornment>
              ),
            }}
            variant="standard"
            placeholder="Phone number"
            aria-describedby="no"
          />
          <HelperText name="no" error>
            (Enter your phone # in the format e.g. 3001234567)
          </HelperText>
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
            </div>
            <div className="col mt-3">
              <PhoneInput
                country={"sa"}
                enableAreaCodes={true}
                enableSearch
                inputStyle={{ width: "100%" }}
                value={formData.overseasMobileNumber}
                onChange={(number) =>
                  setFormData({
                    ...formData,
                    overseasMobileNumber: `+${number}`,
                    messageNumber: number,
                  })
                }
              />
              <HelperText name="countryCode" className="text-nowrap" error>
                (Enter your country code before number)
              </HelperText>
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
    </>
  );
};

export default PersonalInformation;
