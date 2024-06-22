import React, { useState } from "react";
import styles from "./Formstepone.module.css";
import TextField from "@mui/material/TextField";
export const Formstepone = ({
  Read,
  error,
  setErrors,
  personalInfo,
  set_personalInfo,
}) => {
  const handleChange = (e) => {
    if (e.target.name === "Name") {
      if (e.target.value.length < 2) {
        setErrors((preverror) => {
          return {
            ...preverror,
            NameError: "First name should be at least 2 characters ",
          };
        });
      } else if (!/^[A-Za-z\s]+$/.test(e.target.value)) {
        setErrors((preverror) => {
          return {
            ...preverror,
            NameError: "Name should'nt contain numbers",
          };
        });
      } else {
        setErrors((preverror) => {
          return {
            ...preverror,
            NameError: "",
          };
        });
      }
      set_personalInfo((prevdata) => {
        return { ...prevdata, Name: e.target.value };
      });
    } else if (e.target.name === "Email") {
      set_personalInfo((prevdata) => {
        return { ...prevdata, Email: e.target.value };
      });
    } else if (e.target.name === "Phone") {
      if (!/^\d+$/.test(e.target.value)) {
        setErrors((preverror) => ({
          ...preverror,
          PhoneError: "Phone number should contain only digits",
        }));
      } else if (e.target.value.length !== 10) {
        setErrors((preverror) => ({
          ...preverror,
          PhoneError: "Phone number should be 10 digits",
        }));
      } else {
        setErrors((preverror) => ({
          ...preverror,
          PhoneError: "",
        }));
      }
      set_personalInfo((prevdata) => ({
        ...prevdata,
        Phone: e.target.value,
      }));
    }
  };

  return (
    <div className={styles.Wrapper}>
      <h2>Personal Information</h2>
      <div className={styles.textField}>
        <TextField
          name="Name"
          id="standard-basic"
          label="Name"
          variant="standard"
          fullWidth={true}
          error={!!error.NameError}
          helperText={error.NameError}
          disabled={Read === true ? true : false}
          onChange={handleChange}
          value={personalInfo.Name}
        />
        <TextField
          name="Email"
          id="standard-basic"
          label="Email"
          variant="standard"
          fullWidth={true}
          error={!!error.EmailError}
          helperText={error.EmailError}
          disabled={Read === true ? true : false}
          value={personalInfo.Email}
          onChange={handleChange}
        />
        <TextField
          name="Phone"
          id="standard-basic"
          label="Phone"
          variant="standard"
          fullWidth={true}
          error={!!error.PhoneError}
          helperText={error.PhoneError}
          disabled={Read === true ? true : false}
          value={personalInfo.Phone}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
