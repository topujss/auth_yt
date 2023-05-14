import React from 'react';
import { Link } from 'react-router-dom';
import avater from '../assets/profile.png';
import styles from '../styles/username.module.scss';
import { useFormik } from 'formik';
import { ToastContainer } from 'react-toastify';
import { validateUsername } from '../helper/validate';

const Username = () => {
  // formik for form validation
  const formik = useFormik({
    initialValues: {
      username: '',
    },
    validate: validateUsername,
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
              <h4 className="text-5xl font-bold">Hello Again!</h4>
              <span className="py-4 text-xl w-2/3 text-center text-gray-500">
                Xplore more by connecting with us
              </span>
            </div>
            <form onSubmit={formik.handleSubmit} className="py-1">
              <div className="profile flex justify-center py-4">
                <img src={avater} className={styles.profile_img} alt="avatar" />
              </div>
              <div className="textbox flex flex-col items-center gap-6">
                <input
                  {...formik.getFieldProps('username')}
                  type="text"
                  className={styles.textbox}
                  placeholder="Username"
                  value="ex"
                />
                <button type="submit" className={styles.btn}>
                  Let's go
                </button>
              </div>
              <div className="text-center py-4">
                <span className="text-gray-500">
                  Not a member
                  <Link className="text-red-500 pl-1" to="/register">
                    Register Now
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

export default Username;
