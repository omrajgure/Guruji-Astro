import { useState } from "react";
import styles from "./App.module.css";
import { Formstepone } from "./components/FormStepOne/Formstepone";
import { Formsteptwo } from "./components/FormStepTwo/Formsteptwo";
import { Formstepthree } from "./components/FormStepThree/Formstepthree";
import { Button } from "@mui/material";
import { enqueueSnackbar } from "notistack";

function App() {
  const [formStep, set_formStep] = useState(1);

  const [personalInfo, set_personalInfo] = useState(() => {
    const savedPersonalInfo = localStorage.getItem("personalInfo");
    return savedPersonalInfo
      ? JSON.parse(savedPersonalInfo)
      : { Name: "", Email: "", Phone: "" };
  });
  const [error, setErrors] = useState({
    NameError: "",
    EmailError: "",
    PhoneError: "",
  });
  const [addressInfo, set_addressInfo] = useState(() => {
    const savedAddressInfo = localStorage.getItem("addressInfo");
    return savedAddressInfo
      ? JSON.parse(savedAddressInfo)
      : { Address1: "", Address2: "", city: "", state: "", zipcode: "" };
  });

  const [errorStep2, set_errorStep2] = useState({
    Address1error: "",
    Address2error: "",
    cityerror: "",
    stateerror: "",
    zipcodeerror: "",
  });

  const handlePrevious = () => {
    if (formStep === 2) {
      localStorage.setItem("addressInfo", JSON.stringify(addressInfo));
    }

    set_formStep((prevStep) => prevStep - 1);
  };
  const handlesubmit = () => {
    if (formStep === 1) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.(com|org|net|edu|gov|in)$/i;

      const keysWithErrors = [];
      Object.entries(error).forEach(([key, value]) => {
        if (value !== "") {
          keysWithErrors.push(key);
        }
      });
      if (personalInfo.Name === "") {
        enqueueSnackbar("Name can't be empty", { variant: "warning" });
      } else if (personalInfo.Phone === "") {
        enqueueSnackbar("Phone Number can't be empty", { variant: "warning" });
      } else if (keysWithErrors.length > 0) {
        enqueueSnackbar("Please resolve the shown errors!!", {
          variant: "error",
        });
      } else if (!emailRegex.test(personalInfo.Email)) {
        enqueueSnackbar("Invalid email ID", { variant: "warning" });
      } else {
        localStorage.setItem("personalInfo", JSON.stringify(personalInfo));
        set_formStep((prevStep) => prevStep + 1);
      }
    } else if (formStep === 2) {
      const keysWithErrors = [];
      Object.entries(errorStep2).forEach(([key, value]) => {
        if (value !== "") {
          keysWithErrors.push(key);
        }
      });
      if (addressInfo.Address1 === "") {
        enqueueSnackbar("Address line 1 can't be empty", {
          variant: "warning",
        });
      } else if (addressInfo.Address2 === "") {
        enqueueSnackbar("Address line 2 can't be empty", {
          variant: "warning",
        });
      } else if (addressInfo.city === "") {
        enqueueSnackbar("City can't be empty", { variant: "warning" });
      } else if (addressInfo.state === "") {
        enqueueSnackbar("State name can't be empty", { variant: "warning" });
      } else if (addressInfo.zipcode === "") {
        enqueueSnackbar("Zipcode can't be empty", { variant: "warning" });
      } else if (keysWithErrors.length > 0) {
        enqueueSnackbar("Please resolve the shown errors!!", {
          variant: "error",
        });
      } else {
        localStorage.setItem("addressInfo", JSON.stringify(addressInfo));
        set_formStep((prevStep) => prevStep + 1);
      }
    } else if (formStep === 3) {
      localStorage.setItem(
        "personalInfo",
        JSON.stringify({ Name: "", Email: "", Phone: "" })
      );
      localStorage.setItem(
        "addressInfo",
        JSON.stringify({
          Address1: "",
          Address2: "",
          city: "",
          state: "",
          zipcode: "",
        })
      );
      set_formStep((prevStep) => prevStep + 1);
    }
  };
  return (
    <div className={`${styles.Wrapper} ${formStep === 3 && styles.pad}`}>
      <div className={styles.Innerwrapper}>
        {formStep === 1 ? (
          <Formstepone
            error={error}
            setErrors={setErrors}
            personalInfo={personalInfo}
            set_personalInfo={set_personalInfo}
          />
        ) : formStep === 2 ? (
          <Formsteptwo
            addressInfo={addressInfo}
            set_addressInfo={set_addressInfo}
            errorStep2={errorStep2}
            set_errorStep2={set_errorStep2}
          />
        ) : formStep === 3 ? (
          <Formstepthree
            Read={true}
            error={error}
            setErrors={setErrors}
            personalInfo={personalInfo}
            set_personalInfo={set_personalInfo}
            addressInfo={addressInfo}
            set_addressInfo={set_addressInfo}
            errorStep2={errorStep2}
            set_errorStep2={set_errorStep2}
          />
        ) : (
          <div>
            <h2 style={{ textAlign: "center" }}>Form Submitted Successfully</h2>
          </div>
        )}

        <div className={styles.button}>
          <div className={styles.Innerbutton}>
            {formStep !== 1 && formStep !== 4 && (
              <Button variant="contained" onClick={handlePrevious}>
                Previous
              </Button>
            )}
            {formStep !== 4 && (
              <Button variant="contained" onClick={handlesubmit}>
                {formStep === 3 ? "Submit" : "Next"}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
