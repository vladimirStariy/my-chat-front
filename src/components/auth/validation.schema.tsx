import * as yup from "yup";

export const authValidationSchema = yup.object().shape({
    email: yup.string().required("Email is required field."),
    password: yup.string().required("Password is required field."),
    username: yup.string().required("Name is a required field."),
});

export const loginValidationSchema = yup.object().shape({
    email: yup.string().required("Email is required field."),
    password: yup.string().required("Password is required field."),
});