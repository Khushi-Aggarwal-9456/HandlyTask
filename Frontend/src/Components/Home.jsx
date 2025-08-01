import React, { useContext } from 'react';
import TaskContext from "./Context/TaskContext";
import IndividualTask from './Tasks/IndividualTask';

export default function Home() {

  const context = useContext(TaskContext);
  const { tasks } = context;

  return (
    <div>
      <div className="container">
        <h1>Available Tasks: </h1>
        <div className="row">
          {
            tasks.length > 0 ?
              tasks.map((task) => {
                return (
                  <div className='col-md-4'>
                    <IndividualTask task={task} />
                  </div>
                )
              })
              :
              <h3>No tasks available</h3>
          }
        </div>
      </div>
    </div>
  )
}
