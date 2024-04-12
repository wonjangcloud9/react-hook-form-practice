import React from "react";
import { UseFormRegister, FieldError } from "react-hook-form";
import { LoginForm } from "../types";

const EmailField: React.FC<EmailFieldProps> = ({
  register,
  name,
  validation,
  error,
}) => (
  <div className="flex flex-col gap-1">
    <div className="font-semibold">Email</div>
    <div className="text-sm text-gray-500">
      * Only naver.com email is allowed *
    </div>
    <input
      {...register(name, validation)}
      type="email"
      className="border border-gray-300 rounded-md p-2"
      placeholder="Email"
    />
    {error && error.message && (
      <span className="text-red-500 text-sm">{error.message}</span>
    )}
  </div>
);

export default EmailField;
interface EmailFieldProps {
  register: UseFormRegister<LoginForm>;
  name: keyof LoginForm;
  validation: object;
  error?: FieldError;
}
