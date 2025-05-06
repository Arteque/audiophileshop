import { FC } from "react";


interface labelsProps {
    label:string;
    name:string;
    infoText?:string;
}

const Labels:FC<labelsProps> = ({label, infoText, name}) => {
  return (
    <label htmlFor={name}>
      <span className="text">{label}</span>
      <span className="info-label">{infoText}</span>
    </label>
  );
};

export default Labels;
