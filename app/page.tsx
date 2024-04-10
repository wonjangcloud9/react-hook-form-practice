"use client";

import React from "react";
import { FieldErrors, useForm } from "react-hook-form";

interface LoginForm {
  name: string;
  email: string;
  password: string;
}

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<LoginForm>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onValid = (data: LoginForm) => {
    console.log(data);
  };

  const onInvalid = (error: FieldErrors) => {
    console.log(error);
  };

  const onReset = () => {
    reset();
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onValid, onInvalid)}
        className="flex flex-col group-[300px] justify-center items-center"
      >
        <input
          {...register("name", { required: "이름을 써주세용." })}
          type="text"
          className="border border-gray-300 rounded-md p-2"
          placeholder="Name"
        />
        {errors.name && (
          <span className="text-red-500 text-sm">{errors.name.message}</span>
        )}

        <input
          {...register("email", {
            required: "이메일을 써주세용",
            validate: {
              isNaver: (value) =>
                value.includes("naver.com") || "@naver 이메일만 가능해용",
            },
          })}
          type="email"
          className="border border-gray-300 rounded-md p-2"
          placeholder="Email"
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}

        <input
          {...register("password", {
            required: "비밀번호는 적어도 10글자 이상이어야해용",
            validate: (value) =>
              value.length >= 10 || "비밀번호는 적어도 10글자 이상이어야해용",
          })}
          type="password"
          className="border border-gray-300 rounded-md p-2"
          placeholder="Password"
        />
        {errors.password && (
          <span className="text-red-500 text-sm">
            {errors.password.message}
          </span>
        )}
        <div className="gap-4 flex mt-5">
          <input
            type="submit"
            value="로그인"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 cursor-pointer"
          />
          <button
            type="button"
            onClick={onReset}
            className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 cursor-pointer"
          >
            초기화
          </button>
        </div>
        {isSubmitSuccessful && (
          <span className="text-green-500">성공적으로 로그인 되었어용</span>
        )}
      </form>
    </div>
  );
}
