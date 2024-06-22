import React from "react";
import styles from "./Formstepthree.module.css";
import { Formstepone } from "../FormStepOne/Formstepone";
import { Formsteptwo } from "../FormStepTwo/Formsteptwo";
export const Formstepthree = ({
  Read,
  error,
  setErrors,
  personalInfo,
  set_personalInfo,
  addressInfo,
  set_addressInfo,
  errorStep2,
  set_errorStep2,
}) => {
  return (
    <div className={styles.Wrapper}>
      <Formstepone
        Read={Read}
        error={error}
        setErrors={setErrors}
        personalInfo={personalInfo}
        set_personalInfo={set_personalInfo}
      />
      <Formsteptwo
        Read={Read}
        addressInfo={addressInfo}
        set_addressInfo={set_addressInfo}
        errorStep2={errorStep2}
        set_errorStep2={set_errorStep2}
      />
    </div>
  );
};
