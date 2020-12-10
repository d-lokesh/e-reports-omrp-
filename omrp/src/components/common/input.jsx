import React from "react";

const Input = ({ name, lable, value, onChange, place }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{lable}</label>
      <input
        value={value}
        type="text"
        name={name}
        id={name}
        onChange={onChange}
        className="form-control"
        placeholder={place}
      />
    </div>
  );
};

export default Input;
