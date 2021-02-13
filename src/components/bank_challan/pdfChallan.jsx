import React from "react";
import { saveAs } from "file-saver";
import {
  Page,
  Text,
  pdf,
  View,
  Image,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";

const PDFChallan = (props) => {
  // Onject Destructuring
  const {
    name,
    challanRollNumber,
    cnicChallan,
    challanNo,
    course,
    lastDate,
    issueDate,
  } = props;

  // PDF
  const MyDoc = () => {
    return pdf(
      <Document
        subject="challan"
        title={`${course.title} Challan`}
        author="DigiPAKISTAN"
        producer="DigiPAKISTAN"
        creator="DigiPAKISTAN"
      >
        <Page size="LEGAL" style={styles.page}>
          <View
            style={{
              flexDirection: "row",
              marginBottom: 3,
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Montserrat Semi",
              }}
            >
              Student Copy{" "}
            </Text>
          </View>
          <View style={styles.section}>
            <View style={styles.one}>
              <Image
                source={{
                  uri: "https://i.ibb.co/MB99rJz/digipakistan-web-banner.png",
                }}
                style={{
                  width: "41px",
                }}
              />
            </View>
            <View style={styles.two}>
              <Text style={{ fontSize: 20 }}>
                Digi
                <Text
                  style={{ fontWeight: "demibold", fontFamily: "Montserrat" }}
                >
                  Pakistan
                </Text>
              </Text>
            </View>
            <View style={styles.three}>
              <View style={styles.feeChallanFor}>
                <Text>Fee Challan For</Text>
              </View>
              <View
                style={{
                  justifyContent: "center",
                  height: "20px",
                  fontSize: 11,
                  paddingLeft: 5,
                }}
              >
                <Text>Course Fee</Text>
              </View>
            </View>
          </View>

          {/* second row */}
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View style={styles.bank}>
              <Text
                style={{
                  padding: 5,
                  fontSize: 11,
                  fontFamily: "Montserrat Semi",
                }}
              >
                Bank:{" "}
              </Text>
              <Text
                style={{
                  fontFamily: "Montserrat light",
                  fontSize: 11,
                  paddingRight: 10,
                }}
              >
                Habib Bank Ltd. (HBL)
              </Text>
            </View>

            <View style={styles.accountNo}>
              <Text
                style={{
                  fontSize: 11,
                  fontFamily: "Montserrat Semi",
                }}
              >
                A/C #{" "}
              </Text>
              <Text style={{ fontSize: 11 }}>24747000465103</Text>
            </View>

            <View
              style={{
                width: "24.9%",
                flexDirection: "row",
                alignItems: "center",
                border: "1pt solid black",
              }}
            >
              <Text
                style={{
                  paddingLeft: 5,
                  fontSize: 11,
                  fontFamily: "Montserrat Semi",
                }}
              >
                Challan #{" "}
              </Text>
              <Text style={{ fontSize: 11, fontFamily: "Montserrat light" }}>
                {challanNo}
              </Text>
            </View>
          </View>

          {/* Third row */}
          <View
            style={{
              flexDirection: "row",
              width: "95.5%",
            }}
          >
            <View
              style={{
                border: "1pt solid black",
                width: "23.1%",
                padding: 5,
                fontSize: 11,
                fontFamily: "Montserrat Semi",
              }}
            >
              <Text>Name</Text>
            </View>
            <View style={styles.courseFee}>
              <Text>{name}</Text>
            </View>
            <View
              style={{
                border: "1pt solid black",
                width: "26.2%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 11,
              }}
            >
              <Text
                style={{
                  fontFamily: "Montserrat Semi",
                }}
              >
                ID #{" "}
              </Text>
              <Text
                style={{
                  fontFamily: "Montserrat light",
                }}
              >
                {cnicChallan}
              </Text>
            </View>
            <View
              style={{
                border: "1pt solid black",
                width: "26.1%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 11, fontFamily: "Montserrat Semi" }}>
                Message Box
              </Text>
            </View>
          </View>

          {/* fourth row */}
          <View
            style={{
              flexDirection: "row",
              width: "95.5%",
            }}
          >
            <View
              style={{
                border: "1pt solid black",
                width: "23.1%",
                padding: 5,
                fontSize: 11,
                fontFamily: "Montserrat Semi",
              }}
            >
              <Text>Course Title</Text>
            </View>
            <View
              style={{
                border: "1pt solid black",
                width: "24.6%",
                justifyContent: "center",
                paddingHorizontal: 5,
                fontFamily: "Montserrat light",
                fontSize: 11,
              }}
            >
              <Text style={{ textAlign: "center", fontSize: 10 }}>
                {course.title}
              </Text>
            </View>
            <View
              style={{
                border: "1pt solid black",
                width: "26.2%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 11,
              }}
            >
              <Text
                style={{
                  fontFamily: "Montserrat Semi",
                }}
              >
                Roll #{" "}
              </Text>
              <Text
                style={{
                  fontFamily: "Montserrat light",
                }}
              >
                {challanRollNumber}
              </Text>
            </View>
            <View
              style={{
                border: "1pt solid black",
                width: "26.1%",
                borderBottom: "none",
                borderTop: "none",
              }}
            ></View>
          </View>

          {/* fifth row */}
          <View
            style={{
              flexDirection: "row",
              width: "95.5%",
            }}
          >
            <View
              style={{
                border: "1pt solid black",
                width: "23.1%",
                padding: 5,
                fontSize: 11,
                fontFamily: "Montserrat Semi",
              }}
            >
              <Text>Course Type</Text>
            </View>
            <View style={styles.courseFee}>
              <Text>{course.type}</Text>
            </View>
            <View
              style={{
                border: "1pt solid black",
                width: "26.2%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 11,
              }}
            >
              <Text
                style={{
                  fontFamily: "Montserrat Semi",
                }}
              >
                Duration{" "}
              </Text>
              <Text
                style={{
                  fontFamily: "Montserrat light",
                }}
              >
                {course.type === "Associate" ? "6 Months" : "3 Months"}
              </Text>
            </View>
            <View
              style={{
                border: "1pt solid black",
                width: "26.1%",
                borderBottom: "none",
                borderTop: "none",
              }}
            ></View>
          </View>

          {/* sixth row */}
          <View
            style={{
              flexDirection: "row",
              width: "95.5%",
            }}
          >
            <View
              style={{
                border: "1pt solid black",
                width: "23.1%",
                padding: 5,
                fontSize: 11,
                fontFamily: "Montserrat Semi",
              }}
            >
              <Text>Issue Date</Text>
            </View>
            <View
              style={{
                border: "1pt solid black",
                width: "24.6%",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "Montserrat Semi",
                fontSize: 11,
              }}
            >
              <Text>Due Date</Text>
            </View>
            <View
              style={{
                border: "1pt solid black",
                width: "26.2%",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 11,
              }}
            >
              <Text
                style={{
                  fontFamily: "Montserrat Semi",
                }}
              >
                Challan Validity
              </Text>
            </View>
            <View
              style={{
                border: "1pt solid black",
                width: "26.1%",
                borderBottom: "none",
                borderTop: "none",
              }}
            ></View>
          </View>

          {/* seven row */}
          <View
            style={{
              flexDirection: "row",
              width: "95.5%",
            }}
          >
            <View style={styles.issueDate}>
              <Text>{issueDate}</Text>
            </View>
            <View
              style={{
                border: "1pt solid black",
                width: "24.6%",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "Montserrat light",
                backgroundColor: "lightgrey",
                fontSize: 11,
              }}
            >
              <Text>{lastDate}</Text>
            </View>
            <View
              style={{
                border: "1pt solid black",
                width: "26.2%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 11,
              }}
            >
              <Text
                style={{
                  fontFamily: "Montserrat light",
                }}
              >
                {lastDate}
              </Text>
            </View>
            <View
              style={{
                border: "1pt solid black",
                width: "26.1%",
                borderBottom: "none",
                borderTop: "none",
              }}
            ></View>
          </View>

          {/* eight row */}
          <View
            style={{
              flexDirection: "row",
              width: "95.5%",
            }}
          >
            <View
              style={{
                border: "1pt solid black",
                width: "23.1%",
                padding: 5,
                fontSize: 11,
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "Montserrat Semi",
              }}
            >
              <Text>Registration Fee</Text>
            </View>
            <View
              style={{
                border: "1pt solid black",
                width: "24.6%",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "Montserrat Semi",
                fontSize: 11,
              }}
            >
              <Text>Course Fee</Text>
            </View>
            <View
              style={{
                border: "1pt solid black",
                width: "26.2%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 11,
              }}
            >
              <Text
                style={{
                  fontFamily: "Montserrat Semi",
                }}
              >
                Current Dues
              </Text>
            </View>
            <View style={styles.arrears}>
              <Text
                style={{
                  fontFamily: "Montserrat Semi",
                }}
              >
                Arrears
              </Text>
            </View>
            <View style={styles.totalTxt}>
              <Text
                style={{
                  fontFamily: "Montserrat Semi",
                }}
              >
                Total
              </Text>
            </View>
          </View>

          {/* nine row */}
          <View
            style={{
              flexDirection: "row",
              width: "95.5%",
            }}
          >
            <View style={styles.registration}>
              <Text>2000</Text>
            </View>
            <View style={styles.courseFee}>
              <Text>0</Text>
            </View>
            <View style={styles.currentDues}>
              <Text
                style={{
                  fontFamily: "Montserrat light",
                }}
              >
                2000
              </Text>
            </View>
            <View style={styles.arrears}>
              <Text
                style={{
                  fontFamily: "Montserrat light",
                }}
              >
                0
              </Text>
            </View>
            <View style={styles.total}>
              <Text
                style={{
                  fontFamily: "Montserrat light",
                }}
              >
                2000
              </Text>
            </View>
          </View>

          <View style={{ marginTop: 5 }}>
            <Text style={styles.para}>
              <Text style={{ fontFamily: "Montserrat Semi" }}>Note:</Text>{" "}
              Students will have to submit registeration fee before the due
              date. This challan form is acceptable at any HBL branch in
              Pakistan.{" "}
            </Text>
            <Text style={styles.para}>
              Admission fee is non-refundable. Any kind of editing in the
              voucher is strictly prohibited.
            </Text>
          </View>

          <View style={{ marginTop: 10, marginBottom: 10 }}>
            <Text>
              -----------------------------------------------------------------------------------------------
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginBottom: 3,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Montserrat Semi",
              }}
            >
              Institute Copy{" "}
            </Text>
          </View>
          <View style={styles.section}>
            <View style={styles.one}>
              <Image
                source={{
                  uri: "https://i.ibb.co/MB99rJz/digipakistan-web-banner.png",
                }}
                style={{
                  width: "41px",
                }}
              />
            </View>
            <View style={styles.two}>
              <Text style={{ fontSize: 20 }}>
                Digi
                <Text
                  style={{ fontWeight: "demibold", fontFamily: "Montserrat" }}
                >
                  Pakistan
                </Text>
              </Text>
            </View>
            <View style={styles.three}>
              <View style={styles.feeChallanFor}>
                <Text>Fee Challan For</Text>
              </View>
              <View
                style={{
                  justifyContent: "center",
                  height: "20px",
                  fontSize: 11,
                  paddingLeft: 5,
                }}
              >
                <Text>Course Fee</Text>
              </View>
            </View>
          </View>

          {/* second row */}
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View style={styles.bank}>
              <Text
                style={{
                  padding: 5,
                  fontSize: 11,
                  fontFamily: "Montserrat Semi",
                }}
              >
                Bank:{" "}
              </Text>
              <Text
                style={{
                  fontFamily: "Montserrat light",
                  fontSize: 11,
                  paddingRight: 10,
                }}
              >
                Habib Bank Ltd. (HBL)
              </Text>
            </View>

            <View style={styles.accountNo}>
              <Text
                style={{
                  fontSize: 11,
                  fontFamily: "Montserrat Semi",
                }}
              >
                A/C #{" "}
              </Text>
              <Text style={{ fontSize: 11 }}>24747000465103</Text>
            </View>

            <View
              style={{
                width: "24.9%",
                flexDirection: "row",
                alignItems: "center",
                border: "1pt solid black",
              }}
            >
              <Text
                style={{
                  paddingLeft: 5,
                  fontSize: 11,
                  fontFamily: "Montserrat Semi",
                }}
              >
                Challan #{" "}
              </Text>
              <Text style={{ fontSize: 11, fontFamily: "Montserrat light" }}>
                {challanNo}
              </Text>
            </View>
          </View>

          {/* Third row */}
          <View
            style={{
              flexDirection: "row",
              width: "95.5%",
            }}
          >
            <View
              style={{
                border: "1pt solid black",
                width: "23.1%",
                padding: 5,
                fontSize: 11,
                fontFamily: "Montserrat Semi",
              }}
            >
              <Text>Name</Text>
            </View>
            <View style={styles.courseFee}>
              <Text>{name}</Text>
            </View>
            <View
              style={{
                border: "1pt solid black",
                width: "26.2%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 11,
              }}
            >
              <Text
                style={{
                  fontFamily: "Montserrat Semi",
                }}
              >
                ID #{" "}
              </Text>
              <Text
                style={{
                  fontFamily: "Montserrat light",
                }}
              >
                {cnicChallan}
              </Text>
            </View>
            <View
              style={{
                border: "1pt solid black",
                width: "26.1%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 11, fontFamily: "Montserrat Semi" }}>
                Message Box
              </Text>
            </View>
          </View>

          {/* fourth row */}
          <View
            style={{
              flexDirection: "row",
              width: "95.5%",
            }}
          >
            <View
              style={{
                border: "1pt solid black",
                width: "23.1%",
                padding: 5,
                fontSize: 11,
                fontFamily: "Montserrat Semi",
              }}
            >
              <Text>Course Title</Text>
            </View>
            <View
              style={{
                border: "1pt solid black",
                width: "24.6%",
                justifyContent: "center",
                paddingHorizontal: 5,
                fontFamily: "Montserrat light",
                fontSize: 11,
              }}
            >
              <Text style={{ textAlign: "center", fontSize: 10 }}>
                {course.title}
              </Text>
            </View>
            <View
              style={{
                border: "1pt solid black",
                width: "26.2%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 11,
              }}
            >
              <Text
                style={{
                  fontFamily: "Montserrat Semi",
                }}
              >
                Roll #{" "}
              </Text>
              <Text
                style={{
                  fontFamily: "Montserrat light",
                }}
              >
                {challanRollNumber}
              </Text>
            </View>
            <View
              style={{
                border: "1pt solid black",
                width: "26.1%",
                borderBottom: "none",
                borderTop: "none",
              }}
            ></View>
          </View>

          {/* fifth row */}
          <View
            style={{
              flexDirection: "row",
              width: "95.5%",
            }}
          >
            <View
              style={{
                border: "1pt solid black",
                width: "23.1%",
                padding: 5,
                fontSize: 11,
                fontFamily: "Montserrat Semi",
              }}
            >
              <Text>Course Type</Text>
            </View>
            <View style={styles.courseFee}>
              <Text>{course.type}</Text>
            </View>
            <View
              style={{
                border: "1pt solid black",
                width: "26.2%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 11,
              }}
            >
              <Text
                style={{
                  fontFamily: "Montserrat Semi",
                }}
              >
                Duration{" "}
              </Text>
              <Text
                style={{
                  fontFamily: "Montserrat light",
                }}
              >
                {course.type === "Associate" ? "6 Months" : "3 Months"}
              </Text>
            </View>
            <View
              style={{
                border: "1pt solid black",
                width: "26.1%",
                borderBottom: "none",
                borderTop: "none",
              }}
            ></View>
          </View>

          {/* sixth row */}
          <View
            style={{
              flexDirection: "row",
              width: "95.5%",
            }}
          >
            <View
              style={{
                border: "1pt solid black",
                width: "23.1%",
                padding: 5,
                fontSize: 11,
                fontFamily: "Montserrat Semi",
              }}
            >
              <Text>Issue Date</Text>
            </View>
            <View
              style={{
                border: "1pt solid black",
                width: "24.6%",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "Montserrat Semi",
                fontSize: 11,
              }}
            >
              <Text>Due Date</Text>
            </View>
            <View
              style={{
                border: "1pt solid black",
                width: "26.2%",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 11,
              }}
            >
              <Text
                style={{
                  fontFamily: "Montserrat Semi",
                }}
              >
                Challan Validity
              </Text>
            </View>
            <View
              style={{
                border: "1pt solid black",
                width: "26.1%",
                borderBottom: "none",
                borderTop: "none",
              }}
            ></View>
          </View>

          {/* seven row */}
          <View
            style={{
              flexDirection: "row",
              width: "95.5%",
            }}
          >
            <View style={styles.issueDate}>
              <Text>{issueDate}</Text>
            </View>
            <View
              style={{
                border: "1pt solid black",
                width: "24.6%",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "lightgrey",
                fontFamily: "Montserrat light",
                fontSize: 11,
              }}
            >
              <Text>{lastDate}</Text>
            </View>
            <View
              style={{
                border: "1pt solid black",
                width: "26.2%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 11,
              }}
            >
              <Text
                style={{
                  fontFamily: "Montserrat light",
                }}
              >
                {lastDate}
              </Text>
            </View>
            <View
              style={{
                border: "1pt solid black",
                width: "26.1%",
                borderBottom: "none",
                borderTop: "none",
              }}
            ></View>
          </View>

          {/* eight row */}
          <View
            style={{
              flexDirection: "row",
              width: "95.5%",
            }}
          >
            <View
              style={{
                border: "1pt solid black",
                width: "23.1%",
                padding: 5,
                fontSize: 11,
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "Montserrat Semi",
              }}
            >
              <Text>Registration Fee</Text>
            </View>
            <View
              style={{
                border: "1pt solid black",
                width: "24.6%",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "Montserrat Semi",
                fontSize: 11,
              }}
            >
              <Text>Course Fee</Text>
            </View>
            <View
              style={{
                border: "1pt solid black",
                width: "26.2%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 11,
              }}
            >
              <Text
                style={{
                  fontFamily: "Montserrat Semi",
                }}
              >
                Current Dues
              </Text>
            </View>
            <View style={styles.arrears}>
              <Text
                style={{
                  fontFamily: "Montserrat Semi",
                }}
              >
                Arrears
              </Text>
            </View>
            <View style={styles.totalTxt}>
              <Text
                style={{
                  fontFamily: "Montserrat Semi",
                }}
              >
                Total
              </Text>
            </View>
          </View>

          {/* nine row */}
          <View
            style={{
              flexDirection: "row",
              width: "95.5%",
            }}
          >
            <View style={styles.registration}>
              <Text>2000</Text>
            </View>
            <View style={styles.courseFee}>
              <Text>0</Text>
            </View>
            <View style={styles.currentDues}>
              <Text
                style={{
                  fontFamily: "Montserrat light",
                }}
              >
                2000
              </Text>
            </View>
            <View style={styles.arrears}>
              <Text
                style={{
                  fontFamily: "Montserrat light",
                }}
              >
                0
              </Text>
            </View>
            <View style={styles.total}>
              <Text
                style={{
                  fontFamily: "Montserrat light",
                }}
              >
                2000
              </Text>
            </View>
          </View>
          <View style={{ marginTop: 5 }}>
            <Text style={styles.para}>
              <Text style={{ fontFamily: "Montserrat Semi" }}>Note:</Text>{" "}
              Students will have to submit registeration fee before the due
              date. This challan form is acceptable at any HBL branch in
              Pakistan.{" "}
            </Text>
            <Text style={styles.para}>
              Admission fee is non-refundable. Any kind of editing in the
              voucher is strictly prohibited.
            </Text>
          </View>

          <View style={{ marginTop: 10, marginBottom: 10 }}>
            <Text>
              -----------------------------------------------------------------------------------------------
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginBottom: 3,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Montserrat Semi",
              }}
            >
              Bank Copy{" "}
            </Text>
          </View>
          <View style={styles.section}>
            <View style={styles.one}>
              <Image
                source={{
                  uri: "https://i.ibb.co/MB99rJz/digipakistan-web-banner.png",
                }}
                style={{
                  width: "41px",
                }}
              />
            </View>
            <View style={styles.two}>
              <Text style={{ fontSize: 20 }}>
                Digi
                <Text
                  style={{ fontWeight: "demibold", fontFamily: "Montserrat" }}
                >
                  Pakistan
                </Text>
              </Text>
            </View>
            <View style={styles.three}>
              <View style={styles.feeChallanFor}>
                <Text>Fee Challan For</Text>
              </View>
              <View
                style={{
                  justifyContent: "center",
                  height: "20px",
                  fontSize: 11,
                  paddingLeft: 5,
                }}
              >
                <Text>Course Fee</Text>
              </View>
            </View>
          </View>

          {/* second row */}
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <View style={styles.bank}>
              <Text
                style={{
                  padding: 5,
                  fontSize: 11,
                  fontFamily: "Montserrat Semi",
                }}
              >
                Bank:{" "}
              </Text>
              <Text
                style={{
                  fontFamily: "Montserrat light",
                  fontSize: 11,
                  paddingRight: 10,
                }}
              >
                Habib Bank Ltd. (HBL)
              </Text>
            </View>

            <View style={styles.accountNo}>
              <Text
                style={{
                  fontSize: 11,
                  fontFamily: "Montserrat Semi",
                }}
              >
                A/C #{" "}
              </Text>
              <Text style={{ fontSize: 11 }}>24747000465103</Text>
            </View>

            <View
              style={{
                width: "24.9%",
                flexDirection: "row",
                alignItems: "center",
                border: "1pt solid black",
              }}
            >
              <Text
                style={{
                  paddingLeft: 5,
                  fontSize: 11,
                  fontFamily: "Montserrat Semi",
                }}
              >
                Challan #{" "}
              </Text>
              <Text style={{ fontSize: 11, fontFamily: "Montserrat light" }}>
                {challanNo}
              </Text>
            </View>
          </View>

          {/* Third row */}
          <View
            style={{
              flexDirection: "row",
              width: "95.5%",
            }}
          >
            <View
              style={{
                border: "1pt solid black",
                width: "23.1%",
                padding: 5,
                fontSize: 11,
                fontFamily: "Montserrat Semi",
              }}
            >
              <Text>Name</Text>
            </View>
            <View style={styles.courseFee}>
              <Text>{name}</Text>
            </View>
            <View
              style={{
                border: "1pt solid black",
                width: "26.2%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 11,
              }}
            >
              <Text
                style={{
                  fontFamily: "Montserrat Semi",
                }}
              >
                ID #{" "}
              </Text>
              <Text
                style={{
                  fontFamily: "Montserrat light",
                }}
              >
                {cnicChallan}
              </Text>
            </View>
            <View
              style={{
                border: "1pt solid black",
                width: "26.1%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 11, fontFamily: "Montserrat Semi" }}>
                Message Box
              </Text>
            </View>
          </View>

          {/* fourth row */}
          <View
            style={{
              flexDirection: "row",
              width: "95.5%",
            }}
          >
            <View
              style={{
                border: "1pt solid black",
                width: "23.1%",
                padding: 5,
                fontSize: 11,
                fontFamily: "Montserrat Semi",
              }}
            >
              <Text>Course Title</Text>
            </View>
            <View
              style={{
                border: "1pt solid black",
                width: "24.6%",
                justifyContent: "center",
                paddingHorizontal: 5,
                fontFamily: "Montserrat light",
                fontSize: 11,
              }}
            >
              <Text style={{ textAlign: "center", fontSize: 10 }}>
                {course.title}
              </Text>
            </View>
            <View
              style={{
                border: "1pt solid black",
                width: "26.2%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 11,
              }}
            >
              <Text
                style={{
                  fontFamily: "Montserrat Semi",
                }}
              >
                Roll #{" "}
              </Text>
              <Text
                style={{
                  fontFamily: "Montserrat light",
                }}
              >
                {challanRollNumber}
              </Text>
            </View>
            <View
              style={{
                border: "1pt solid black",
                width: "26.1%",
                borderBottom: "none",
                borderTop: "none",
              }}
            ></View>
          </View>

          {/* fifth row */}
          <View
            style={{
              flexDirection: "row",
              width: "95.5%",
            }}
          >
            <View
              style={{
                border: "1pt solid black",
                width: "23.1%",
                padding: 5,
                fontSize: 11,
                fontFamily: "Montserrat Semi",
              }}
            >
              <Text>Course Type</Text>
            </View>
            <View style={styles.courseFee}>
              <Text>{course.type}</Text>
            </View>
            <View
              style={{
                border: "1pt solid black",
                width: "26.2%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 11,
              }}
            >
              <Text
                style={{
                  fontFamily: "Montserrat Semi",
                }}
              >
                Duration{" "}
              </Text>
              <Text
                style={{
                  fontFamily: "Montserrat light",
                }}
              >
                {course.type === "Associate" ? "6 Months" : "3 Months"}
              </Text>
            </View>
            <View
              style={{
                border: "1pt solid black",
                width: "26.1%",
                borderBottom: "none",
                borderTop: "none",
              }}
            ></View>
          </View>

          {/* sixth row */}
          <View
            style={{
              flexDirection: "row",
              width: "95.5%",
            }}
          >
            <View
              style={{
                border: "1pt solid black",
                width: "23.1%",
                padding: 5,
                fontSize: 11,
                fontFamily: "Montserrat Semi",
              }}
            >
              <Text>Issue Date</Text>
            </View>
            <View
              style={{
                border: "1pt solid black",
                width: "24.6%",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "Montserrat Semi",
                fontSize: 11,
              }}
            >
              <Text>Due Date</Text>
            </View>
            <View
              style={{
                border: "1pt solid black",
                width: "26.2%",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 11,
              }}
            >
              <Text
                style={{
                  fontFamily: "Montserrat Semi",
                }}
              >
                Challan Validity
              </Text>
            </View>
            <View
              style={{
                border: "1pt solid black",
                width: "26.1%",
                borderBottom: "none",
                borderTop: "none",
              }}
            ></View>
          </View>

          {/* seven row */}
          <View
            style={{
              flexDirection: "row",
              width: "95.5%",
            }}
          >
            <View style={styles.issueDate}>
              <Text>{issueDate}</Text>
            </View>
            <View
              style={{
                border: "1pt solid black",
                width: "24.6%",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "Montserrat light",
                backgroundColor: "lightgrey",
                fontSize: 11,
              }}
            >
              <Text>{lastDate}</Text>
            </View>
            <View
              style={{
                border: "1pt solid black",
                width: "26.2%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 11,
              }}
            >
              <Text
                style={{
                  fontFamily: "Montserrat light",
                }}
              >
                {lastDate}
              </Text>
            </View>
            <View
              style={{
                border: "1pt solid black",
                width: "26.1%",
                borderBottom: "none",
                borderTop: "none",
              }}
            ></View>
          </View>

          {/* eight row */}
          <View
            style={{
              flexDirection: "row",
              width: "95.5%",
            }}
          >
            <View
              style={{
                border: "1pt solid black",
                width: "23.1%",
                padding: 5,
                fontSize: 11,
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "Montserrat Semi",
              }}
            >
              <Text>Registration Fee</Text>
            </View>
            <View
              style={{
                border: "1pt solid black",
                width: "24.6%",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "Montserrat Semi",
                fontSize: 11,
              }}
            >
              <Text>Course Fee</Text>
            </View>
            <View
              style={{
                border: "1pt solid black",
                width: "26.2%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 11,
              }}
            >
              <Text
                style={{
                  fontFamily: "Montserrat Semi",
                }}
              >
                Current Dues
              </Text>
            </View>
            <View style={styles.arrears}>
              <Text
                style={{
                  fontFamily: "Montserrat Semi",
                }}
              >
                Arrears
              </Text>
            </View>
            <View style={styles.totalTxt}>
              <Text
                style={{
                  fontFamily: "Montserrat Semi",
                }}
              >
                Total
              </Text>
            </View>
          </View>

          {/* nine row */}
          <View
            style={{
              flexDirection: "row",
              width: "95.5%",
            }}
          >
            <View style={styles.registration}>
              <Text>2000</Text>
            </View>
            <View style={styles.courseFee}>
              <Text>0</Text>
            </View>
            <View style={styles.currentDues}>
              <Text
                style={{
                  fontFamily: "Montserrat light",
                }}
              >
                2000
              </Text>
            </View>
            <View style={styles.arrears}>
              <Text
                style={{
                  fontFamily: "Montserrat light",
                }}
              >
                0
              </Text>
            </View>
            <View style={styles.total}>
              <Text
                style={{
                  fontFamily: "Montserrat light",
                }}
              >
                2000
              </Text>
            </View>
          </View>
          <View style={{ marginTop: 5 }}>
            <Text style={styles.para}>
              <Text style={{ fontFamily: "Montserrat Semi" }}>Note:</Text>{" "}
              Students will have to submit registeration fee before the due
              date. This challan form is acceptable at any HBL branch in
              Pakistan.{" "}
            </Text>
            <Text style={styles.para}>
              Admission fee is non-refundable. Any kind of editing in the
              voucher is strictly prohibited.
            </Text>
          </View>
        </Page>
      </Document>
    ).toBlob();
  };
  return (
    <div className="d-flex flex-column mb-5 align-items-center">
      <h1 className="mt-2">{course.title}</h1>
      <Button
        variant="contained"
        className="mt-2 download-button"
        style={{ outline: "none" }}
        onClick={async () => {
          const blob = await MyDoc("1");
          saveAs(blob, `${name} ${course.title} ${challanRollNumber}.pdf`);
        }}
      >
        Download Challan
      </Button>

      <Alert variant="filled" severity="error" className="mt-2 download-button">
        Print this pdf generated challan in LEGAL size paper.
      </Alert>
    </div>
  );
};

const styles = StyleSheet.create({
  page: {
    width: "100%",
    backgroundColor: "white",
    marginLeft: 13.5,
    marginTop: 5,
  },
  section: {
    flexDirection: "row",
    width: "100%",
  },

  one: {
    width: 41,
    height: 41,
    border: "1pt solid black",
  },

  two: {
    width: "63.9%",
    height: 41,
    border: "1pt solid black",
    // borderLeft: "none",
    flexDirection: "row",
    alignItems: "center",
    // borderRight: "none",
    backgroundColor: "lightgrey",
    textAlign: "center",
  },

  three: {
    width: "24.9%",
    height: 41,
    border: "1pt solid black",
  },

  para: {
    fontSize: 8.5,
    fontFamily: "Montserrat light",
    width: "95%",
  },

  total: {
    border: "1pt solid black",
    width: "13.1%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "lightgrey",
    justifyContent: "center",
    fontSize: 11,
  },

  registration: {
    border: "1pt solid black",
    width: "23.1%",
    padding: 5,
    fontSize: 11,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Montserrat light",
  },

  currentDues: {
    border: "1pt solid black",
    width: "26.2%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 11,
  },

  arrears: {
    border: "1pt solid black",
    width: "13%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 11,
  },

  issueDate: {
    border: "1pt solid black",
    width: "23.1%",
    padding: 5,
    fontSize: 11,
    alignItems: "center",
    fontFamily: "Montserrat light",
  },

  courseFee: {
    border: "1pt solid black",
    width: "24.6%",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Montserrat light",
    fontSize: 11,
  },

  totalTxt: {
    border: "1pt solid black",
    width: "13.1%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 11,
  },

  feeChallanFor: {
    height: "20px",
    border: "1pt solid black",
    borderLeft: "none",
    borderRight: "none",
    borderTop: "none",
    paddingLeft: 5,
    fontSize: 11,
    justifyContent: "center",
  },

  bank: {
    width: "45.6%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1pt solid black",
  },

  accountNo: {
    width: "25%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    border: "1pt solid black",
  },
});

export default PDFChallan;
