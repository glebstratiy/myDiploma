import { Button } from "@mui/material";
import s from "./DoctorCard.module.css";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const DoctorCard = (props) => {
  return (
    <div className={s.card}>
      <img src={props.image} alt="" className={s.avatar} />
      <div className={s.card_container}>
        <h4 className={s.card_title}>
          <b>
            {props.name} {props.surname}
          </b>
        </h4>
        <p className={s.text}>{props.specialization}</p>
        <div className={s.card_btn}>
          <NavLink to={`/doctors/${props.id}`}>
            <Button variant="contained" color="primary">
              Детальніше
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
