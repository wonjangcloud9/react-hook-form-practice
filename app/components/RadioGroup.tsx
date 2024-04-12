import React from "react";
import { UseFormRegister } from "react-hook-form";
import { LoginForm } from "../types";

const RadioGroup: React.FC<RadioGroupProps> = ({
  label,
  options,
  register,
  name,
}) => (
  <div className="flex flex-col gap-1">
    <div className="font-semibold">{label}</div>
    {options.map((option, index) =>
      index === 0 ? (
        <label
          key={option.value}
          className="flex items-center gap-2 cursor-pointer"
        >
          <input
            type="radio"
            value={option.value}
            {...register(name)}
            defaultChecked
          />
          {option.label}
        </label>
      ) : (
        <label
          key={option.value}
          className="flex items-center gap-2 cursor-pointer"
        >
          <input type="radio" value={option.value} {...register(name)} />
          {option.label}
        </label>
      )
    )}
  </div>
);

export default RadioGroup;

interface RadioGroupProps {
  label: string;
  options: Array<{ value: string; label: string }>;
  register: UseFormRegister<LoginForm>;
  name: keyof LoginForm;
}
