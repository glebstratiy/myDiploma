import s from "./DoctorPage.module.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";

const DoctorPage = (props) => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/");
        const foundDoctor = response.data.find((doctor) => doctor._id === id);
        setDoctor(foundDoctor);
        console.log(foundDoctor);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={s.content}>
      <h1 className={s.title}>
        {doctor.name} {doctor.surname}, {doctor.age}
      </h1>
      <div className={s.content_header}>
        <div className={s.avatar}>
          <img src={doctor.image} alt="avatar" />
        </div>
        <div className={s.bio}>
          <h2 className={s.bio_title}>Про лікаря</h2>
          <p className={s.bio_text}>{doctor.description}</p>
        </div>
      </div>
      <div className={s.content_body}>
        <h2 className={s.title}>Спеціалізація</h2>
        <p className={s.bio_text}>{doctor.specialization}</p>
        <h2 className={s.title}>Мобільний номер</h2>
        <p className={s.bio_text}>{doctor.tel}</p>
      </div>

      <div className={s.zapis}>
        <NavLink to="/appointment">
          <Button variant="contained" color="primary">
            Записатися
          </Button>
        </NavLink>
      </div>
    </div>
  );
};

export default DoctorPage;
