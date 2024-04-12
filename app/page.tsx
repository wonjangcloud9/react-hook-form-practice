"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import RadioGroup from "./components/RadioGroup";
import SelectField from "./components/SelectField";
import TextField from "./components/TextField";
import TextAreaField from "./components/TextAreaField";
import { LoginForm } from "./types";
import {
  DEPARTMENT_OPTIONS,
  PURPOSE_OPTIONS,
  SALARY_OPTIONS,
} from "./constants";
import EmailField from "./components/EmailField";

export default function Home() {
  const [result, setResult] = React.useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<LoginForm>({
    defaultValues: {
      department: "",
      purpose: "",
      salary: "$50K",
      pr: "",
      dream: "",
      email: "",
    },
  });

  const onValid = (data: LoginForm) => {
    console.log(data);
    setResult(JSON.stringify(data, null, 2));
  };

  const onInvalid = (errors: any) => {
    console.log(errors);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <form
        onSubmit={handleSubmit(onValid, onInvalid)}
        className="flex flex-col gap-4 px-4 py-1 border border-gray-300 rounded-md shadow-md w-[500px]"
      >
        <h1 className="text-4xl font-bold text-center my-2">
          Job Application Form
        </h1>
        <RadioGroup
          label="What department do you want to work for?"
          options={DEPARTMENT_OPTIONS}
          register={register}
          name="department"
        />
        <RadioGroup
          label="Why do you want top join this company?"
          options={PURPOSE_OPTIONS}
          register={register}
          name="purpose"
        />

        <SelectField
          register={register}
          name="salary"
          options={SALARY_OPTIONS}
        />
        <TextField
          register={register}
          name="pr"
          type="text"
          validation={{
            required: "자기소개는 적어도 10글자 이상이어야해용",
            validate: (value: string) =>
              value.length >= 10 || "자기소개는 적어도 10글자 이상이어야해용",
          }}
          error={errors.pr}
        />
        <TextAreaField
          register={register}
          name="dream"
          rows={3}
          validation={{
            required: "꿈은 적어도 50글자 이상이어야해용",
            validate: (value: string) =>
              value.length >= 50 || "꿈은 적어도 50글자 이상이어야해용",
          }}
          error={errors.dream}
        />
        <EmailField
          register={register}
          name="email"
          validation={{
            required: "이메일을 써주세용",
            validate: {
              isNaver: (value: string) =>
                value.includes("naver.com") || "@naver 이메일만 가능해용",
            },
          }}
          error={errors.email}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Give me this job!
        </button>
        <button
          type="button"
          onClick={() => reset()}
          className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
        >
          Reset
        </button>
        {isSubmitSuccessful && result && (
          <div className="text-green-500 font-semibold">{result}</div>
        )}
      </form>
    </div>
  );
}
