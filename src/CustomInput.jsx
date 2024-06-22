import { useField } from "formik";
import React from "react";

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  console.log("Field", field);
  console.log("Meta" , meta);
  return (
    <div className="form-control">
      <label>{label}</label>
      <input
        {...props}
        {...field}
        className={meta.touched && meta.error ? "input-error" : ""}
      />
      {meta.error && meta.touched && <p className="msg-error">{meta.error}</p>}
    </div>
  );
};

export default CustomInput;
