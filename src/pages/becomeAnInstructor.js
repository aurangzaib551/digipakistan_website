import React from "react";
import Container from "@material-ui/core/Container";
import Input from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Copyright from "../components/common/copyright/copyright";

const BecomeAnInstructor = () => {
  return (
    <>
      <Container className="mt py-4 become-an-instructor">
        <h1 className="text-center mx-3 fw-bold">Become An Instructor</h1>

        <form className="mt-3">
          <Input variant="filled" id="fullName" label="Full Name *" fullWidth />
          <Input
            variant="filled"
            id="emailAddress"
            label="Email Address *"
            className="mt-3"
            fullWidth
          />
          <Input
            variant="filled"
            id="phoneNumber"
            label="Phone Number *"
            fullWidth
            className="mt-3"
          />
          <Input
            variant="filled"
            id="typeOfCourse"
            label="Which type of course / courses you want to teach? *"
            fullWidth
            className="mt-3"
            multiline
            rows={7}
          />
          <Input
            variant="filled"
            id="expertise"
            label="Describe your expertise? *"
            fullWidth
            className="mt-3"
            multiline
            rows={7}
          />
          <Input
            variant="filled"
            id="bio"
            label="Write a short bio? (Optional)"
            fullWidth
            className="mt-3"
            multiline
            rows={7}
          />
          <Input
            variant="filled"
            id="linkedInURL"
            label="LinkedIn URL (Optional)"
            fullWidth
            className="mt-3"
          />
          <Input
            variant="filled"
            id="country"
            label="Country *"
            fullWidth
            className="mt-3"
          />
          <Input
            variant="filled"
            id="city"
            label="City *"
            fullWidth
            className="mt-3"
          />
          <div className="my-3">
            <label htmlFor="file" className="mb-2 fw-bold">
              Upload Your CV
            </label>
            <input type="file" id="file" className="form-control " />
          </div>
          <Button variant="contained" className="custom-button" fullWidth>
            Submit
          </Button>
        </form>
      </Container>
      <Copyright />
    </>
  );
};

export default BecomeAnInstructor;
