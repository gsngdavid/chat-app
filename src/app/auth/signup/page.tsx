"use client";

import AuthInput from "../../../components/ui/AuthInput";
import Button from "../../../components/ui/Button";

export default function LoginPage() {
  return (
    <main className="space-x px-10">
      <h1 className="text-5xl font-bold">
        New <span className="block">Account</span>
      </h1>
      <form className="flex flex-col gap-y-4 mt-10">
        <AuthInput
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First name"
        />
        <AuthInput
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last name"
        />
        <AuthInput
          type="text"
          id="username"
          name="username"
          placeholder="Username"
        />
        <AuthInput type="email" id="email" name="email" placeholder="Email" />
        <AuthInput
          type="password"
          id="password"
          name="password"
          placeholder="Password"
        />
        <AuthInput
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm password"
        />
        <div className="flex flex-col mt-5">
          <Button>Submit</Button>
        </div>
      </form>
    </main>
  );
}
