import { toast } from 'react-toastify';

/**
 * @description - This function is used to validate and verify the login page username
 */
export const validateUsername = (val) => verifyUsername({}, val);
export const verifyUsername = (error = {}, val) => {
  if (!val.username) {
    error.username = toast.error('Username is required....!', { theme: 'colored' });
  } else if (val.username.length <= 3) {
    // increase username length later
    error.username = toast.error('Username must be at least 2 characters');
  }
  return error;
};

/**
 * @description - This function is used to validate and verify the login page password
 */
export const validatePassword = (val) => verifyPassword({}, val);
export const verifyPassword = (error = {}, val) => {
  // make a special character validation
  const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

  if (!val.password) {
    error.password = toast.error('Password is required....!', { theme: 'colored' });
  } else if (val.password.length <= 3) {
    error.password = toast.error('Password must be at least 2 characters');
  } else if (!specialChars.test(val.password)) {
    error.password = toast.error('Password must contain a special character');
  }
  return error;
};

/**
 * @description - This function is used to validate and verify the reset page password
 */
export const validateResetPassword = (val) => {
  const err = verifyPassword({}, val);

  if (val.password !== val.confirmPassword) {
    err.exist = toast.error('Password does not match', { theme: 'colored' });
  }
  return err;
};

/**
 * @description - This function is used to validate and verify register info and email
 */
export const validateRegister = (val) => {
  const error = verifyUsername({}, val);
  verifyPassword(error, val);
  emailVerify(error, val);

  return error;
};

export const emailVerify = (error = {}, val) => {
  const regEx = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  if (!val.email) {
    error.email = toast.error('Email is required....!', { theme: 'colored' });
  } else if (!val.email.includes(' ')) {
    error.email = toast.error('Email must contain @');
  } else if (regEx.test(val.email)) {
    error.email = toast.error('Invalid email address');
  }
  return error;
};

/**
 * @description - This function is used to validate and verify profile page
 */
export const validateProfile = (val) => {
  const error = emailVerify({}, val);
  return error;
};
