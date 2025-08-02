
import { useState } from 'react';
import TaskContext from './TaskContext';

const TaskState = (props) => {

  // const host = "https://inotebook-backend-gx6p.onrender.com";
  // const host = "http://localhost:5000";
  const host = "https://tasky-backend-hnww.onrender.com";

  const tempNotes = [];
  const tempUsers = [];

  const [notes, setNotes] = useState(tempNotes);
  const [alertMessage, setAlertMessage] = useState("");
  const [toShow, toggleToShow] = useState(false);
  const [userAuth, setUserAuth] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userType, setUserType] = useState("");

  const [users, setUsers] = useState(tempUsers);

  // fetching all the notes

  const fetchAllNotes = async () => {
    // console.log("in fetchAllNotes ");
    const response = await (fetch(`${host}/tasky/tasks/fetchalltasks`, {
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
    console.log(allNotes);
    setNotes(allNotes);
  }

  const fetchAllUsers = async () => {
    const response = await (fetch(`${host}/tasky/auth/getallusers`, {
      method: "POST"
    }));
    const json = await response.json();
    console.log(json);
    let allUsers = json.users;
    console.log('email: ');
    let newUsers = [];

    allUsers.map((user) => {
      if(String(user.email) !== String(userEmail)){
        newUsers.push(user);
      }
    });

    setUsers(newUsers);
  }

  // adding a new note

  const addNote = async (title, description, status, priority, duedate, assignedto) => {

    // Now we are going to make API calls 

    const response = await (fetch(`${host}/tasky/tasks/addtasks`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'auth-token': userAuth
        // 'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg4YmUwZjYxMjJhMjdiNjgzYmI1ZDdhIn0sImlhdCI6MTc1NDA3MzAzNn0.hqGbhNehdBCGqyQL1-CGSDID-eAVNSiA_0WznNBK9gI"
      },
      body: JSON.stringify({ title, description, status, priority, duedate, assignedto })
    }));

    // setNotes(notes.concat(note));
  }

  // updating a notes

  const updateNote = async (id, title, description, status, priority, assignedto) => {

    // Now we are going to make API calls 
    // alert("id to updtae: "+id);

    const response = await (fetch(`${host}/tasky/tasks/updatetask/${id}`, {
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

    const response = await (fetch(`${host}/tasky/tasks/deletetask/${id}`, {
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

  const deleteUser = async (id) => {
    const response = await (fetch(`${host}/tasky/auth/deleteuser/${id}`, {
      method: "DELETE",
      // headers: {
      //   'Content-Type': 'application/json',
      //   'auth-token': userAuth
      //   // 'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg4YmUwZjYxMjJhMjdiNjgzYmI1ZDdhIn0sImlhdCI6MTc1NDA3MzAzNn0.hqGbhNehdBCGqyQL1-CGSDID-eAVNSiA_0WznNBK9gI"
      // }

    }));
    const json = await response.json();
    console.log(json.message);
  }

  const updateUser = async (id, role) => {

    // Now we are going to make API calls 
    // alert("id to updtae: "+id);

    const response = await (fetch(`${host}/tasky/tasks/updatetask/${id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
        // 'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjg4YmUwZjYxMjJhMjdiNjgzYmI1ZDdhIn0sImlhdCI6MTc1NDA3MzAzNn0.hqGbhNehdBCGqyQL1-CGSDID-eAVNSiA_0WznNBK9gI"
      },
      body: JSON.stringify({ role })
    }));


    // for(let g=0;g<notes.length;g++){
    //     if(notes[g]._id === id){
    //         notes[g].title = title;
    //         notes[g].description = description;
    //     }
    // }
  }

  return (
    <TaskContext.Provider value={{ notes, addNote, updateNote, deleteNote, fetchAllNotes, alertMessage, setAlertMessage, toShow, toggleToShow, userAuth, setUserAuth, userEmail, setUserEmail, userType, setUserType, users, setUsers, fetchAllUsers, deleteUser, updateUser }}>
      {props.children}
    </TaskContext.Provider>
  )
}

export default TaskState;

