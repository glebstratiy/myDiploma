import s from "./Appointment.module.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import DeleteButton from "../../../DeleteButton/DeleteButton";

const Appointment = (props) => {
  const [appointments, setAppointments] = useState([]);
  const token = localStorage.getItem("token");

  if (!token) {
    window.location.href = "/login";
  }

  useEffect(() => {
    const fetchUserInfo = async () => {
      const userInfo = await axios.get("http://localhost:3001/user", {
        headers: {
          Authorization: token,
        },
      });

      if (userInfo) {
        setAppointments(userInfo.data.user.appointments);
      }
    };

    fetchUserInfo();
  }, []);

  const deleteHandle = async (event) => {
    event.preventDefault();

    const appointmentToDelete = appointments.find(
      (appointment) =>
        appointment.doctor === props.doctor &&
        appointment.date === props.date &&
        appointment.service === props.service
    );

    if (appointmentToDelete) {
      const updatedAppointments = appointments.filter(
        (appointment) => appointment !== appointmentToDelete
      );
      setAppointments(updatedAppointments);

      try {
        await axios.put(
          `http://localhost:3001/user/appointments/${appointmentToDelete._id}`,
          { appointments: updatedAppointments },
          {
            headers: {
              Authorization: token,
            },
          }
        );
      } catch (error) {
        console.error(error);
        // Handle error as needed
      }
    }
  };

  const { doctor, date, service } = props;

  return (
    <div className={s.appointment}>
      <div className={s.appointment_container}>
        <div className={s.appointment_info}>
          <h2>Лікарь: {doctor}</h2>
          <h2>Дата: {date}</h2>
          <h2>Послуга: {service}</h2>
        </div>
        <div className={s.dlt}>
          <DeleteButton onClick={deleteHandle} />
        </div>
      </div>
    </div>
  );
};

export default Appointment;
