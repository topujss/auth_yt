import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import avater from '../assets/profile.png';
import styles from '../styles/username.module.scss';
import { useFormik } from 'formik';
import { ToastContainer } from 'react-toastify';
import { validateRegister } from '../helper/validate';
import { convert } from '../helper/convert';

const Register = () => {
  const [file, setFile] = useState();

  // formik for form validation
  const formik = useFormik({
    initialValues: {
      username: 'ahmedName',
      email: 'casandra.runolfsson@ethereal.email',
      password: 'ahmed@324',
    },
    validate: validateRegister,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (val) => {
      val = await Object.assign(val, { profile: file || '' });
      console.log(val);
    },
  });

  // formik file upload
  const onUpload = async (e) => {
    const base64 = await convert(e.target.files[0]);
    setFile(base64);
  };

  return (
    <>
      <div className="container mx-auto">
        <ToastContainer />
        <div className={`flex justify-center items-center h-screen`}>
          <div className={`${styles.glass} w-[50%]`}>
            <div className="title flex flex-col items-center">
              <h4 className="text-5xl font-bold">Register</h4>
              <span className="py-4 text-xl w-2/3 text-center text-gray-500">Happy to connect!</span>
            </div>
            <form onSubmit={formik.handleSubmit} className="py-1">
              <div className="profile flex justify-center py-4">
                <label htmlFor="profile">
                  <img src={file || avater} className={styles.profile_img} alt="avatar" />
                </label>

                <input type="file" onChange={onUpload} name="profile" id="profile" />
              </div>
              <div className="textbox flex flex-col items-center gap-6">
                <input
                  {...formik.getFieldProps('username')}
                  type="text"
                  className={styles.textbox}
                  placeholder="Username *"
                />
                <input
                  {...formik.getFieldProps('email')}
                  type="text"
                  className={styles.textbox}
                  placeholder="Email *"
                />
                <input
                  {...formik.getFieldProps('password')}
                  type="text"
                  className={styles.textbox}
                  placeholder="Password *"
                />
                <button type="submit" className={styles.btn}>
                  Register
                </button>
              </div>
              <div className="text-center py-4">
                <span className="text-gray-500">
                  Already Register?
                  <Link className="text-red-500 pl-1" to="/">
                    Login Now
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

export default Register;
