import React from "react";
import { UseFormRegister } from "react-hook-form";
import { LoginForm } from "../types";

interface SelectFieldProps {
  register: UseFormRegister<LoginForm>;
  name: keyof LoginForm;
  options: string[];
}

const SelectField: React.FC<SelectFieldProps> = ({
  register,
  name,
  options,
}) => (
  <div className="flex flex-col gap-1">
    <div className="font-semibold">Salary</div>
    <select
      {...register(name)}
      className="border border-gray-300 rounded-md p-2"
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default SelectField;
