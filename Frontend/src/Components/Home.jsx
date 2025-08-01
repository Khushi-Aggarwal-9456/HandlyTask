import React, { useContext } from 'react';
import TaskContext from "./Context/TaskContext";

export default function Home() {

  const context = useContext(TaskContext);
  const { info } = context;

  return (
    <div>
      <div className="container">
        <h1>Name: {info.name}</h1>
      </div>
    </div>
  )
}
