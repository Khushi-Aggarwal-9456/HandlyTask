import { useEffect, React, useContext } from 'react'
import { createContext } from 'react'
import taskContext from '../Context/TaskContext';
import IndividualUser from './IndividualUser';
import "./Design.css";

export default function AllUsers() {

    const context = useContext(taskContext);
    const { users, fetchAllUsers } = context;

    useEffect(() => {
        fetchAllUsers();
        // if (userAuth === "")
        //   toggleIsUser(false);
        // else
        //   toggleIsUser(true);
    });

    return (
        <div>
            <h1 style={{
                marginTop: "3%",
                marginLeft: "5%"
            }}>Available Users are: </h1>
            <div className="container" style={{
                // border: "1px solid black"
                marginTop: "2%"
            }}>
                <div className="row" style={{
                    // border : "1px solid black"
                }}>
                    {
                        users.length > 0 ?
                            users.map((user) => {
                                return (
                                    <div>
                                        <IndividualUser user={user} />
                                    </div>
                                )
                            })
                            :
                            <h1 style={{
                                marginTop: "3%",
                                marginLeft: "5%"
                            }}>No Users available </h1>
                    }
                </div>
            </div>
        </div>
    )
}
