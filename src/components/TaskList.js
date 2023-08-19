import React from "react";
import Task from "./Task";

function TaskList({tasks}) {
  
  return (
    <div className="tasks">
      {tasks.map((task, index)=> {
        return <Task key={index} text={task.test} category={task.category}/>
      })}
    </div>
  );
}

export default TaskList;
