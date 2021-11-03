import React from "react";
import CardPopup from "./CardPopup";

export const AddCard = () => {
  return (
    <div>
      <button onClick={<CardPopup />}>＋新增卡片</button>
    </div>
  );
};

export default AddCard;
