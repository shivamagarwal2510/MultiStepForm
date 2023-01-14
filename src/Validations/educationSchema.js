import * as yup from "yup";
const educationSchema = yup.object().shape({
  
  university: yup.string().required(),
  city: yup.string().required(),
  degree: yup.string().required(),
  branch: yup.string().required(),
});
export default educationSchema;
