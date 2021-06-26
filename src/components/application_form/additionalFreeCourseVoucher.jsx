import React from "react";
import Input from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import HelperText from "@material-ui/core/FormHelperText";
import Alert from "@material-ui/lab/Alert";

const AdditionalFreeCourseVoucher = ({ handleChange, formData }) => {
  return (
    <>
      <div className="heading mt-3">
        <h4 className="fw-bold mb-0">Additional Free Course Voucher</h4>
      </div>
      <p className="small mb-0 mt-2 fw-bold">
        (Provide us a valid reference code if you have any)
      </p>

      <Input
        name="referenceCode"
        onChange={handleChange}
        value={formData.referenceCode}
        label="Reference Code (Optional)"
        fullWidth
        variant="standard"
        className="mt-3"
        aria-describedby="referCode"
      />
      <HelperText id="referCode" error className="fw-bold">
        Note: Student who will provide us a valid refer code / reference code,
        will be able to get free additional freelancing course at the end of the
        program without any registeration. In case you don't have reference
        code, Please left this field empty.
      </HelperText>

      <Input
        name="knowAboutUs"
        onChange={handleChange}
        value={formData.knowAboutUs}
        label="How you get to know about DigiPAKISTAN initiative *"
        fullWidth
        variant="standard"
        className="mt-3"
        select
      >
        <MenuItem value="Youtube">Youtube</MenuItem>
        <MenuItem value="Facebook">Facebook</MenuItem>
        <MenuItem value="Twitter">Twitter</MenuItem>
        <MenuItem value="Instagram">Instagram</MenuItem>
        <MenuItem value="Google">Google</MenuItem>
        <MenuItem value="Tiktok">Tiktok</MenuItem>
        <MenuItem value="LinkedIn">LinkedIn</MenuItem>
        <MenuItem value="Friends">Friends</MenuItem>
        <MenuItem value="Newspaper">Newspaper</MenuItem>
        <MenuItem value="Other">Other</MenuItem>
      </Input>
    </>
  );
};

export default AdditionalFreeCourseVoucher;
