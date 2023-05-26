import s from "./Services.module.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

const Services = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/services");
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={s.content}>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Послуга</th>
            <th>Ціна</th>
            <th>Опис</th>
            <th>Тривалість</th>
          </tr>
        </thead>
        <tbody>
        {data.map(service => (
          <tr key={service.id}>
            <td>{service.name}</td>
            <td>{service.price}</td>
            <td>{service.description}</td>
            <td>{service.duration} хв</td>
          </tr>
        ))}
      </tbody>
      </table>
    </div>
  );
};

export default Services;
