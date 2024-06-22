import { Form, Formik } from "formik";
import React from "react";
import CustomInput from "./CustomInput";
import { advancedSchema } from "./schemas";
import CustomSelect from "./CustomSelect";
import CustomCheckbox from "./CustomCheckbox";

export const AdvancedForm = () => {
  const onSubmit = async (values, actions) => {
    console.log(values)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };
  // use formik => initialValues , validationSchema , onSubmit , {isSubmitting}
  return (
    <Formik
      initialValues={{ username: "", jobType: "", acceptedTos: false }}
      validationSchema={advancedSchema}
      onSubmit={onSubmit}>
      {({ isSubmitting }) => (
        <Form>
          {/* handle submit ✖️ */}
          <CustomInput
            label="Username"
            name="username"
            type="text"
            placeholder="Enter your username"
          />
          <CustomSelect
            label="Job Type"
            name="jobType"
            placeholder="Please select a job">
            <option value="">Please select a job type</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="manager">Product Manager</option>
            <option value="other">Other</option>
          </CustomSelect>
          <CustomCheckbox type="checkbox" name="acceptedTos" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};
