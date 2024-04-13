"use client";

import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegisterReturn<string>;
}

export default function AuthInput({ placeholder, id, type, register }: Props) {
  return (
    <div className="flex flex-col">
      <label className="text-sm" htmlFor={id}>
        {placeholder}
      </label>
      <input
        className="bg-transparent outline-none border-b-2 text-sm text-secondary border-dark-gray focus:border-primary"
        type={type ? type : "text"}
        id={id}
        {...register}
      />
    </div>
  );
}
