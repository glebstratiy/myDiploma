import Appointments from './Appointments/Appointments';
import classes from './Profile.module.css';
import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState({})
  const token = localStorage.getItem("token"); 

  if (!token) {
    window.location.href = '/login'; 
  }

  useEffect(() => {
    const fetchUserInfo = async () => {
      const userInfo = await axios.get("http://localhost:3001/user", {
        headers: {
          Authorization: token,
        },
      });

      if (userInfo) {
        setUser(userInfo.data.user)
      }
    };

    fetchUserInfo();
  }, []);

  return (
    <div className={classes.content}>
      <div className={classes.background}>
        <img
          src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
          className={classes.background_image}
        />
      </div>
      <div className={classes.ava}>
        <img
          src="https://www.pngitem.com/pimgs/m/22-223968_default-profile-picture-circle-hd-png-download.png"
          alt="ava"
        />
      </div>
      <div className={classes.bio}>
        <h3><span className={classes.bio_title}>Ім'я користувача: {user.username}</span></h3>
        <h3><span className={classes.bio_title}>Email: {user.email}</span></h3>
      </div>
      <Appointments />
    </div>
  );
};

export default Profile;
