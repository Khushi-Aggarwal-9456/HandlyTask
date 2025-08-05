import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Routing from './Components/Routing'
import TaskState from './Components/Context/TaskState'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Routing /> */}
    <TaskState>
      <Routing />
    </TaskState>
  </StrictMode>,
)
