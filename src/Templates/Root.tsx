import { Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "../Styles/App.scss"
import "../Styles/Buttons/Button.scss"


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
