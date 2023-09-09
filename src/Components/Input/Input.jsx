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
  placeholder
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
          className={
            "block w-full rounded-md mb-2 px-5 border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 " +
            inputClassName
          }
        />
      </div>
    </>
  );
};

export default Input;
