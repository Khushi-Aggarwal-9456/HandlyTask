import React, { useContext, useState, useEffect, useRef } from 'react'
import TaskContext from './Context/TaskContext';
import IndividualTask from './Tasks/IndividualTask';
// import "../Style.css";

export default function Home() {

  // notes, addNote, updateNote, deleteNote, fetchAllNotes, alertMessage, setAlertMessage, toShow, toggleToShow, userAuth, setUserAuth, userEmail, setUserEmail

  const context = useContext(TaskContext);
  const { notes, fetchAllNotes, addNote, updateNote, setAlertMessage, toggleToShow, userAuth } = context;

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");
  const [duedate, setDueDate] = useState("");
  const [assign, setAssign] = useState("");
  const [errorMessage, changeErrorMessage] = useState("");

  const [etitle, esetTitle] = useState("");
  const [edesc, esetDesc] = useState("");
  const [estatus, esetStatus] = useState("");
  const [epriority, esetPriority] = useState("");
  const [eduedate, esetDueDate] = useState("");
  const [eassign, esetAssign] = useState("");
  const [eerrorMessage, changeeErrorMessage] = useState("");

  const [noteToUpdate, changeNoteToUpdate] = useState("");


  useEffect(() => {
    fetchAllNotes();
    // if (userAuth === "")
    //   toggleIsUser(false);
    // else
    //   toggleIsUser(true);
  });

  const handleTitle = (e) => {
    setTitle(e.target.value)
  }

  const handleDesc = (e) => {
    setDesc(e.target.value)
  }

  const handleStatus = (e) => {
    setStatus(e.target.value)
  }

  const handlePriority = (e) => {
    setPriority(e.target.value)
  }

  const handleDueDate = (e) => {
    setDueDate(e.target.value)
  }

  const handleAssign = (e) => {
    setAssign(e.target.value)
  }

  const ehandleTitle = (e) => {
    esetTitle(e.target.value)
  }

  const ehandleDesc = (e) => {
    esetDesc(e.target.value)
  }

  const ehandleStatus = (e) => {
    esetStatus(e.target.value)
  }

  const ehandlePriority = (e) => {
    esetPriority(e.target.value)
  }

  const ehandleDueDate = (e) => {
    esetDueDate(e.target.value)
  }

  const ehandleAssign = (e) => {
    esetAssign(e.target.value)
  }

  const validateTask = () => {
    if (title === "" && desc === "" && status === "" && priority === "" && duedate === "" && assign === "") {
      changeErrorMessage("enter all values");
      return false;
    }
    else if (title === "") {
      changeErrorMessage("enter title");
      return false;
    }
    else if (desc === "") {
      changeErrorMessage("enter description");
      return false;
    }
    else if (status === "") {
      changeErrorMessage("enter status");
      return false;
    }
    else if (priority === "") {
      changeErrorMessage("enter priority");
      return false;
    }
    else if (duedate === "") {
      changeErrorMessage("enter duedate");
      return false;
    }
    else if (assign === "") {
      changeErrorMessage("enter assigned to");
      return false;
    } else {
      changeErrorMessage("");
      return true;
    }
  }

  const addTask = () => {
    addNote(title, desc, status, priority, assign);
    toggleToShow(true);
    setAlertMessage("New Task added successfully");
    setTimeout(() => {
      toggleToShow(false);
      setAlertMessage("");
    }, 1500);
    // if (validateTask()) {
    //   addNote(title, desc);
    //   toggleToShow(true);
    //   setAlertMessage("New Task added successfully");
    //   setTimeout(() => {
    //     toggleToShow(false);
    //     setAlertMessage("");
    //   }, 1500);
    // }
    // console.log(title, desc, status, priority, duedate, assign);
    // addNewTask(title, desc, status, priority, duedate, assign);
  }

  const updateNNote = (note) => {
    ref.current.click();
    esetTitle(note.title);
    esetDesc(note.description);
    esetStatus(note.status);
    esetPriority(note.priority);
    esetAssign(note.assignedto);
    changeNoteToUpdate(note);
  }

  const confirmUpdate = () => {

    changeeErrorMessage("");
    updateNote(noteToUpdate._id, etitle, edesc, estatus, epriority, eassign);
    toggleToShow(true);
    setAlertMessage("Task updated successfully");
    setTimeout(() => {
      toggleToShow(false);
      setAlertMessage("");
    }, 1500);
    refClose.current.click();

    // alert("updating note ID: "+noteToUpdate._id);
    // if (enewNoteTitle === "" && enewNoteDesc === "") {
    //   changeeErrorMessage("enter updated title & description");
    // } else if (enewNoteTitle === "") {
    //   changeeErrorMessage("enter updated title");
    // } else if (enewNoteDesc === "") {
    //   changeeErrorMessage("enter updated desription");
    // } else {
    //   changeeErrorMessage("");
    //   updateNote(noteToUpdate._id, enewNoteTitle, enewNoteDesc);
    //   toggleToShow(true);
    //   setAlertMessage("Note updated successfully");
    //   setTimeout(() => {
    //     toggleToShow(false);
    //     setAlertMessage("");
    //   }, 1500);
    //   refClose.current.click();
    // }
  }

  const ref = useRef(null);
  const refClose = useRef(null);

  return (
    <div>

      <div className="container">
        <div className="newtask d-flex justify-content-between">
          <h3>Add new task</h3>
          <i classsName="fa-solid fa-plus" />
        </div>

        <div style={{
          margin: 'auto',
          marginTop: '3%',
          width: '80%',
          border: "1px solid black",
          padding: "2%"
        }}>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Title</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={title} onChange={handleTitle} />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Description</label>
            <input type="text" class="form-control" id="exampleInputPassword1" value={desc} onChange={handleDesc} />
          </div>

          <div className="stapri d-flex justify-content-between">
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Status</label>
              <input type="text" class="form-control" id="exampleInputPassword1" value={status} onChange={handleStatus} />
            </div>

            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Priority</label>
              <input type="text" class="form-control" id="exampleInputPassword1" value={priority} onChange={handlePriority} />
            </div>
          </div>

          <div className="ddassi d-flex justify-content-between">
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Due Date</label>
              <input type="date" class="form-control" id="exampleInputPassword1" value={duedate} onChange={handleDueDate} />
            </div>

            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Assigned To</label>
              <input type="text" class="form-control" id="exampleInputPassword1" value={assign} onChange={handleAssign} />
            </div>
          </div>

          <p style={{
            color: 'red',
            fontWeight: "bolder"
          }}>{errorMessage}</p >

          <button type="submit" class="btn btn-primary" onClick={addTask}>Add Task</button>
        </div>

        {/* <!-- Button trigger modal --> */}
        <button style={{
          display: "none"
        }} ref={ref} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Launch demo modal
        </button>

        {/* <!-- Modal --> */}
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Updating a note</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>

              <div className="modal-body">
                <div className="newNoteForm">
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      value={etitle}
                      onChange={ehandleTitle}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                    <textarea
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      value={edesc}
                      onChange={ehandleDesc}
                      style={{
                        height: "150px"
                      }}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Status</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      value={estatus}
                      onChange={ehandleStatus}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Priority</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      value={epriority}
                      onChange={ehandlePriority}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Due Date</label>
                    <input
                      type="date"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      value={eduedate}
                      onChange={ehandleDueDate}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Assigned To</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      value={eassign}
                      onChange={ehandleAssign}
                    />
                  </div>

                </div>
              </div>

              <p style={{
                color: 'red',
                fontWeight: "bolder",
                marginLeft: "5%",
                marginTop: "-3%"
              }}>{eerrorMessage}</p>

              <div className="modal-footer">
                <button ref={refClose} type="button" className="btn btn-secondary loginButton" data-bs-dismiss="modal" >Close</button>
                <button type="button" className="btn btn-warning loginButton" onClick={confirmUpdate} >Update Note</button>
              </div>
            </div>
          </div>
        </div>


      </div>

      <div className="container" style={{
        marginTop: "3%"
      }}>
        <h4>Available Tasks: </h4>
        <div className="row">
          {
            notes.length > 0 ?
              notes.map((task) => {
                return (
                  <div className="col-md-4">
                    <IndividualTask task={task} updateNote={updateNNote} />
                  </div>
                )
              })
              :
              <h5>No tasks available</h5>
          }
        </div>
      </div>
    </div>
  )
}
