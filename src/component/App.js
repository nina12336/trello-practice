import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import List from "./List";

const App = () => {
  const [waitTodoArray, setWaitTodoArray] = useState([]);
  const [nowDoingArray, setNowDoingArray] = useState([]);
  const [finishArray, setFinishArray] = useState([]);
  const [waitTodoInput, setWaitTodoInput] = useState("");
  const [nowDoingInput, setNowDoingInput] = useState("");
  const [finishInput, setFinishInput] = useState("");

  const handleWaitTodoSubmit = () => {
    if (waitTodoInput !== "") {
      setWaitTodoArray([...waitTodoArray, { waitTodoInput, id: uuidv4() }]);
      setWaitTodoInput("");
    } else {
      alert("請輸入待辦事項");
    }
  };

  const handleAddNowDoingSubmit = () => {
    if (nowDoingInput !== "") {
      setNowDoingArray([...nowDoingArray, { nowDoingInput, id: uuidv4() }]);
      setNowDoingInput("");
    } else {
      alert("請輸入進行中事項");
    }
  };

  const handleAddFinishSubmit = () => {
    if (finishInput !== "") {
      setFinishArray([...finishArray, { finishInput, id: uuidv4() }]);
      setFinishInput("");
    } else {
      alert("請輸入完成事項");
    }
  };

  const handleAddWaitTodo = (e) => {
    setWaitTodoInput(e.target.value);
  };

  const handleAddNowDoing = (e) => {
    setNowDoingInput(e.target.value);
  };

  const handleAddFinish = (e) => {
    setFinishInput(e.target.value);
  };

  // const dr = document.querySelector('waitTodoArray[i].id');
  // dr.addEventListener('dragstart', dragStart);

  return (
    <div>
      {/* <div className={"waitTodo"}>
        <input onChange={handleAddWaitTodo} value={waitTodoInput}></input>
        <button onClick={handleWaitTodoSubmit}>新增</button>
        <ul>
          {waitTodoArray.map((waitTodos) => (
            <li key={waitTodos.id} draggable={true}>
              {waitTodos.waitTodoInput}
            </li>
          ))}
        </ul>
      </div>

      <div className={"nowDoing"}>
        <input onChange={handleAddNowDoing} value={nowDoingInput}></input>
        <button onClick={handleAddNowDoingSubmit}>新增</button>
        <ul>
          {nowDoingArray.map((nowTodos) => (
            <li key={nowTodos.id}>{nowTodos.nowDoingInput}</li>
          ))}
        </ul>
      </div>

      <div className={"finish"}>
        <input onChange={handleAddFinish} value={finishInput}></input>
        <button onClick={handleAddFinishSubmit}>新增</button>
        <ul>
          {finishArray.map((finishTodos) => (
            <li key={finishTodos.id}>{finishTodos.finishInput}</li>
          ))}
        </ul>
      </div>
    </div> */}
      <List
        // id={waitTodos.id}
        // item={waitTodos.waitTodoInput}
        inputItem={handleAddWaitTodo}
        inputContent={waitTodoInput}
        addItem={handleWaitTodoSubmit}
        array={waitTodoArray}
      />
      <List
        // id={waitTodos.id}
        // item={waitTodos.waitTodoInput}
        inputItem={handleAddWaitTodo}
        inputContent={waitTodoInput}
        addItem={handleWaitTodoSubmit}
        array={waitTodoArray}
      />
      <List
        // id={waitTodos.id}
        // item={waitTodos.waitTodoInput}
        inputItem={handleAddWaitTodo}
        inputContent={waitTodoInput}
        addItem={handleWaitTodoSubmit}
        array={waitTodoArray}
      />
    </div>
  );
};

export default App;
