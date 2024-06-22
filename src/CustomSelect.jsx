import { useField } from "formik";
import React from "react";

const CustomSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="form-control">
      <label>{label}</label>
      <select
        {...props}
        {...field}
        className={meta.touched && meta.error ? "input-error" : ""}
      />
      {meta.error && meta.touched && <p className="msg-error">{meta.error}</p>}
    </div>
  );
};

export default CustomSelect;
