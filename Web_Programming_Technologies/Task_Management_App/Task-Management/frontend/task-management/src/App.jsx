import { AddNewTask } from "./components/AddNewTask"
import { DashBoard } from "./components/DashBoard"
import { NavigationBar } from "./components/NavigationBar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { TaskList } from "./components/TaksList"
import { ToastContainer } from "react-toastify"
import { TaskEdit } from "./components/TaskEdit"
function App() {

  

  return (





    
    <BrowserRouter>
    <NavigationBar />
    <Routes>
      <Route path="/" element={<DashBoard />}/>
      <Route path="/task-add" element={<AddNewTask />}/>
      <Route path="/task-list" element={<TaskList />}/>
      <Route path="/task-edit/:id" element={<TaskEdit />}/>
    </Routes>
    <ToastContainer></ToastContainer>
    </BrowserRouter>
    
  )
}

export default App
