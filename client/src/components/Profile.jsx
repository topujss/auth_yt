import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import avater from '../assets/profile.png';
import styles from '../styles/username.module.scss';
import { useFormik } from 'formik';
import { ToastContainer } from 'react-toastify';
import { validateProfile } from '../helper/validate';
import { convert } from '../helper/convert';

const Profile = () => {
  const [file, setFile] = useState();

  // formik for form validation
  const formik = useFormik({
    initialValues: {
      firstName: 'Toquir',
      lastName: 'Ahmed',
      username: 'ahmedName',
      email: 'casandra.runolfsson@ethereal.email',
      mobile: '',
      address: '',
    },
    validate: validateProfile,
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
          <div className={`${styles.glass} w-[50%] py-1`}>
            <div className="title flex flex-col items-center pt-8">
              <h4 className="text-5xl font-bold">Profile</h4>
              <span className="py-4 text-xl w-2/3 text-center text-gray-500">You can update your profile</span>
            </div>
            <form onSubmit={formik.handleSubmit} className="py-1">
              <div className="profile flex justify-center py-3">
                <label htmlFor="profile" className="w-32">
                  <img src={file || avater} className={`${styles.profile_img} w-40`} alt="avatar" />
                </label>

                <input type="file" onChange={onUpload} name="profile" id="profile" />
              </div>
              <div className="textbox flex flex-col items-center gap-6">
                <div className="name_field flex gap-6 w-3/4">
                  <input
                    {...formik.getFieldProps('firstName')}
                    type="text"
                    className={styles.textbox}
                    placeholder="first Name"
                  />
                  <input
                    {...formik.getFieldProps('lastName')}
                    type="text"
                    className={styles.textbox}
                    placeholder="last Name"
                  />
                </div>
                <div className="register_field flex gap-6 w-3/4">
                  <input
                    {...formik.getFieldProps('mobile')}
                    type="number"
                    className={styles.textbox}
                    placeholder="Mobile no."
                  />
                  <input
                    {...formik.getFieldProps('email')}
                    type="email"
                    className={styles.textbox}
                    placeholder="Your email address"
                  />
                </div>
                <input
                  {...formik.getFieldProps('address')}
                  type="text"
                  className={styles.textbox}
                  placeholder="Address"
                />
                <button type="submit" className={`${styles.btn} mt-1`}>
                  Register
                </button>
              </div>
              <div className="text-center py-4">
                <span className="text-gray-500">
                  Come back later?
                  <Link className="text-red-500 pl-1" to="/">
                    Logout
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

export default Profile;
