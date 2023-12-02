import React, { useState } from "react";
import { Validator } from "validator";

const EmailInput = ({ onChange }) => {
  const [email, setEmail] = useState("");

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const isEmailValid = Validator.isEmail(email);

  return (
    <input
      type="email"
      name="email"
      value={email}
      onChange={handleChange}
      placeholder="Enter your email address"
      disabled={!isEmailValid}
    />
  );
};

export default EmailInput;
