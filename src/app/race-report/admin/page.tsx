"use client";
import React, { FC, useEffect, useState } from "react";
import { getCurrentUser } from "@aws-amplify/auth";
import { redirect } from "next/navigation";

const AdminPage: FC = () => {
  // const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCurrentUser()
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        // Redirect to login if not authenticated
        redirect("/");
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome to the admin dashboard.</p>
    </div>
  );
};

export default AdminPage;
