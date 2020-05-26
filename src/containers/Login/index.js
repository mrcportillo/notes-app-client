import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { useAppContext } from "../../libs/context-lib";
import { onError } from "../../libs/error-lib";
import { useFormFields } from "../../libs/hook-lib";
import Button from "../../components/Button";
import "./login.css";

export default function Login() {
  const [fields, handleFliedChange] = useFormFields({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const { userHasAuthenticated } = useAppContext();

  function validateForm() {
    return fields.email.length > 0 && fields.password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      setLoading(true);
      await Auth.signIn(fields.email, fields.password);
      userHasAuthenticated(true);
    } catch (e) {
      onError(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <ControlLabel>Email</ControlLabel>
          <FormControl
            autoFocus
            type="email"
            value={fields.email}
            onChange={handleFliedChange}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            value={fields.password}
            onChange={handleFliedChange}
            type="password"
          />
        </FormGroup>
        <Button
          block
          bsSize="large"
          isLoading={loading}
          disabled={!validateForm()}
          type="submit"
        >
          Login
        </Button>
      </form>
    </div>
  );
}
