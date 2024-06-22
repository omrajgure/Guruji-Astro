import React from "react";
import styles from "./Formsteptwo.module.css";
import TextField from "@mui/material/TextField";
export const Formsteptwo = ({
  Read,
  addressInfo,
  set_addressInfo,
  errorStep2,
  set_errorStep2,
}) => {
  const handleChange = (e) => {
    if (e.target.name === "Address1") {
      if (e.target.value.length < 20) {
        set_errorStep2((preverror) => {
          return {
            ...preverror,
            Address1error: "Should be Min 20 Characters.",
          };
        });
      } else {
        set_errorStep2((preverror) => {
          return {
            ...preverror,
            Address1error: "",
          };
        });
      }
      set_addressInfo((prevdata) => {
        return { ...prevdata, Address1: e.target.value };
      });
    } else if (e.target.name === "Address2") {
      if (e.target.value.length < 10) {
        set_errorStep2((preverror) => {
          return {
            ...preverror,
            Address2error: "Should be Min 10 Characters.",
          };
        });
      } else {
        set_errorStep2((preverror) => {
          return {
            ...preverror,
            Address2error: "",
          };
        });
      }
      set_addressInfo((prevdata) => {
        return { ...prevdata, Address2: e.target.value };
      });
    } else if (e.target.name === "city") {
      if (e.target.value.length < 2) {
        set_errorStep2((preverror) => {
          return {
            ...preverror,
            cityerror: "City name should be at least 2 characters ",
          };
        });
      } else if (!/^[A-Za-z\s]+$/.test(e.target.value)) {
        set_errorStep2((preverror) => {
          return {
            ...preverror,
            cityerror: "City should'nt contain numbers",
          };
        });
      } else {
        set_errorStep2((preverror) => {
          return {
            ...preverror,
            cityerror: "",
          };
        });
      }
      set_addressInfo((prevdata) => {
        return { ...prevdata, city: e.target.value };
      });
    } else if (e.target.name === "state") {
      if (e.target.value.length < 2) {
        set_errorStep2((preverror) => {
          return {
            ...preverror,
            stateerror: "State name should be at least 2 characters ",
          };
        });
      } else if (!/^[A-Za-z\s]+$/.test(e.target.value)) {
        set_errorStep2((preverror) => {
          return {
            ...preverror,
            stateerror: "State name should'nt contain numbers",
          };
        });
      } else {
        set_errorStep2((preverror) => {
          return {
            ...preverror,
            stateerror: "",
          };
        });
      }
      set_addressInfo((prevdata) => {
        return { ...prevdata, state: e.target.value };
      });
    } else if (e.target.name === "zip") {
      if (!/^\d{6}(?:[-\s]?\d{4})?$/.test(e.target.value)) {
        set_errorStep2((preverror) => ({
          ...preverror,
          zipcodeerror: "ZIP code should be 6 or 9 digits.",
        }));
      } else {
        set_errorStep2((preverror) => ({
          ...preverror,
          zipcodeerror: "",
        }));
      }
      set_addressInfo((prevdata) => ({
        ...prevdata,
        zipcode: e.target.value,
      }));
    }
  };
  return (
    <div>
      <h2>Address Information</h2>
      <div className={styles.textField}>
        <TextField
          name="Address1"
          id="standard-basic"
          label="Address Line 1"
          variant="standard"
          fullWidth={true}
          error={!!errorStep2.Address1error}
          helperText={errorStep2.Address1error}
          disabled={Read === true ? true : false}
          onChange={handleChange}
          value={addressInfo.Address1}
        />
        <TextField
          name="Address2"
          id="standard-basic"
          label="Address Line 2"
          variant="standard"
          fullWidth={true}
          error={!!errorStep2.Address2error}
          helperText={errorStep2.Address2error}
          disabled={Read === true ? true : false}
          onChange={handleChange}
          value={addressInfo.Address2}
        />
        <TextField
          name="city"
          id="standard-basic"
          label="City"
          variant="standard"
          fullWidth={true}
          error={!!errorStep2.cityerror}
          helperText={errorStep2.cityerror}
          disabled={Read === true ? true : false}
          onChange={handleChange}
          value={addressInfo.city}
        />
        <TextField
          name="state"
          id="standard-basic"
          label="State"
          variant="standard"
          fullWidth={true}
          error={!!errorStep2.stateerror}
          helperText={errorStep2.stateerror}
          disabled={Read === true ? true : false}
          onChange={handleChange}
          value={addressInfo.state}
        />
        <TextField
          name="zip"
          id="standard-basic"
          label="Zip Code"
          variant="standard"
          fullWidth={true}
          error={!!errorStep2.zipcodeerror}
          helperText={errorStep2.zipcodeerror}
          disabled={Read === true ? true : false}
          onChange={handleChange}
          value={addressInfo.zipcode}
        />
      </div>
    </div>
  );
};
