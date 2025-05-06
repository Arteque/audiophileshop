import { useEffect, useState, FC } from "react";
import Class from "./InputText.module.scss";

interface InputTextProps {
  label: string;
  type:"text" | "number" | "phone" | "email";
  name: string;
  infoText?: string;
  placeholder ?: string;
  required ?: boolean;
}


const InputText: FC<InputTextProps> = ({ label,type, name, infoText, placeholder, required }) => {



  const [inputValue, setInputValue] = useState("")

  const nameval = /^[A-Z]/

  const inputChangeHandler = (e:any) => {
  
    const value = e.target.value
  
    setInputValue(value)

   console.log(nameval.test(inputValue))

  }
  

  return (
    <div className={Class.inputContainer}>
      <label htmlFor="input">
        <span className="text">{label}</span>
        <span className="info-label">{infoText}</span>
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        required={required}
        value={inputValue}
        onChange={(e:any) => inputChangeHandler(e)}
      />
    </div>
  );
};

export default InputText;
