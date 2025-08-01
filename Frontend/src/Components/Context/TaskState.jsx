
import { useState } from 'react';
import TaskContext from './TaskContext';

const TaskState = (props) => {

  // const host = "https://inotebook-backend-gx6p.onrender.com";
  const host = "http://localhost:5000";

  const tempNotes = [];

  const [notes, setNotes] = useState(tempNotes);
  const [alertMessage, setAlertMessage] = useState("");
  const [toShow, toggleToShow] = useState(false);
  const [userAuth, setUserAuth] = useState("");
  const [userEmail, setUserEmail] = useState("");

  // fetching all the notes

  const fetchAllNotes = async () => {
    const response = await (fetch(`${host}/handlytask/tasks/fetchalltasks`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'auth-token': userAuth
        // 'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg4YmUwZjYxMjJhMjdiNjgzYmI1ZDdhIn0sImlhdCI6MTc1NDA3MzAzNn0.hqGbhNehdBCGqyQL1-CGSDID-eAVNSiA_0WznNBK9gI"
      },
      // body : JSON.stringify({title, description})
    }));

    const json = await response.json();
    const allNotes = json.tasks;
    setNotes(allNotes);
  }

  // adding a new note

  const addNote = async (title, description, status, priority, assignedto) => {

    // Now we are going to make API calls 

    const response = await (fetch(`${host}/handlytask/tasks/addtasks`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'auth-token': userAuth
        // 'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg4YmUwZjYxMjJhMjdiNjgzYmI1ZDdhIn0sImlhdCI6MTc1NDA3MzAzNn0.hqGbhNehdBCGqyQL1-CGSDID-eAVNSiA_0WznNBK9gI"
      },
      body: JSON.stringify({ title, description, status, priority, assignedto })
    }));

    // setNotes(notes.concat(note));
  }

  // updating a notes

  const updateNote = async (id, title, description, status, priority, assignedto) => {

    // Now we are going to make API calls 
    // alert("id to updtae: "+id);

    const response = await (fetch(`${host}/handlytask/tasks/updatetask/${id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
        'auth-token': userAuth
        // 'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg4YmUwZjYxMjJhMjdiNjgzYmI1ZDdhIn0sImlhdCI6MTc1NDA3MzAzNn0.hqGbhNehdBCGqyQL1-CGSDID-eAVNSiA_0WznNBK9gI"
      },
      body: JSON.stringify({ title, description, status, priority, assignedto })
    }));


    // for(let g=0;g<notes.length;g++){
    //     if(notes[g]._id === id){
    //         notes[g].title = title;
    //         notes[g].description = description;
    //     }
    // }
  }

  // delete a note

  const deleteNote = async (id) => {

    const response = await (fetch(`${host}/handlytask/tasks/deletetask/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'auth-token': userAuth
        // 'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg4YmUwZjYxMjJhMjdiNjgzYmI1ZDdhIn0sImlhdCI6MTc1NDA3MzAzNn0.hqGbhNehdBCGqyQL1-CGSDID-eAVNSiA_0WznNBK9gI"
      }
    }));


    // alert("note to delete, with ID: "+id);

    const json = response.json();
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
  }

  return (
    <TaskContext.Provider value={{ notes, addNote, updateNote, deleteNote, fetchAllNotes, alertMessage, setAlertMessage, toShow, toggleToShow, userAuth, setUserAuth, userEmail, setUserEmail }}>
      {props.children}
    </TaskContext.Provider>
  )
}

export default TaskState;




// import TaskContext from "./TaskContext";

// const TaskState = (props) => {

//   const initialTasks = [
//     {
//       "title": "T1",
//       "description": "this is T1",
//       "status": "C",
//       "priority": "Y",
//       "duedate": "01-08-2025",
//       "assignedto": "Khushi"
//     },
//     {
//       "title": "T2",
//       "description": "this is T2",
//       "status": "C",
//       "priority": "Y",
//       "duedate": "01-08-2025",
//       "assignedto": "Gangesh"
//     },
//     {
//       "title": "T3",
//       "description": "this is T3",
//       "status": "C",
//       "priority": "Y",
//       "duedate": "01-08-2025",
//       "assignedto": "Khushi"
//     },
//     {
//       "title": "T4",
//       "description": "this is T4",
//       "status": "C",
//       "priority": "Y",
//       "duedate": "01-08-2025",
//       "assignedto": "Khushi"
//     }
//   ];

//   const [tasks, setTasks] = useState(initialTasks);

//   const addNewTask = async (title, description, status, priority, duedtae, assignedto) => {
//     const newTask = {
//       "title": title,
//       "description": description,
//       "status": status,
//       "priority": priority,
//       "duedate": duedtae,
//       "assignedto": assignedto
//     };

//     setTasks(tasks.concat(newTask));
//     console.log(tasks);
//   }

//   return (
//     <TaskContext.Provider value={{ tasks, addNewTask }}>
//       {props.children}
//     </TaskContext.Provider>
//   )
// }

// export default TaskState;
