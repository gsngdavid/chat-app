"use client"

import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export default function AuthInput({
  placeholder,
  id,
  name,
  type,
  ...props
}: Props) {
  return (
    <div className="flex flex-col">
      <label className="text-sm" htmlFor={id}>
        {placeholder}
      </label>
      <input
        className="bg-transparent outline-none border-b-2 text-sm text-secondary border-dark-gray focus:border-primary"
        type={type ? type : "text"}
        name={name}
        id={id}
        {...props}
      />
    </div>
  );
}
