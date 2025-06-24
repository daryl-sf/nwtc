"use client";

import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import Link from "next/link";

const formFields = {
  signIn: {
    username: {
      placeholder: "Enter your email",
      isRequired: true,
      label: "Email",
    },
  },
  signUp: {
    username: {
      placeholder: "Enter your email",
      isRequired: true,
      label: "Email",
      order: 1,
    },
    password: {
      placeholder: "Enter your password",
      isRequired: true,
      label: "Password",
      order: 2,
    },
    confirm_password: {
      placeholder: "Confirm your password",
      isRequired: true,
      label: "Confirm Password",
      order: 3,
    },
  },
};

export default function LoginPage() {
  return (
    <Authenticator formFields={formFields}>
      {({ signOut, user }) => (
        <main>
          <h1>Hello, {user?.username}</h1>
          <button onClick={signOut}>Sign out</button>
          <Link href="/race-report/admin">Race Report Admin</Link>
        </main>
      )}
    </Authenticator>
  );
}
