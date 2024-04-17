"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import AuthInput from "../../../components/ui/AuthInput";
import Button from "../../../components/ui/Button";
import { useMutation } from "@tanstack/react-query";
import fetcher from "../../../utils/fetcher";
import { apiUrl } from "../../../utils/apiurl";
import { redirect } from "next/navigation";
import { useLocalStorage } from "usehooks-ts";
interface LoginFormData {
  user: string;
  password: string;
}

export default function LoginPage() {
  const [, setUserId] = useLocalStorage("userId", "");
  const [, setToken] = useLocalStorage("token", "");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ user: string; password: string }>();

  const {
    data,
    error,
    isPending: isLoading,
    mutate,
  } = useMutation<{ userId: string; token: string }, Error, LoginFormData>({
    mutationFn: (formData) =>
      fetcher(`${apiUrl}/auth/login`, {
        options: { method: "POST", body: formData },
      }),
    mutationKey: ["Login info"],
  });

  const submitHandler: SubmitHandler<{ user: string; password: string }> = (
    data
  ) => mutate(data);

  if (error) {
    console.log(error);
    return <h1>{error.message}</h1>;
  }

  if (isLoading) return <h1>Loading...</h1>;

  if (data) {
    setUserId(data.userId);
    setToken(data.token)
    redirect("/chat");
  }
  return (
    <main className="space-x px-10">
      <h1 className="text-5xl font-bold">
        Welcome <span className="block">back!</span>
      </h1>
      <form
        className="flex flex-col gap-y-4 mt-10"
        onSubmit={handleSubmit(submitHandler)}
      >
        <AuthInput
          type="text"
          id="user"
          name="user"
          placeholder="Username / email"
          register={register("user")}
        />
        <AuthInput
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          register={register("password")}
        />
        <div className="flex flex-col mt-5">
          <Button>Submit</Button>
        </div>
      </form>
    </main>
  );
}
