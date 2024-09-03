import React from "react";
import "@/scss/components/Modal/Modal.Info.scss";
const ModalInfo = ({ item }) => {
  return (
    <div className="info-text-container">
      <label>{item}</label>
      <input type="text" />
    </div>
  );
};

export default ModalInfo;
