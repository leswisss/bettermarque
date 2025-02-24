import React from "react";
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

const FormInput = ({ data }: { data: FormField }) => {
  return (
    <div className={styles.input__wrapper}>
      <span className={styles.label}>{data.label}</span>
      {data.inputState ? (
        <input
          className={styles.input}
          name={data.name}
          type={data.type}
          placeholder={data.placeholder}
          required={data.required}
          minLength={data.minlength}
        />
      ) : (
        <textarea
          className={styles.textarea}
          name={data.name}
          placeholder={data.placeholder}
          required={data.required}
          minLength={data.minlength}
        />
      )}
    </div>
  );
};

export default FormInput;
