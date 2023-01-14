import * as yup from "yup";
const tocSchema = yup.object().shape({
  toc: yup.boolean().oneOf([true],'Message'),
  pp: yup.boolean().oneOf([true],'Message')
});
export default tocSchema;
