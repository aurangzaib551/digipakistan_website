import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Label from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Input from "@material-ui/core/TextField";
import Alert from "@material-ui/lab/Alert";

const Education = ({ handleQualification, formData, handleChange, errors }) => {
  return (
    <>
      <div className="heading mt-3">
        <h4 className="fw-bold mb-0">Education</h4>
      </div>
      <FormControl fullWidth variant="standard" className="mt-3">
        <Label htmlFor="qualification">Qualification *</Label>
        <Select
          value={formData.qualification}
          onChange={handleQualification}
          id="qualification"
          name="qualification"
        >
          <MenuItem value="Matric">Matric</MenuItem>
          <MenuItem value="Intermediate">Intermediate</MenuItem>
          <MenuItem value="O/A Levels">O/A Levels</MenuItem>
          <MenuItem value="Undergraduate">Undergraduate</MenuItem>
          <MenuItem value="Graduate">Graduate</MenuItem>
          <MenuItem value="Post Graduate">Post Graduate</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </Select>
      </FormControl>

      {errors.qualification && (
        <Alert severity="error" variant="filled">
          {errors.qualification}
        </Alert>
      )}

      {formData.qualification === "Matric" && (
        <FormControl fullWidth variant="standard" className="mt-3">
          <Label htmlFor="education">Education *</Label>
          <Select
            id="education"
            value={formData.education}
            name="education"
            onChange={handleChange}
          >
            <MenuItem value="Science">Science</MenuItem>
            <MenuItem value="Arts">Arts</MenuItem>
          </Select>
        </FormControl>
      )}

      {formData.qualification === "Intermediate" && (
        <FormControl fullWidth variant="standard" className="mt-3">
          <Label htmlFor="education">Education *</Label>
          <Select
            id="education"
            value={formData.education}
            name="education"
            onChange={handleChange}
          >
            <MenuItem value="F.Sc (Pre-Engineering)">
              F.Sc (Pre-Engineering)
            </MenuItem>
            <MenuItem value="F.Sc (Pre-Medical)">F.Sc (Pre-Medical)</MenuItem>
            <MenuItem value="ICS">ICS</MenuItem>
            <MenuItem value="I.COM">I.COM</MenuItem>
            <MenuItem value="F.A">F.A</MenuItem>
            <MenuItem value="F.A General Science">F.A General Science</MenuItem>
          </Select>
        </FormControl>
      )}

      {(formData.qualification === "Undergraduate" ||
        formData.qualification === "Graduate" ||
        formData.qualification === "Post Graduate") && (
        <FormControl fullWidth variant="standard" className="mt-3">
          <Label htmlFor="education">Education *</Label>
          <Select
            id="education"
            value={formData.education}
            name="education"
            onChange={handleChange}
          >
            <MenuItem value="Computer Studies">Computer Studies</MenuItem>
            <MenuItem value="Accounting &amp; Finance">
              Accounting &amp; Finance
            </MenuItem>
            <MenuItem value="Medical">Medical</MenuItem>
            <MenuItem value="Business &amp; Management">
              Business &amp; Management
            </MenuItem>
            <MenuItem value="Humanities">Humanities</MenuItem>
            <MenuItem value="Arts &amp; Design">Arts &amp; Design</MenuItem>
            <MenuItem value="Law">Law</MenuItem>
            <MenuItem value="Medical Studies">Medical Studies</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
        </FormControl>
      )}

      {formData.qualification === "Other" && (
        <Input
          value={formData.education}
          name="education"
          fullWidth
          className="mt-3"
          variant="standard"
          onChange={handleChange}
          label="Education *"
        />
      )}

      {errors.education && (
        <Alert severity="error" variant="filled">
          {errors.education}
        </Alert>
      )}

      <Input
        value={formData.instituteName}
        name="instituteName"
        fullWidth
        className="mt-3"
        variant="standard"
        onChange={handleChange}
        label="Institute Name *"
      />

      {errors.instituteName && (
        <Alert severity="error" variant="filled">
          {errors.instituteName}
        </Alert>
      )}
    </>
  );
};

export default Education;
