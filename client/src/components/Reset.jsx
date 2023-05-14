import styles from '../styles/username.module.scss';
import { useFormik } from 'formik';
import { ToastContainer } from 'react-toastify';
import { validateResetPassword } from '../helper/validate';
const Header = `Reset`;
const subHeader = `Enter new password`;

const Reset = () => {
  // formik for form validation
  const formik = useFormik({
    initialValues: {
      password: 'ahmed@324',
      confirmPass: 'ahmed@324',
    },
    validate: validateResetPassword,
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
          <div className={`${styles.glass} w-[50%]`}>
            <div className="title flex flex-col items-center">
              <h4 className="text-5xl font-bold">{Header}</h4>
              <span className="py-4 text-xl w-2/3 text-center text-gray-500 block">{subHeader}</span>
            </div>
            <form className="pt-20">
              <div className="textbox flex flex-col items-center gap-6">
                <input
                  {...formik.getFieldProps('password')}
                  type="text"
                  className={styles.textbox}
                  placeholder="New Password"
                />
                <input
                  {...formik.getFieldProps('confirmPass')}
                  type="text"
                  className={styles.textbox}
                  placeholder="confirm Password"
                />
                <button type="submit" className={styles.btn}>
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reset;
