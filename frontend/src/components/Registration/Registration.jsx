import s from "./Registration.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@mui/material/Button";
import axios from "axios";
import React, { useState } from "react";

const Registration = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/users", {
        username,
        email,
        password,
      });
      const { token } = response.data;

      localStorage.setItem("token", token);
      window.location.href = '/'; 
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className={s.content}>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Ім'я
          </label>
          <br />
          <input
            className="form-control"
            type="text"
            placeholder="Name"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <br />
          <input
            className="form-control"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Пароль
          </label>
          <br />
          <input
            className="form-control"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <Button variant="contained" color="primary" type="submit">
          Зареєструватися
        </Button>
      </form>
    </div>
  );
};

export default Registration;
