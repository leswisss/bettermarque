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
          name={field.name}
            type={field.type}
            placeholder={field.placeholder}
            required={field.required}
            minLength={field.minlength}
        />
      ) : (
        <textarea
          className={styles.textarea}
          placeholder="Start typing here"
          required
          name="projectdetail"
        />
      )}
    </div>
  );
};

export default FormInput;
