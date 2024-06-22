import { useFormik } from "formik";
import { basicSchema } from "./schemas";

const BasicForm = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };
  const {
    errors,
    values,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
  } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });
  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <div className="form-control">
        {" "}
        <label htmlFor="email">Email</label>
        <input
          id="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          type="email"
          placeholder="Enter your email"
          className={errors.email && touched.email ? "input-error" : ""}
        />
        {errors.email && touched.email && (
          <p className="msg-error">{errors.email}</p>
        )}
      </div>
      <div className="form-control">
        {" "}
        <label htmlFor="age">Age</label>
        <input
          id="age"
          value={values.age}
          onChange={handleChange}
          onBlur={handleBlur}
          type="number"
          placeholder="Enter your age"
          className={errors.age && touched.age ? "input-error" : ""}
        />
        {errors.age && touched.age && <p className="msg-error">{errors.age}</p>}
      </div>
      <div className="form-control">
        {" "}
        <label htmlFor="password">Password</label>
        <input
          id="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          type="password"
          placeholder="Enter your password"
          className={errors.password && touched.password ? "input-error" : ""}
        />
        {errors.password && touched.password && (
          <p className="msg-error">{errors.password}</p>
        )}
      </div>

      <div className="form-control">
        {" "}
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          id="confirmPassword"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          type="password"
          placeholder="Enter your password again"
          className={
            errors.confirmPassword && touched.confirmPassword
              ? "input-error"
              : ""
          }
        />
        {errors.confirmPassword && touched.confirmPassword && (
          <p className="msg-error">{errors.confirmPassword}</p>
        )}
      </div>
      <button disabled={isSubmitting} type="submit">
        Submit
      </button>
    </form>
  );
};

export default BasicForm;
