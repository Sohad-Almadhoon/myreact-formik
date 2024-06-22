import { useState } from "react";
import { AdvancedForm } from "./AdvancedForm";
import BasicForm from "./BasicForm";

const App = () => {
  const [form, setForm] = useState("basic");

  return (
    <>
      <div className="tabs">
        <span onClick={() => setForm("basic")}>Basic Form</span>
        <span onClick={() => setForm("advanced")}>Advanced Form</span>
      </div>
      {form === "basic" ? <BasicForm /> : <AdvancedForm />}
    </>
  );
};

export default App;
