import React, { useState, useEffect } from "react";
import s from "./AppointmentForm.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "@mui/material/Button";
import axios from "axios";

const AppointmentForm = () => {
  const [data, setData] = useState([]);
  const [services, setServices] = useState([]);
  const [doctor, setDoctor] = useState("");
  const [service, setService] = useState("");
  const [date, setDate] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/");
        setData(response.data);
        const response2 = await axios.get("http://localhost:3001/services");
        setServices(response2.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/appointment", {
        token,
        doctor,
        date,
        service,
      });

      const { message } = response.data;

      if (message === "success") {
        window.location.href = "/account";
      }
    } catch (e) {
      console.error(e);
    }
  };

  if (!token) {
    window.location.href = "/login";
    return null;
  }

  return (
    <div className={s.content}>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="doctor" className="form-label">
            Лікарь
          </label>
          <select
            className="form-control"
            id="doctor"
            value={doctor}
            onChange={(event) => setDoctor(event.target.value)}
          >
            <option value="">Оберіть лікаря</option>
            {data.map((doctor) => (
              <option
                key={doctor.id}
                value={`${doctor.name} ${doctor.surname}`}
              >
                {`${doctor.name} ${doctor.surname}`}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            Дата
          </label>
          <input
            type="date"
            className="form-control"
            id="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="doctor" className="form-label">
            Лікарь
          </label>
          <select
            className="form-control"
            id="doctor"
            value={service}
            onChange={(event) => setService(event.target.value)}
          >
            <option value="">Оберіть послугу</option>
            {services.map((service) => (
              <option key={service.id} value={`${service.name}`}>
                {`${service.name}`}
              </option>
            ))}
          </select>
        </div>
        <Button variant="contained" color="primary" type="submit">
          Записатися
        </Button>
      </form>
    </div>
  );
};

export default AppointmentForm;
