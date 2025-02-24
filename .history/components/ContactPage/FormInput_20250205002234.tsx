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


const FormInput = ({ data }: { data: boolean }) => {
  return (
    <div className={styles.input__wrapper}>
      <span className={styles.label}>Full name</span>
      {inputState ? (
        <input
          className={styles.input}
          placeholder="Full name here*"
          name="firstname"
          type="text"
          
          required
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
