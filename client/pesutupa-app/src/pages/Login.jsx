import { Button, Callout, FormGroup, InputGroup } from "@blueprintjs/core";
import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userContext, setUserContext] = useContext(UserContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const genericErrorMessage = "Something went wrong! Please try again later.";
    const url = "http://localhost:8081/";

    fetch(url + "users/login", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: email, password }),
    })
      .then(async (response) => {
        setIsSubmitting(false);
        if (!response.ok) {
          if (response.status === 400) {
            setError("Please fill all the fields correctly!");
          } else if (response.status === 401) {
            setError("Invalid email and password combination.");
          } else {
            setError(genericErrorMessage);
          }
        } else {
          const data = await response.json();
          setUserContext((oldValues) => {
            return { ...oldValues, token: data.token };
          });
        }
      })
      .catch((error) => {
        setIsSubmitting(false);
        setError(genericErrorMessage);
      });
  };

  return (
    <>
      {error && <Callout intent="danger">{error}</Callout>}
      <form onSubmit={formSubmitHandler} className="auth-form">
        <FormGroup label="Email" labelFor="email">
          <InputGroup
            id="email"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(x) => setEmail(x.target.value)}
          />
        </FormGroup>
        <FormGroup label="Password" labelFor="password">
          <InputGroup
            id="password"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(x) => setPassword(x.target.value)}
          />
        </FormGroup>
        <Button
          intent="primary"
          color="primary"
          fill
          type="submit"
          disabled={isSubmitting}
          text={`${isSubmitting ? "Signing in" : "Sign In"}`}
        />
      </form>
    </>
  );
};

export default Login;
