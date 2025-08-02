import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import taskContext from '../Context/TaskContext';
import validator from "validator";

export default function Signup() {

  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRole = (event) => {
    setRole(event.target.value);
  }

  const handleEmail = (event) => {
    setEmail(event.target.value);
  }

  const handlePassword = (event) => {
    setPassword(event.target.value);
  }

  const navigate = useNavigate();
  const context = useContext(taskContext);
  const { setUserAuth, setUserEmail } = context;

  const createUser = async () => {
    if (role === "" && email === "" && password === "") {
      setErrorMessage("enter all values");
    } else if (role === "") {
      setErrorMessage("enter role");
    } else if (email === "") {
      setErrorMessage("enter email");
    } else if (password === "") {
      setErrorMessage("enter password");
    } else {
      if (!validator.isEmail(email)) {
        setErrorMessage("enter a valid email");
      } else if (password.length < 5) {
        setErrorMessage("enter password bigger than 5 characters");
      } else if (role.length < 5) {
        setErrorMessage("enter role bigger than 5 characters");
      } else {
        const response = await fetch("https://tasky-backend-hnww.onrender.com/tasky/auth/createuser", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password, role })
        });

        const json = await response.json();
        if (json.success) {
          setErrorMessage(json.message);
          setTimeout(() => {
            navigate("/home");
            setUserAuth(json.authToken);
            setUserEmail(email);
          }, 1500);
        } else {
          setErrorMessage(json.message);
        }
        console.log(json.response);
      }
    }
  }

  return (
    <>
      <h1 style={{
        marginLeft: "12%",
        marginTop: "5%"
      }}>User Signup</h1>
      <div className='container login' style={{
        // border : "1px solid black",
        margin: "2% auto",
        padding: "2%",
        width: "80%"
      }}>

        <div className="mb-3">
          <label style={{ fontWeight: "bolder" }} for="exampleInputPassword1" className="form-label">Email</label>
          <input type="email" className="form-control" id="exampleInputPassword1" value={email} onChange={handleEmail} />
        </div>

        <div className="mb-3">
          <label style={{ fontWeight: "bolder" }} for="exampleInputPassword1" className="form-label">Password</label>
          <input type="text" className="form-control" id="exampleInputPassword1" value={password} onChange={handlePassword} />
        </div>

         <div className="mb-3">
          <label style={{ fontWeight: "bolder" }} for="exampleInputEmail1" className="form-label">Role</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={role} onChange={handleRole} />
        </div>

        <p style={{
          fontWeight: "bolder",
          color: "red"
        }}>{errorMessage}</p>

        <button type="submit" className="btn btn-warning loginButton" onClick={createUser}>Signup</button>
      </div>
    </>
  )
}




