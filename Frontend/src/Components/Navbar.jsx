import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import taskContext from './Context/TaskContext';
import UserType from './UserType';
// import "./Style.css";

export default function Navbar() {

    const context = useContext(taskContext);
    const { userAuth, userEmail } = context;
    const [isUser, toggleUser] = useState(false);

    useEffect(() => {
        if (userAuth !== "")
            toggleUser(true);
    });

    return (
        <nav class="navbar navbar-expand-lg custom-navbar">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Handly task</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    </ul>

                    {
                        isUser === true ?
                            <UserType />
                            :
                            <div className="d-flex" role="search">
                                <Link className="btn btn-secondary mx-2" type="submit" to="/">Login</Link>
                                <Link className="btn btn-secondary mx-1" type="submit" to="/signup" style={{
                                    marginLeft: "5%"
                                }}>SignUp</Link>
                            </div>
                    }

                </div>
            </div>
        </nav>
    )
}
