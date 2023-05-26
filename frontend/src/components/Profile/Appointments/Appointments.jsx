import React, { useEffect, useState } from "react";
import axios from "axios";
import Appointment from "./Appointment/Appointment";
import s from "./Appointments.module.css";

const Appointments = () => {
  const [user, setUser] = useState({});
  const [appointments, setAppointments] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchUserInfo = async () => {
      const userInfo = await axios.get("http://localhost:3001/user", {
        headers: {
          Authorization: token,
        },
      });

      if (userInfo) {
        setUser(userInfo.data.user);
        setAppointments(userInfo.data.user.appointments);
      }
    };

    fetchUserInfo();
  }, []);

  return (
    <div className={s.appointments}>
      <h2 className={s.appointments_header}>Записи</h2>
      {appointments.map((appointment) => (
        <Appointment
          key={appointment.id}
          doctor={appointment.doctor}
          service={appointment.service}
          date={appointment.date}
        />
      ))}
    </div>
  );
};

export default Appointments;
