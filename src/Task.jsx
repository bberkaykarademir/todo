import React from "react";

const Task = ({ todo, id, removeItem }) => {
  return (
    <div className="item">
      {todo}
      <button onClick={()=>{removeItem(id)}} className="delete">X</button>
    </div>
  );
};

export default Task;
