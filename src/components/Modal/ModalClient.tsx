import React from "react";
import { useSelector } from "react-redux";
import { sampleModalSelector } from "@/redux/reducer/modal";
import Modal from "@/components/Modal/Modal";

export default function ModalClient() {
  const modalState = useSelector(sampleModalSelector);

  return <>{modalState.isOpenModal && <Modal />}</>;
}
