import React, { useContext } from 'react';
import taskContext from './Context/TaskContext';
import { Link } from 'react-router-dom';

export default function UserType() {

    const context = useContext(taskContext);
    const { userType, userEmail } = context;

    return (
        <div>
            {
                userType === "admin" ?
                    <div>
                        <button className='btn btn-secondary'>{((userEmail).charAt(0)).toUpperCase()}</button>
                        <Link to = "/users"><button className='btn btn-secondary' style={{
                            marginLeft: "10px"
                        }}>USERS</button></Link>
                    </div>
                    :
                    <button className='btn btn-secondary'>{((userEmail).charAt(0)).toUpperCase()}</button>
            }
        </div>
    )
}
