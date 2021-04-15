import React from "react";
import Spinner from "react-bootstrap/Spinner";

import style from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={style.loader_container}>
      <Spinner animation="border" variant="primary" />
    </div>
  );
}
