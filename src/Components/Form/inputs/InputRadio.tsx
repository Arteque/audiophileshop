import { FC } from "react";
import Labels from "../Assets/Labels"
import Class from "./Input.module.scss"

interface InputRadioProps{
    label:string;
    name:string;
    infoText?: string;
}

const InputRadio:FC<InputRadioProps> = ({label, infoText, name}) => {
  return (
    <div className={Class.inputContainer}>
        <input type="radio" name={name} id={name} />
        <Labels label={label} infoText={infoText} name={name} />
    </div>
  )
}

export default InputRadio
