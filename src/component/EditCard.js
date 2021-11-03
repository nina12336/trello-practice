import React from "react";

export const EditCard = () => {
  return (
    <div>
      <input placeholder={cardContent}></input>
      <button>儲存</button>
      <button>刪除</button>
    </div>
  );
};

export default EditCard;
