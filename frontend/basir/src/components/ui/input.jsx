// src/components/ui/input.jsx
import React from "react";

export const Input = ({ type, value, onChange, placeholder, className }) => {
  return (
    <input
      type={type || "text"}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`h-[40px] w-full bg-gray-100 pl-4 rounded-lg outline-none ${className}`}
    />
  );
};
