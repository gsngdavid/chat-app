import AuthInput from "../../../components/ui/AuthInput";
import Button from "../../../components/ui/Button";

export default function LoginPage() {
  return (
    <main className="space-x px-10">
      <h1 className="text-5xl font-bold">
        Welcome <span className="block">back!</span>
      </h1>
      <form className="flex flex-col gap-y-4 mt-10">
        <AuthInput
          type="text"
          id="username"
          name="username"
          placeholder="Username"
        />
        <AuthInput
          type="password"
          id="password"
          name="password"
          placeholder="Password"
        />
        <div className="flex flex-col mt-5">
          <Button>Submit</Button>
        </div>
      </form>
    </main>
  );
}
