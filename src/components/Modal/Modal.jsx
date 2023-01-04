import React from "react";
import "../../scss/components/Modal/Modal.scss";
import { inputInfo } from "./inputInfo";
import ModalInfo from "./Modal.Info";
import { HEADER_MENU_TYPE } from "../../utils/constant";
import { closeModalAction } from "../../redux/reducer/modal";
import { useDispatch } from "react-redux";
const Modal = () => {
  const dispatch = useDispatch();
  const onClose = () => {
    dispatch(closeModalAction({ payload: { isOpenModal: false } }));
  };
  return (
    <div className="modal-page">
      <div className="close" onClick={onClose}></div>
      <div className="title-container">
        <h3 className="title">Musterbestellung</h3>
      </div>

      <div className="info-container">
        <form>
          <div className="info-text">
            {inputInfo.map((item) => (
              <ModalInfo item={item} />
            ))}
          </div>
        </form>
      </div>

      <div className="policy-container">
        <div className="policy-check">
          <input type="checkbox" />
          <span> I AGREE TO THE PRIVACY POLICY.</span>
        </div>
        <div className="policy-captcha">
          <input type="checkbox" />
          <span> 로봇이 아님다</span>
        </div>
      </div>
      <div className="button-container">
        <button> Absenden</button>
      </div>
    </div>
  );
};

export default Modal;
