import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Label from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Input from "@material-ui/core/TextField";
import Alert from "@material-ui/lab/Alert";

const Address = ({ handleChange, formData, errors }) => {
  return (
    <>
      <div className="heading mt-3">
        <h4 className="fw-bold mb-0">Address</h4>
      </div>

      <FormControl fullWidth variant="standard" className="mt-3">
        <Label htmlFor="province">Province *</Label>
        <Select
          name="province"
          onChange={handleChange}
          value={formData.province}
        >
          <MenuItem value="Sindh">Sindh</MenuItem>
          <MenuItem value="Punjab">Punjab</MenuItem>
          <MenuItem value="Balochistan">Balochistan</MenuItem>
          <MenuItem value="KPK">KPK</MenuItem>
          <MenuItem value="Azad Jammu &amp; Kashmir">
            Azad Jammu &amp; Kashmir
          </MenuItem>
          <MenuItem value="Islamabad Capital Territory">
            Islamabad Capital Territory
          </MenuItem>
          <MenuItem value="Overseas Pakistani">Overseas Pakistani</MenuItem>
        </Select>
      </FormControl>

      {errors.province && (
        <Alert severity="error" variant="filled">
          {errors.province}
        </Alert>
      )}

      <Input
        name="country"
        onChange={handleChange}
        value={formData.country}
        label="Country *"
        fullWidth
        variant="standard"
        className="mt-3"
      />

      {errors.country && (
        <Alert severity="error" variant="filled">
          {errors.country}
        </Alert>
      )}

      <Input
        name="city"
        onChange={handleChange}
        value={formData.city}
        label="City *"
        fullWidth
        variant="standard"
        className="mt-3"
      />

      {errors.city && (
        <Alert severity="error" variant="filled">
          {errors.city}
        </Alert>
      )}

      <Input
        name="address"
        onChange={handleChange}
        value={formData.address}
        label="Address *"
        fullWidth
        variant="standard"
        className="mt-3"
      />

      {errors.address && (
        <Alert severity="error" variant="filled">
          {errors.address}
        </Alert>
      )}
    </>
  );
};

export default Address;
