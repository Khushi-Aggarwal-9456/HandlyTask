import React, { useContext, useEffect, useState } from 'react'
// import taskContext from '../Context/TaskContext';
// import "./Style.css";

import TaskContext from '../Context/TaskContext';

export default function NoteItem(props) {

    const { task, updateNote } = props;
    const context = useContext(TaskContext);
    const { deleteNote, setAlertMessage, toggleToShow } = context;

    return (
        <div className="card my-3">
            <div className="card-body">

                {/* <div className="titleAndIcon d-flex justify-content-between">
                        <h5 className="card-title">{task.title}</h5>
                        <div style={{
                            // border: "1px solid black",
                            width: "25%",
                            marginTop : "2%"
                        }} className="d-flex justify-content-between">
                            <i class="fa-solid fa-pen" onClick={() => {
                                updateNote(task)
                            }} />
                            <i class="fa-solid fa-trash" onClick={() => {
                                deleteNote(task._id)
                                toggleToShow(true)
                                setAlertMessage("Note titles "+task.title+" deleted successfully");
                                setTimeout(() => {
                                    toggleToShow(false);
                                    setAlertMessage("");
                                }, 1500);
                            }} />
                        </div>
                    </div> */}

                <h5 className="card-title">{task.title}</h5>

                <p className="card-text">{task.description}</p>
                <div className="stapri d-flex justify-content-between">
                    <p>{task.status}</p>
                    <p>{task.priority}</p>
                </div>

                <h6>{task.duedate}</h6>

                <p>{task.assignedto}</p>

                <div style={{
                    // border: "1px solid black",
                    width: "70%",
                    marginTop: "2%",
                    padding : "5%",
                    margin : "2% auto"
                }} className="d-flex justify-content-between">
                    <i class="fa-solid fa-pen" onClick={() => {
                        updateNote(task)
                    }} />
                    <i class="fa-solid fa-trash" onClick={() => {
                        deleteNote(task._id)
                        toggleToShow(true)
                        setAlertMessage("Note titles " + task.title + " deleted successfully");
                        setTimeout(() => {
                            toggleToShow(false);
                            setAlertMessage("");
                        }, 1500);
                    }} />
                </div>
            </div>
        </div>

    )
}



// import React from 'react'

// export default function IndividualTask(props) {

//     const { title, description, status, priority, assignedto } = props.task;

//     return (
//         <div class="card">
//             <div class="card-body">
//                 <h5 class="card-title">{title}</h5>
//                 <p class="card-text">{description}</p>
//             </div>
//         </div>
//     )
// }
