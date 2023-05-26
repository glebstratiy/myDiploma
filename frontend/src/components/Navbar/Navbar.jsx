import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.nav_item}>
        <NavLink className={classes.nav_link} to="/account">
          Особистий кабінет
        </NavLink>
      </div>
      <div className={classes.nav_item}>
        <NavLink className={classes.nav_link} to="/doctors">
          Лікарі
        </NavLink>
      </div>
      <div className={classes.nav_item}>
        <NavLink className={classes.nav_link} to="/services">
          Ціни
        </NavLink>
      </div>
      <div className={classes.nav_item}>
        <NavLink className={classes.nav_link} to="/about">
          Про нас
        </NavLink>
      </div>
      <div className={classes.nav_item}>
        <NavLink className={classes.nav_link} to="/contacts">
          Контакти
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
