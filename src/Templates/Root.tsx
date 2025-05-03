import { Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"
const Root = () => {
  return (
    <>
    <header>Header</header>
     <Outlet /> 
     <footer>Footer</footer>

     <ToastContainer />
    </>
  )
}

export default Root
