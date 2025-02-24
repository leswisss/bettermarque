"use client";

import React, { useState, useEffect } from "react";
import styles from "../../styles/ContactPage/forminput.module.scss";

interface FormField {
  id: number;
  name: string;
  type: string;
  placeholder: string;
  errorMessage?: string;
  label: string;
  required: boolean;
  minlength?: number;
  inputState: boolean;
}

const FormInput = ({
  data,
  isSubmitting,
  setIsSubmitting,
}: {
  data: FormField;
  isSubmitting: boolean;
  setIsSubmitting: (submit: boolean) => void;
}) => {
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      setFocused(false);
    }
  }, [submitting]);

  const handleFocus = () => {
    if (!submitting) { // Skip onBlur during form reset/submission
      setFocused(true);
    }
  };

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div className={styles.input__wrapper}>
      <label htmlFor={data.name} className={styles.label}>
        {data.label}
      </label>
      {data.inputState ? (
        <input
          className={styles.input}
          name={data.name}
          type={data.type}
          placeholder={data.placeholder}
          required={data.required}
          minLength={data.minlength}
          onBlur={handleFocus}
          data-focused={focused.toString()}
        />
      ) : (
        <textarea
          className={styles.textarea}
          name={data.name}
          placeholder={data.placeholder}
          required={data.required}
          minLength={data.minlength}
          onBlur={handleFocus}
          data-focused={focused.toString()}
        />
      )}
      <span className={styles.error}>{data.errorMessage}</span>
    </div>
  );
};

export default FormInput;
