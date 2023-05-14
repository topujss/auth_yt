import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/username.module.scss';
import { useFormik } from 'formik';
import { ToastContainer } from 'react-toastify';
import { validatePassword } from '../helper/validate';

const Recovery = () => {
  // formik for form validation
  const formik = useFormik({
    initialValues: {
      password: 'ahmed@324',
    },
    validate: validatePassword,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (val) => {
      console.log(val);
    },
  });

  return (
    <>
      <div className="container mx-auto">
        <ToastContainer />
        <div className={`flex justify-center items-center h-screen`}>
          <div className={styles.glass}>
            <div className="title flex flex-col items-center">
              <h4 className="text-5xl font-bold">Recovery</h4>
              <span className="py-4 text-xl w-2/3 text-center text-gray-500">Enter code to recover password</span>
            </div>
            <form className="pt-20">
              <div className="textbox flex flex-col items-center gap-6">
                <div className="input text-center">
                  <span className="py-2 text-sm text-gray-500 block">
                    Enter 6 digit code sent to your email address
                  </span>
                  <input type="text" className={styles.textbox} placeholder="Code " />
                  <button type="submit" className={styles.btn}>
                    Recover password
                  </button>
                </div>
              </div>
              <div className="text-center py-4">
                <span className="text-gray-500">
                  Can't get Code?
                  <Link className="text-red-500 pl-1" to="/recovery">
                    Resend
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recovery;
