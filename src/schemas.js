import * as yup from "yup";
// const passwordRules = /^(?m.*\d)(?m.*[a-z])(?m.*[A-Z]).{5,}$/;
export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a vaild email!")
    .required("Required!"),
  age: yup.number().integer().positive().required("Required!"),
  password: yup
    .string()
    .min(5)
    // .matches(passwordRules, { message: "Please create a stranger password" })
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});
export const advancedSchema = yup.object().shape({
  username: yup
    .string()
    .min(2, "Username must be at least 4 characters long")
    .required("Required"),
  jobType: yup
    .string()
    .oneOf(["designer", "developer", "manager", "other"])
    .required("Required!"),
  acceptedTos: yup.boolean().oneOf([true], "Please accept the terms of sevice"),
});
