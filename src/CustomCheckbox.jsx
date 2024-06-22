import { useField } from "formik";
import React from "react";

const CustomCheckbox = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="checkbox">
      <input
        {...props}
        {...field}
        className={meta.touched && meta.error ? "input-error" : ""}
      />
      <span>I accept the terms of serviced</span>

      {meta.error && meta.touched && <p className="msg-error">{meta.error}</p>}
    </div>
  );
};

export default CustomCheckbox;
