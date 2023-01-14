import * as yup from "yup";
const personalSchema = yup.object().shape({
    username: yup.string().max(8).required(),
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    email: yup.string().email().required(),
    number: yup.number().positive().required(),
    age: yup.number().positive().required(),
    gender: yup.string().required(),
    resume: yup.mixed().required(),
    // university: yup.string().required(),
    // city: yup.string().required(),
    // degree: yup.string().required(),
    // branch: yup.string().required(),
    

})
export default personalSchema;