"use client";

import AuthInput from "../../../components/ui/AuthInput";
import Button from "../../../components/ui/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { SignupInputs } from "../../../types/interfaces";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import fetcher from "../../../utils/fetcher";
import { apiUrl } from "../../../utils/apiurl";
import { redirect } from "next/navigation";

interface SignupFormData {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export default function SignupPage() {
  // const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupInputs>();

  const {
    data,
    error,
    isPending: isLoading,
    isSuccess,
    mutate,
  } = useMutation<{ id: string }, Error, SignupFormData>({
    mutationFn: (formData) =>
      fetcher(`${apiUrl}/auth/signup`, {
        options: { method: "POST", body: formData },
      }),
    mutationKey: ["Sign up info"],
  });

  const submitHandler: SubmitHandler<SignupInputs> = (data) => {
    delete data.confirmPassword;
    mutate(data);
  };

  if (error) {
    console.log(error);
    return <h1>{error.message}</h1>;
  }

  if (isLoading) return <h1>Loading...</h1>;

  if (data) redirect("/auth/login");

  return (
    <main className="space-x px-10">
      <h1 className="text-5xl font-bold">
        New <span className="block">Account</span>
      </h1>
      <form
        className="flex flex-col gap-y-4 mt-10"
        onSubmit={handleSubmit(submitHandler)}
      >
        <AuthInput
          type="text"
          id="firstName"
          placeholder="First name"
          register={register("firstName")}
        />
        <AuthInput
          type="text"
          id="lastName"
          placeholder="Last name"
          register={register("lastName")}
        />
        <AuthInput
          type="text"
          id="username"
          placeholder="Username"
          register={register("username")}
        />
        <AuthInput
          type="email"
          id="email"
          placeholder="Email"
          register={register("email")}
        />
        <AuthInput
          type="password"
          id="password"
          placeholder="Password"
          register={register("password")}
        />
        <AuthInput
          type="password"
          id="confirmPassword"
          placeholder="Confirm password"
          register={register("confirmPassword")}
        />
        <div className="flex flex-col mt-5">
          <Button>Submit</Button>
        </div>
      </form>
    </main>
  );
}
