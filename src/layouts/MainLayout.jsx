import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
import { Toaster } from 'sonner'

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Toaster richColors />
    </>
  )
}

export default MainLayout