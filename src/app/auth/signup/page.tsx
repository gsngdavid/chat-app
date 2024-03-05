import Button from "../../../components/ui/Button";

export default function LoginPage() {
  return (
    <main className="space-x px-10">
      <h1 className="text-5xl font-bold">
        New <span className="block">Account</span>
      </h1>
      <form className="flex flex-col gap-y-4 mt-10">
        <div className="flex flex-col">
          <label className="text-sm" htmlFor="firstName">
            First Name
          </label>
          <input
            className="bg-transparent outline-none border-b-2 text-sm text-secondary border-dark-gray focus:border-primary"
            type="text"
            name="firstName"
            id="firstName"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm" htmlFor="lastName">
            Last Name
          </label>
          <input
            className="bg-transparent outline-none border-b-2 text-sm text-secondary border-dark-gray focus:border-primary"
            type="text"
            name="lastName"
            id="lastName"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-sm" htmlFor="email">
            Email
          </label>
          <input
            className="bg-transparent outline-none border-b-2 text-sm text-secondary border-dark-gray focus:border-primary"
            type="text"
            name="email"
            id="email"
          />
        </div>
        <div className="flex flex-col mt-5">
          <Button>Submit</Button>
        </div>
      </form>
    </main>
  );
}
