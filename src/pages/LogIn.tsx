import { useAuthenticator } from "@aws-amplify/ui-react";
import { signIn } from "aws-amplify/auth";
import type { FormEvent } from "react";

interface SignInFormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  password: HTMLInputElement;
}

interface SignInForm extends HTMLFormElement {
  readonly elements: SignInFormElements;
}

export default function LogIn() {
  const { user } = useAuthenticator((context) => [context.user]);
  async function handleSubmit(event: FormEvent<SignInForm>) {
    event.preventDefault();
    const form = event.currentTarget;
    // ... validate inputs
    await signIn({
      username: form.elements.email.value,
      password: form.elements.password.value,
    });
  }

  if (user) {
    return <p>Welcome back, {user.username}!</p>;
  }

  return (
    <main className="no-scrollbar h-dvh snap-y snap-mandatory overflow-y-scroll">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 w-full">
        <label htmlFor="email" className="w-full">
          <input
            type="text"
            id="email"
            name="email"
            className=" border-2 rounded p-4 py-1 w-full"
            autoComplete="username"
            placeholder="Email"
            required
            autoFocus
          />
        </label>
        <label htmlFor="password" className="w-full">
          <input
            type="password"
            id="password"
            name="password"
            className=" border-2 rounded p-4 py-1 w-full"
            autoComplete="current-password"
            placeholder="Password"
            required
          />
        </label>
        <input
          type="submit"
          className=" bg-slate-50 text-brandBlue rounded px-4 py-2"
        />
      </form>
    </main>
  );
}
