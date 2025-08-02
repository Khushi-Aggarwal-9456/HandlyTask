import React, { useContext, useRef, useState } from 'react'
import taskContext from '../Context/TaskContext';
import "./Design.css";

export default function IndividualUser(props) {

    const { email, role, _id } = props.user;
    const context = useContext(taskContext);
    const { deleteUser, updateUser } = context;

    const [eRole, setERole] = useState("");

    const handleERole =(event) => {
        setERole(event.target.value);
    }

    const ref = useRef(null);
    const refClose = useRef(null);

    const updateAnUser = () => {
        ref.current.click();
        setERole(role);
        updateUser(_id, role);
    }

    return (
        <div className="indiTask">
            <div className="emailicon" style={{
                border: "1px solid black",
                width: "60%",
                padding: "1%",
                margin: "auto",
                marginTop: "3%"
            }}>
                <div className="d-flex justify-content-between picons">
                    <p style={{
                        fontSize: "25px",
                        fontWeight: "bold"
                    }}>{email}</p>
                    <div style={{
                        // border: "1px solid black",
                        width: "15%",
                        marginTop: "9px",
                    }} className="d-flex justify-content-between ">
                        <i class="fa-solid fa-pen" style={{
                            fontSize: "22px"
                        }} onClick={updateAnUser} />
                        <i class="fa-solid fa-trash" style={{
                            fontSize: "22px",
                            marginLeft: "2%"
                        }} onClick={() => { deleteUser(_id) }} />
                    </div>
                </div>
                <p style={{
                    fontSize: "18px",
                    fontWeight: "bolder"
                }}>User: {role}</p>
            </div>

            {/* <!-- Button trigger modal --> */}
            <button style={{
                display: "none"
            }} type="button" ref={ref} class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Update User</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" readOnly value={props.user.email} />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Role</label>
                                    <input type="text" class="form-control" id="exampleInputPassword1" value={eRole} onChange={handleERole} />
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" ref={refClose}>Close</button>
                            <button type="button" class="btn btn-primary">Update User</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
