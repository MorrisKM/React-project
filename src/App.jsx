import {createBrowserRouter, createRoutesFromElements, Route,  RouterProvider } from "react-router"
import Homepage from "./pages/Homepage"
import AddJobPage from "./pages/AddJobPage"
import JobsPage from "./pages/JobsPage"
import JobPage from "./pages/JobPage"
import EditJobPage from './pages/EditJobPage'
import MainLayout from "./layouts/MainLayout"
import { deleteJob, jobLoader } from "./hooks/useFetch"


function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element = {<MainLayout />}>
        <Route index element={ <Homepage />}/>
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/add-job" element={<AddJobPage />}/>
        <Route path="jobs/:id" element = {<JobPage deleteJob={deleteJob} />} loader={jobLoader} />
        <Route path="edit-job/:id" element = {<EditJobPage />} loader={jobLoader} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
