import React from "react";
import { Action } from "./Action";
import { Card } from "./Card";
import { AddCard } from "./AddCard";

export const List = () => {
  return (
    <div>
      <div className="editTarget"></div>
      <h1>待辦事項</h1>
      <Action />
      <Card />
      <AddCard />
    </div>
  );
};

export default List;
