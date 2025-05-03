import { useState } from "react"
import Helmet from "../../Components/Helmet/Helmet"
import ToastInit from "../../Components/Toastify/ToastInit"

const Start = () => {

    const [message, setMessage] = useState("")
    const [messageType, setMessageType] = useState("")

    const clickmeHandler = () => {
        setMessage("Toast Toast Babay!")
        setMessageType("success")
        return <ToastInit message={message} toastType={messageType} />
    } 

   
  return (
    <>
        <Helmet title="Homepage" />
        <h1>Start</h1>
        <button onClick={clickmeHandler}>CLick ME</button>

    </>
  )
}

export default Start
