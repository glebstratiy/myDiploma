import s from "./Login.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import axios from "axios";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/login", {
        username,
        password,
      });

      const { token } = response.data;

      localStorage.setItem("token", token);
      window.location.href = '/'; 
    } catch (error) {
      setError("Невірний логін або пароль");
    }
  };

  return (
    <div className={s.content}>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Логін
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
        {error && <p className={s.error}>{error}</p>}
        <Button variant="contained" color="primary" type="submit">
          Увійти
        </Button>
      </form>
    </div>
  );
};

export default Login;
