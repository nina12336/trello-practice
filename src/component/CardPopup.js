import React from "react";

export const CardPopup = (inputItem, addItem, closeCardPopup) => {
  return (
    <div>
      <input
        onChange={inputItem}
        value="inputContent"
        placeholder="為這張卡片輸入標題..."
      ></input>
      <button onClick={addItem}>新增卡片</button>

      <button onClick={closeCardPopup}>X</button>
    </div>
  );
};

export default CardPopup;
