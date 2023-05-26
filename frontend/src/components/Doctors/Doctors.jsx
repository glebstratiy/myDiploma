import DoctorCard from "./DoctorCard/DoctorCard";
import s from "./Doctors.module.css";
import "bootstrap/dist/css/bootstrap.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Doctors = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/");
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={s.content}>
      <h2 className={s.title}>Наші лікарі:</h2>
      {data.length > 0 ? (
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <DoctorCard
                id={data[0]._id}
                name={data[0].name}
                surname={data[0].surname}
                specialization={data[0].specialization}
                image={data[0].image}
              />
            </div>
            <div className="col-md-4">
              <DoctorCard
                id={data[1]._id}
                name={data[1].name}
                surname={data[1].surname}
                specialization={data[1].specialization}
                image={data[1].image}
              />
            </div>
            <div className="col-md-4">
              <DoctorCard
                id={data[2]._id}
                name={data[2].name}
                surname={data[2].surname}
                specialization={data[2].specialization}
                image={data[2].image}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <DoctorCard
                id={data[3]._id}
                name={data[3].name}
                surname={data[3].surname}
                specialization={data[3].specialization}
                image={data[3].image}
              />
            </div>
            <div className="col-md-4">
              <DoctorCard
                id={data[4]._id}
                name={data[4].name}
                surname={data[4].surname}
                specialization={data[4].specialization}
                image={data[4].image}
              />
            </div>
            <div className="col-md-4">
              <DoctorCard
                id={data[5]._id}
                name={data[5].name}
                surname={data[5].surname}
                specialization={data[5].specialization}
                image={data[5].image}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <DoctorCard
                id={data[6]._id}
                name={data[6].name}
                surname={data[6].surname}
                specialization={data[6].specialization}
                image={data[6].image}
              />
            </div>
            <div className="col-md-4">
              <DoctorCard
                id={data[7]._id}
                name={data[7].name}
                surname={data[7].surname}
                specialization={data[7].specialization}
                image={data[7].image}
              />
            </div>
            <div className="col-md-4">
              <DoctorCard
                id={data[8]._id}
                name={data[8].name}
                surname={data[8].surname}
                specialization={data[8].specialization}
                image={data[8].image}
              />
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
export default Doctors;
