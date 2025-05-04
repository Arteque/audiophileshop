import Class from "./InputText.module.scss";
const InputText = () => {
  return (
    <div className={Class.inputContainer}>
      <label htmlFor="input">
        <span className="text">Test</span>
      </label>
      <input type="text" name="input" id="input" placeholder="Test..." />
    </div>
  );
};

export default InputText;
