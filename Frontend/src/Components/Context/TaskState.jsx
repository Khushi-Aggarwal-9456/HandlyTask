import React from 'react';
import TaskContext from './TaskContext';

const TaskState = (props) => {

  const tasks = [
    {
      "title": "T1",
      "description": "this is T1",
      "status": "C",
      "priority": "Y",
      "duedate": "01-08-2025",
      "assignedto": "Khushi"
    },
    {
      "title": "T2",
      "description": "this is T2",
      "status": "C",
      "priority": "Y",
      "duedate": "01-08-2025",
      "assignedto": "Gangesh"
    },
    {
      "title": "T3",
      "description": "this is T3",
      "status": "C",
      "priority": "Y",
      "duedate": "01-08-2025",
      "assignedto": "Khushi"
    },
    {
      "title": "T4",
      "description": "this is T4",
      "status": "C",
      "priority": "Y",
      "duedate": "01-08-2025",
      "assignedto": "Khushi"
    }
  ];

  return (
    <TaskContext.Provider value={{ tasks }}>
      {props.children}
    </TaskContext.Provider>
  )
}

export default TaskState;
