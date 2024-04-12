import React from "react";
import { UseFormRegister, FieldError } from "react-hook-form";
import { LoginForm } from "../types";

const TextField: React.FC<TextFieldProps> = ({
  register,
  name,
  type,
  validation,
  placeholder,
  error,
}) => (
  <div className="flex flex-col gap-1">
    <div className="font-semibold">Introduce yourself</div>
    <input
      {...register(name, validation)}
      type={type}
      className="border border-gray-300 rounded-md p-2"
      placeholder={placeholder}
    />
    {error && error.message && (
      <span className="text-red-500 text-sm">{error.message}</span>
    )}
  </div>
);

export default TextField;
interface TextFieldProps {
  register: UseFormRegister<LoginForm>;
  name: keyof LoginForm;
  type: string;
  validation: object;
  placeholder?: string;
  error?: FieldError;
}
