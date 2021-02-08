import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Label from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Alert from "@material-ui/lab/Alert";

const AvailablePrograms = ({
  formData,
  handleChange,
  handleFirstCourseName,
  handleChangeSecond,
  handleSecondCourseName,
  handleChangeThird,
  handleThirdCourseName,
  errors,
}) => {
  return (
    <>
      <div className="heading mt-3">
        <h4 className="fw-bold mb-0">Available Programs</h4>
      </div>
      <FormControl fullWidth variant="standard" className="mt-3">
        <Label htmlFor="firstCourse">First Course *</Label>
        <Select
          id="firstCourse"
          name="firstCourseTitle"
          value={formData.firstCourseTitle}
          onChange={handleChange}
        >
          <MenuItem value="Fast Track Technical Program">
            Fast Track Technical Program
          </MenuItem>
          <MenuItem value="Fast Track Non-Technical Program">
            Fast Track Non-Technical Program
          </MenuItem>
          <MenuItem value="Associate Certification Program">
            Associate Certification Program
          </MenuItem>
        </Select>
      </FormControl>

      {errors.firstCourseTitle && (
        <Alert severity="error" variant="filled">
          {errors.firstCourseTitle}
        </Alert>
      )}

      {formData.firstCourseTitle === "Fast Track Technical Program" && (
        <FormControl fullWidth className="mt-3" variant="standard">
          <Label id="firstCourseCategory">First Course Category</Label>
          <Select
            value={formData.firstCourseName}
            id="firstCourseCategory"
            name="firstCourseName"
            onChange={handleFirstCourseName}
          >
            <MenuItem value="CompTIA It Fundamentals">
              CompTIA It Fundamentals
            </MenuItem>
            <MenuItem value="Microsoft Front End Development">
              Microsoft Front End Development
            </MenuItem>
            <MenuItem value="ASP.NET Web Applications">
              ASP.NET Web Applications
            </MenuItem>
            <MenuItem value="PHP Laravel">PHP Laravel</MenuItem>
            <MenuItem value="MERN Stack">MERN Stack</MenuItem>
            <MenuItem value="SQL Server Specialist">
              SQL Server Specialist
            </MenuItem>
            <MenuItem value="Oracle Database Administrator (OCP : 12C DBA)">
              Oracle Database Administrator (OCP : 12C DBA)
            </MenuItem>
            <MenuItem value="Android Apps Development">
              Android Apps Development
            </MenuItem>
            <MenuItem value="Kotlin Mobile Apps Development">
              Kotlin Mobile Apps Development
            </MenuItem>
            <MenuItem value="IOS Apps Development">
              IOS Apps Development
            </MenuItem>
            <MenuItem value="Xamarin Mobile Apps Development">
              Xamarin Mobile Apps Development
            </MenuItem>
            <MenuItem value="React Native Web &amp; Apps Development">
              React Native Web &amp; Apps Development
            </MenuItem>
            <MenuItem value="Game Development">Game Development</MenuItem>
            <MenuItem value="Cisco CCNA Networking">
              Cisco CCNA Networking
            </MenuItem>
            <MenuItem value="CompTIA Security + (SYO - 601)">
              CompTIA Security + (SYO - 601)
            </MenuItem>
            <MenuItem value="Certified Ethical Hacking">
              Certified Ethical Hacking
            </MenuItem>
            <MenuItem value="Certified Hacking Forensic Investigator">
              Certified Hacking Forensic Investigator
            </MenuItem>
            <MenuItem value="Penetration Testing Security Analyst">
              Penetration Testing Security Analyst
            </MenuItem>
            <MenuItem value="Certified Information System Auditor">
              Certified Information System Auditor
            </MenuItem>
            <MenuItem value="Certified Information Security Manager">
              Certified Information Security Manager
            </MenuItem>
            <MenuItem value="AWS Practitioner">AWS Practitioner</MenuItem>
            <MenuItem value="AWS Solution Architect">
              AWS Solution Architect
            </MenuItem>
            <MenuItem value="AWS SysOps Administrator">
              AWS SysOps Administrator
            </MenuItem>
            <MenuItem value="AWS Developer Associate">
              AWS Developer Associate
            </MenuItem>
            <MenuItem value="Microsoft Azure Cloud Fundamentals">
              Microsoft Azure Cloud Fundamentals
            </MenuItem>
            <MenuItem value="Microsoft Cloud Administrator 103 - 104">
              Microsoft Cloud Administrator 103 - 104
            </MenuItem>
            <MenuItem value="Google Cloud Engineer">
              Google Cloud Engineer
            </MenuItem>
            <MenuItem value="Python For Everyone">Python for Everyone</MenuItem>
            <MenuItem value="Machine Learning &amp; AI">
              Machine Learning &amp; AI
            </MenuItem>
            <MenuItem value="Big Data &amp; Headoop Ecosystem">
              Big Data &amp; Headoop Ecosystem
            </MenuItem>
          </Select>
        </FormControl>
      )}

      {formData.firstCourseTitle === "Fast Track Non-Technical Program" && (
        <FormControl fullWidth className="mt-3" variant="standard">
          <Label id="firstCourseCategory">First Course Category</Label>
          <Select
            id="firstCourseCategory"
            name="firstCourseName"
            value={formData.firstCourseName}
            onChange={handleFirstCourseName}
          >
            <MenuItem value="QuickBooks ERP">QuickBooks ERP</MenuItem>
            <MenuItem value="SAP ERP">SAP ERP</MenuItem>
            <MenuItem value="Project Management Professional (PMP)">
              Project Management Professional (PMP)
            </MenuItem>
            <MenuItem value="Amazon FBA Business">Amazon FBA Business</MenuItem>
            <MenuItem value="Search Engine Optimization (SEO)">
              Search Engine Optimization (SEO)
            </MenuItem>
            <MenuItem value="Digital Marketing">Digital Marketing</MenuItem>
            <MenuItem value="Social Media Marketing">
              Social Media Marketing
            </MenuItem>
            <MenuItem value="Graphics Design">Graphic Design</MenuItem>
            <MenuItem value="UI / UX Design">UI / UX Design</MenuItem>
            <MenuItem value="Interior Design">Interior Design</MenuItem>
            <MenuItem value="3D Maya Max Animation">
              3D Maya Max Animation
            </MenuItem>
            <MenuItem value="Video Editing">Video Editing</MenuItem>
            <MenuItem value="AutoCad">AutoCad</MenuItem>
            <MenuItem value="Microsoft Office 365">
              Microsoft Office 365
            </MenuItem>
            <MenuItem value="Enterpreneurship">Enterpreneurship</MenuItem>
          </Select>
        </FormControl>
      )}

      {formData.firstCourseTitle === "Associate Certification Program" && (
        <FormControl fullWidth className="mt-3" variant="standard">
          <Label htmlFor="firstCourseCategory">First Course Category</Label>
          <Select
            id="firstCourseCategory"
            name="firstCourseName"
            value={formData.firstCourseName}
            onChange={handleFirstCourseName}
          >
            <MenuItem value="Digital Forensic Cyber Security">
              Digital Forensic Cyber Security
            </MenuItem>
            <MenuItem value="Penetration Testing Cyber Security">
              Penetration Testing Cyber Security
            </MenuItem>
            <MenuItem value="CISSP Cyber Security Professional">
              CISSP Cyber Security Professional
            </MenuItem>
            <MenuItem value="Artificial Intelligence">
              Artificial Intelligence
            </MenuItem>
            <MenuItem value="AWS Cloud Computing">AWS Cloud Computing</MenuItem>
            <MenuItem value="Internet of Things (IoT)">
              Internet of Things (IoT)
            </MenuItem>
            <MenuItem value="BlockChain Technology">
              BlockChain Technology
            </MenuItem>
            <MenuItem value="Full Stack Web Development">
              Full Stack Web Development (MCSA)
            </MenuItem>
          </Select>
        </FormControl>
      )}

      {errors.firstCourseName && (
        <Alert severity="error" variant="filled">
          {errors.firstCourseName}
        </Alert>
      )}

      {/* Second Course */}
      <FormControl fullWidth variant="standard" className="mt-3">
        <Label htmlFor="secondCourse">Second Course (Optional)</Label>
        <Select
          id="secondCourse"
          name="secondCourseTitle"
          value={formData.secondCourseTitle}
          onChange={handleChangeSecond}
        >
          <MenuItem value="">Select</MenuItem>
          <MenuItem value="Fast Track Technical Program">
            Fast Track Technical Program
          </MenuItem>
          <MenuItem value="Fast Track Non-Technical Program">
            Fast Track Non-Technical Program
          </MenuItem>
          <MenuItem value="Associate Certification Program">
            Associate Certification Program
          </MenuItem>
        </Select>
      </FormControl>

      {formData.secondCourseTitle === "Fast Track Technical Program" && (
        <FormControl fullWidth className="mt-3" variant="standard">
          <Label id="secondCourseCategory">Second Course Category</Label>
          <Select
            value={formData.secondCourseName}
            id="secondCourseCategory"
            name="secondCourseName"
            onChange={handleSecondCourseName}
          >
            <MenuItem value="CompTIA It Fundamentals">
              CompTIA It Fundamentals
            </MenuItem>
            <MenuItem value="Microsoft Front End Development">
              Microsoft Front End Development
            </MenuItem>
            <MenuItem value="ASP.NET Web Applications">
              ASP.NET Web Applications
            </MenuItem>
            <MenuItem value="PHP Laravel">PHP Laravel</MenuItem>
            <MenuItem value="MERN Stack">MERN Stack</MenuItem>
            <MenuItem value="SQL Server Specialist">
              SQL Server Specialist
            </MenuItem>
            <MenuItem value="Oracle Database Administrator (OCP : 12C DBA)">
              Oracle Database Administrator (OCP : 12C DBA)
            </MenuItem>
            <MenuItem value="Android Apps Development">
              Android Apps Development
            </MenuItem>
            <MenuItem value="Kotlin Mobile Apps Development">
              Kotlin Mobile Apps Development
            </MenuItem>
            <MenuItem value="IOS Apps Development">
              IOS Apps Development
            </MenuItem>
            <MenuItem value="Xamarin Mobile Apps Development">
              Xamarin Mobile Apps Development
            </MenuItem>
            <MenuItem value="React Native Web &amp; Apps Development">
              React Native Web &amp; Apps Development
            </MenuItem>
            <MenuItem value="Game Development">Game Development</MenuItem>
            <MenuItem value="Cisco CCNA Networking">
              Cisco CCNA Networking
            </MenuItem>
            <MenuItem value="CompTIA Security + (SYO - 601)">
              CompTIA Security + (SYO - 601)
            </MenuItem>
            <MenuItem value="Certified Ethical Hacking">
              Certified Ethical Hacking
            </MenuItem>
            <MenuItem value="Certified Hacking Forensic Investigator">
              Certified Hacking Forensic Investigator
            </MenuItem>
            <MenuItem value="Penetration Testing Security Analyst">
              Penetration Testing Security Analyst
            </MenuItem>
            <MenuItem value="Certified Information System Auditor">
              Certified Information System Auditor
            </MenuItem>
            <MenuItem value="Certified Information Security Manager">
              Certified Information Security Manager
            </MenuItem>
            <MenuItem value="AWS Practitioner">AWS Practitioner</MenuItem>
            <MenuItem value="AWS Solution Architect">
              AWS Solution Architect
            </MenuItem>
            <MenuItem value="AWS SysOps Administrator">
              AWS SysOps Administrator
            </MenuItem>
            <MenuItem value="AWS Developer Associate">
              AWS Developer Associate
            </MenuItem>
            <MenuItem value="Microsoft Azure Cloud Fundamentals">
              Microsoft Azure Cloud Fundamentals
            </MenuItem>
            <MenuItem value="Microsoft Cloud Administrator 103 - 104">
              Microsoft Cloud Administrator 103 - 104
            </MenuItem>
            <MenuItem value="Google Cloud Engineer">
              Google Cloud Engineer
            </MenuItem>
            <MenuItem value="Python For Everyone">Python for Everyone</MenuItem>
            <MenuItem value="Machine Learning &amp; AI">
              Machine Learning &amp; AI
            </MenuItem>
            <MenuItem value="Big Data &amp; Headoop Ecosystem">
              Big Data &amp; Headoop Ecosystem
            </MenuItem>
          </Select>
        </FormControl>
      )}

      {formData.secondCourseTitle === "Fast Track Non-Technical Program" && (
        <FormControl fullWidth className="mt-3" variant="standard">
          <Label id="secondCourseCategory">Second Course Category</Label>
          <Select
            value={formData.secondCourseName}
            id="secondCourseCategory"
            name="secondCourseName"
            onChange={handleSecondCourseName}
          >
            <MenuItem value="QuickBooks ERP">QuickBooks ERP</MenuItem>
            <MenuItem value="SAP ERP">SAP ERP</MenuItem>
            <MenuItem value="Project Management Professional (PMP)">
              Project Management Professional (PMP)
            </MenuItem>
            <MenuItem value="Amazon FBA Business">Amazon FBA Business</MenuItem>
            <MenuItem value="Search Engine Optimization (SEO)">
              Search Engine Optimization (SEO)
            </MenuItem>
            <MenuItem value="Digital Marketing">Digital Marketing</MenuItem>
            <MenuItem value="Social Media Marketing">
              Social Media Marketing
            </MenuItem>
            <MenuItem value="Graphics Design">Graphic Design</MenuItem>
            <MenuItem value="UI / UX Design">UI / UX Design</MenuItem>
            <MenuItem value="Interior Design">Interior Design</MenuItem>
            <MenuItem value="3D Maya Max Animation">
              3D Maya Max Animation
            </MenuItem>
            <MenuItem value="Video Editing">Video Editing</MenuItem>
            <MenuItem value="AutoCad">AutoCad</MenuItem>
            <MenuItem value="Microsoft Office 365">
              Microsoft Office 365
            </MenuItem>
            <MenuItem value="Enterpreneurship">Enterpreneurship</MenuItem>
          </Select>
        </FormControl>
      )}

      {formData.secondCourseTitle === "Associate Certification Program" && (
        <FormControl fullWidth className="mt-3" variant="standard">
          <Label id="secondCourseCategory">Second Course Category</Label>
          <Select
            value={formData.secondCourseName}
            id="secondCourseCategory"
            name="secondCourseName"
            onChange={handleSecondCourseName}
          >
            <MenuItem value="Digital Forensic Cyber Security">
              Digital Forensic Cyber Security
            </MenuItem>
            <MenuItem value="Penetration Testing Cyber Security">
              Penetration Testing Cyber Security
            </MenuItem>
            <MenuItem value="CISSP Cyber Security Professional">
              CISSP Cyber Security Professional
            </MenuItem>
            <MenuItem value="Artificial Intelligence">
              Artificial Intelligence
            </MenuItem>
            <MenuItem value="AWS Cloud Computing">AWS Cloud Computing</MenuItem>
            <MenuItem value="Internet of Things (IoT)">
              Internet of Things (IoT)
            </MenuItem>
            <MenuItem value="BlockChain Technology">
              BlockChain Technology
            </MenuItem>
            <MenuItem value="Full Stack Web Development">
              Full Stack Web Development (MCSA)
            </MenuItem>
          </Select>
        </FormControl>
      )}

      {errors.secondCourseName && (
        <Alert severity="error" variant="filled">
          {errors.secondCourseName}
        </Alert>
      )}

      {/* third Course */}
      <FormControl fullWidth variant="standard" className="mt-3">
        <Label htmlFor="thirdCourse">Third Course (Optional)</Label>
        <Select
          id="thirdCourse"
          name="thirdCourseTitle"
          value={formData.thirdCourseTitle}
          onChange={handleChangeThird}
        >
          <MenuItem value="">Select</MenuItem>
          <MenuItem value="Fast Track Technical Program">
            Fast Track Technical Program
          </MenuItem>
          <MenuItem value="Fast Track Non-Technical Program">
            Fast Track Non-Technical Program
          </MenuItem>
          <MenuItem value="Associate Certification Program">
            Associate Certification Program
          </MenuItem>
        </Select>
      </FormControl>

      {formData.thirdCourseTitle === "Fast Track Technical Program" && (
        <FormControl fullWidth className="mt-3" variant="standard">
          <Label id="thirdCourseCategory">Third Course Category</Label>
          <Select
            value={formData.thirdCourseName}
            id="thirdCourseCategory"
            name="thirdCourseName"
            onChange={handleThirdCourseName}
          >
            <MenuItem value="CompTIA It Fundamentals">
              CompTIA It Fundamentals
            </MenuItem>
            <MenuItem value="Microsoft Front End Development">
              Microsoft Front End Development
            </MenuItem>
            <MenuItem value="ASP.NET Web Applications">
              ASP.NET Web Applications
            </MenuItem>
            <MenuItem value="PHP Laravel">PHP Laravel</MenuItem>
            <MenuItem value="MERN Stack">MERN Stack</MenuItem>
            <MenuItem value="SQL Server Specialist">
              SQL Server Specialist
            </MenuItem>
            <MenuItem value="Oracle Database Administrator (OCP : 12C DBA)">
              Oracle Database Administrator (OCP : 12C DBA)
            </MenuItem>
            <MenuItem value="Android Apps Development">
              Android Apps Development
            </MenuItem>
            <MenuItem value="Kotlin Mobile Apps Development">
              Kotlin Mobile Apps Development
            </MenuItem>
            <MenuItem value="IOS Apps Development">
              IOS Apps Development
            </MenuItem>
            <MenuItem value="Xamarin Mobile Apps Development">
              Xamarin Mobile Apps Development
            </MenuItem>
            <MenuItem value="React Native Web &amp; Apps Development">
              React Native Web &amp; Apps Development
            </MenuItem>
            <MenuItem value="Game Development">Game Development</MenuItem>
            <MenuItem value="Cisco CCNA Networking">
              Cisco CCNA Networking
            </MenuItem>
            <MenuItem value="CompTIA Security + (SYO - 601)">
              CompTIA Security + (SYO - 601)
            </MenuItem>
            <MenuItem value="Certified Ethical Hacking">
              Certified Ethical Hacking
            </MenuItem>
            <MenuItem value="Certified Hacking Forensic Investigator">
              Certified Hacking Forensic Investigator
            </MenuItem>
            <MenuItem value="Penetration Testing Security Analyst">
              Penetration Testing Security Analyst
            </MenuItem>
            <MenuItem value="Certified Information System Auditor">
              Certified Information System Auditor
            </MenuItem>
            <MenuItem value="Certified Information Security Manager">
              Certified Information Security Manager
            </MenuItem>
            <MenuItem value="AWS Practitioner">AWS Practitioner</MenuItem>
            <MenuItem value="AWS Solution Architect">
              AWS Solution Architect
            </MenuItem>
            <MenuItem value="AWS SysOps Administrator">
              AWS SysOps Administrator
            </MenuItem>
            <MenuItem value="AWS Developer Associate">
              AWS Developer Associate
            </MenuItem>
            <MenuItem value="Microsoft Azure Cloud Fundamentals">
              Microsoft Azure Cloud Fundamentals
            </MenuItem>
            <MenuItem value="Microsoft Cloud Administrator 103 - 104">
              Microsoft Cloud Administrator 103 - 104
            </MenuItem>
            <MenuItem value="Google Cloud Engineer">
              Google Cloud Engineer
            </MenuItem>
            <MenuItem value="Python For Everyone">Python for Everyone</MenuItem>
            <MenuItem value="Machine Learning &amp; AI">
              Machine Learning &amp; AI
            </MenuItem>
            <MenuItem value="Big Data &amp; Headoop Ecosystem">
              Big Data &amp; Headoop Ecosystem
            </MenuItem>
          </Select>
        </FormControl>
      )}

      {formData.thirdCourseTitle === "Fast Track Non-Technical Program" && (
        <FormControl fullWidth className="mt-3" variant="standard">
          <Label id="thirdCourseCategory">Third Course Category</Label>
          <Select
            value={formData.thirdCourseName}
            id="thirdCourseCategory"
            name="thirdCourseName"
            onChange={handleThirdCourseName}
          >
            <MenuItem value="QuickBooks ERP">QuickBooks ERP</MenuItem>
            <MenuItem value="SAP ERP">SAP ERP</MenuItem>
            <MenuItem value="Project Management Professional (PMP)">
              Project Management Professional (PMP)
            </MenuItem>
            <MenuItem value="Amazon FBA Business">Amazon FBA Business</MenuItem>
            <MenuItem value="Search Engine Optimization (SEO)">
              Search Engine Optimization (SEO)
            </MenuItem>
            <MenuItem value="Digital Marketing">Digital Marketing</MenuItem>
            <MenuItem value="Social Media Marketing">
              Social Media Marketing
            </MenuItem>
            <MenuItem value="Graphics Design">Graphic Design</MenuItem>
            <MenuItem value="UI / UX Design">UI / UX Design</MenuItem>
            <MenuItem value="Interior Design">Interior Design</MenuItem>
            <MenuItem value="3D Maya Max Animation">
              3D Maya Max Animation
            </MenuItem>
            <MenuItem value="Video Editing">Video Editing</MenuItem>
            <MenuItem value="AutoCad">AutoCad</MenuItem>
            <MenuItem value="Microsoft Office 365">
              Microsoft Office 365
            </MenuItem>
            <MenuItem value="Enterpreneurship">Enterpreneurship</MenuItem>
          </Select>
        </FormControl>
      )}

      {formData.thirdCourseTitle === "Associate Certification Program" && (
        <FormControl fullWidth className="mt-3" variant="standard">
          <Label id="thirdCourseCategory">Third Course Category</Label>
          <Select
            value={formData.thirdCourseName}
            id="thirdCourseCategory"
            name="thirdCourseName"
            onChange={handleThirdCourseName}
          >
            <MenuItem value="Digital Forensic Cyber Security">
              Digital Forensic Cyber Security
            </MenuItem>
            <MenuItem value="Penetration Testing Cyber Security">
              Penetration Testing Cyber Security
            </MenuItem>
            <MenuItem value="CISSP Cyber Security Professional">
              CISSP Cyber Security Professional
            </MenuItem>
            <MenuItem value="Artificial Intelligence">
              Artificial Intelligence
            </MenuItem>
            <MenuItem value="AWS Cloud Computing">AWS Cloud Computing</MenuItem>
            <MenuItem value="Internet of Things (IoT)">
              Internet of Things (IoT)
            </MenuItem>
            <MenuItem value="BlockChain Technology">
              BlockChain Technology
            </MenuItem>
            <MenuItem value="Full Stack Web Development">
              Full Stack Web Development (MCSA)
            </MenuItem>
          </Select>
        </FormControl>
      )}

      {errors.thirdCourseName && (
        <Alert severity="error" variant="filled">
          {errors.thirdCourseName}
        </Alert>
      )}
    </>
  );
};

export default AvailablePrograms;
