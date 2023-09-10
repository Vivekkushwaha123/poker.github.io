import React from "react";

const Input = ({
  htmlFor,
  label,
  inputId,
  inputName,
  type,
  handleChange,
  inputClassName,
  maxLength,
  placeholder,
}) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <label
          htmlFor={htmlFor}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
      </div>
      <div className="mt-2">
        <input
          onChange={handleChange}
          maxLength={maxLength}
          id={inputId}
          name={inputName}
          placeholder={placeholder}
          type={type}
          autoComplete="off"
          className={inputClassName + " p-3 border border-1 border-black rounded-lg"}
        />
      </div>
    </>
  );
};

export default Input;
