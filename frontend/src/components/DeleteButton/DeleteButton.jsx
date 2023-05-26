import React from "react";
import Button from "@mui/material/Button";
import { red } from "@mui/material/colors";

const DeleteButton = ({ onClick }) => {
  return (
    <Button variant="contained" style={{ backgroundColor: red[500], color: "white" }} onClick={onClick}>
      Видалити
    </Button>
  );
};

export default DeleteButton;
