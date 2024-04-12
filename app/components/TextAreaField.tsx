// TextAreaField.tsx
import React from "react";
import { UseFormRegister, FieldError } from "react-hook-form";
import { LoginForm } from "../types";

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  register,
  name,
  rows,
  validation,
  error,
}) => (
  <div className="flex flex-col gap-1">
    <div className="font-semibold">Tell us what dreams are</div>
    <textarea
      {...register(name, validation)}
      rows={rows}
      className="border border-gray-300 rounded-md p-2 resize-vertical"
    />
    {error && error.message && (
      <span className="text-red-500 text-sm">{error.message}</span>
    )}
  </div>
);

export default TextAreaField;

interface TextAreaFieldProps {
  register: UseFormRegister<LoginForm>;
  name: keyof LoginForm;
  rows: number;
  validation: object;
  error?: FieldError;
}
