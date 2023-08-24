"use client";
import React, { useEffect, useState } from "react";
import sytles from "./page.module.css";
import { getProviders, signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

const Login = ({ url }) => {
  const session = useSession();
  const router = useRouter();
  const params = useSearchParams();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    setError(params.get("error"));
    setSuccess(params.get("success"));
  }, [params]);

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", {
      email,
      password,
    });
  };

  return (
    <div className={sytles.container}>
      <h1 className={sytles.title}>{success ? success : "Welcome Back"}</h1>
      <h2 className={sytles.subtitle}>Please sign in to see the dashboard.</h2>

      <form onSubmit={handleSubmit} className={sytles.form}>
        <input
          type="text"
          placeholder="Email"
          required
          className={sytles.input}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className={sytles.input}
        />
        <button className={sytles.button}>Login</button>
        {error && error}
      </form>
      <button
        onClick={() => {
          signIn("google");
        }}
        className={sytles.button + " " + sytles.google}
      >
        Login with Google
      </button>
      <span className={sytles.or}>- OR -</span>
      <Link className={sytles.link} href="/dashboard/register">
        Create new account
      </Link>
      {/* <button
        onClick={() => {
          signIn("github");
        }}
        className={styles.button + " " + styles.github}
      >
        Login with Github
      </button> */}
    </div>
  );
};

export default Login;
