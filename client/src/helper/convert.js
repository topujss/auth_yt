// export const convert = async (file) => {
//   try {
//     const fileReader = new FileReader();
//     fileReader.readAsDataURL(file);

//     console.log(fileReader);

//     fileReader.onload = () => {
//       const base64 = fileReader.result;
//       return base64;
//     };

//     console.log(fileReader.result);
//   } catch (error) {
//     return error;
//   }
// };

export const convert = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};
