import { useState, FC } from "react";
import Class from "./Input.module.scss";
import Labels from "../Assets/Labels";

interface InputTextProps {
  label: string;
  type:"text" | "number" | "phone" | "email";
  name: string;
  infoText?: string;
  placeholder ?: string;
  required ?: boolean;
  onChange?:() => void
}


const InputText: FC<InputTextProps> = ({ label,type, name, infoText, placeholder, required, onChange }) => {

  const [inputValue, setInputValue] = useState("")

  const inputHandler = (e:any) => {
    const value = e.target.value
    setInputValue(value)
    onChange
  }
  
  return (
    <div className={Class.inputContainer} data-name="input-name">
      <Labels label={label} infoText={infoText} name={name} />
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        required={required}
        value={inputValue}
        onChange={inputHandler}
      />
    </div>
  );
};

export default InputText;
