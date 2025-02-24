// "use client";

// import React, {RefObject, useRef} from 'react'
// import ButtonHeader from '../ReUsables/ButtonHeader'
// import { FormFieldsData } from '@/utils'
// import FormInput from './FormInput'
// import { Icon } from "@iconify/react";
// import styles from "../../styles/ContactPage/formsection.module.scss"

// const FormSection = ({ref}: {ref:  RefObject<HTMLDivElement | null>}) => {

//   const formRef = useRef<HTMLFormElement | null>(null);

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault(); // Prevents the default form submission behavior
//     const formData = new FormData(event.currentTarget);
  
//     // Retrieve form fields
//     const fullname = formData.get("fullname") as string | null;
//     const companyemail = formData.get("companyemail") as string | null;
//     const companyname = formData.get("companyname") as string | null;
//     const companywebsite = formData.get("companywebsite") as string | null;
//     const projectscope = formData.get("projectscope") as string | null;
  
//     try {
//       const response = await fetch("/api", {
//         method: "POST",
//         headers: {
//           "Accept": "application/json",
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           fullname,
//           companyemail,
//           companyname,
//           companywebsite,
//           projectscope,
//         }),
//       });
  
//       const content = await response.json();
//       console.log(content);
  
//       // Delay form reset after async operation completes
//       setTimeout(() => {
//         formRef.current?.reset();
//       }, 100);
//     } catch (error) {
//       console.error("Error during form submission", error);
//     }
//   };
  

  

//   return (
//     <section className={`section ${styles.form__section}`} ref={ref}>
//       <div className={`container ${styles.form__container}`}>
//         <div className={styles.form__wrapper}>
//           <div className={styles.form__left}>
//             <ButtonHeader text="Contact form"/>
//           </div>
//           <div className={styles.form__right}>
//             <div className={styles.mform__wrapper}>
//               <form onSubmit={handleSubmit} ref={formRef}>
//                 {
//                   FormFieldsData.map((data, i) => (
//                     <FormInput data={data} key={i}/>
//                   ))
//                 }
//                 <button className={styles.submit} type='submit'><span>Submit form</span> <span><Icon icon="mdi-light:arrow-up"/></span></button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default FormSection

"use client";

import React, { useRef, useState, RefObject } from 'react'
import ButtonHeader from '../ReUsables/ButtonHeader'
import { FormFieldsData } from '@/utils'
import FormInput from './FormInput'
import { Icon } from "@iconify/react";
import styles from "../../styles/ContactPage/formsection.module.scss"

const FormSection = ({ ref }: { ref: RefObject<HTMLDivElement | null> }) => {
  // Use state to track button text
  const [buttonText, setButtonText] = useState('Submit form');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasError, setHasError] = useState(false);

  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevents the default form submission behavior
    const formData = new FormData(event.currentTarget);

    // Retrieve form fields
    const fullname = formData.get("fullname") as string | null;
    const companyemail = formData.get("companyemail") as string | null;
    const companyname = formData.get("companyname") as string | null;
    const companywebsite = formData.get("companywebsite") as string | null;
    const projectscope = formData.get("projectscope") as string | null;

    // Change button text and show "Submitting..."
    setButtonText('Submitting...');
    setIsSubmitting(true);
    setHasError(false);

    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname,
          companyemail,
          companyname,
          companywebsite,
          projectscope,
        }),
      });

      const content = await response.json();
      console.log(content);

      if (response.ok) {
        // On success, update button text
        setButtonText('Form Submitted Successfully');
        setHasError(false);
      } else {
        // If API response is not ok, show error
        setButtonText('Sorry, an error occurred');
        setHasError(true);
      }

      alert(content.data.tableRange);

      // Reset the form
      if (formRef.current) {
        setTimeout(() => {
          formRef.current?.reset();
          setIsSubmitting(false);
        }, 1000); // Reset the form and allow some time for the text to update
      }
    } catch (error) {
      console.error("Error during form submission", error);
      setButtonText('Sorry, an error occurred');
      setHasError(true);
      setIsSubmitting(false);
    }
  };

  return (
    <section className={`section ${styles.form__section}`} ref={ref}>
      <div className={`container ${styles.form__container}`}>
        <div className={styles.form__wrapper}>
          <div className={styles.form__left}>
            <ButtonHeader text="Contact form" />
          </div>
          <div className={styles.form__right}>
            <div className={styles.mform__wrapper}>
              <form onSubmit={handleSubmit} ref={formRef}>
                {
                  FormFieldsData.map((data, i) => (
                    <FormInput data={data} key={i} />
                  ))
                }
                <button
                  className={styles.submit}
                  type="submit"
                  disabled={isSubmitting} // Disable button while submitting
                >
                  <div>
                    
                  </div>
                  <span>{buttonText}</span>
                  {isSubmitting && <span className={styles.spinner}></span>} {/* Optional spinner */}
                  <span><Icon icon="mdi-light:arrow-up" /></span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
