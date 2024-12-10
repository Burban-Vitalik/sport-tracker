"use client";

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { Formik } from "formik";
import { User } from "@prisma/client";
import Link from "next/link";

type InitialLoginValues = Pick<User, "email" | "password">;

const LoginForm = () => {
  const router = useRouter();

  const handleLogin = async (
    values: InitialLoginValues,
    { setErrors }: { setErrors: (errors: Partial<InitialLoginValues>) => void }
  ) => {
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (res.ok) {
        Cookies.set("token", data.token, { expires: 1 });
        router.push("/dashboard");
      } else {
        setErrors({
          email: "Invalid credentials. Please try again.",
          password: "Invalid credentials. Please try again.",
        });
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setErrors({
        email: "An unexpected error occurred. Please try again later.",
        password: "An unexpected error occurred. Please try again later.",
      });
    }
  };

  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={handleLogin}>
      {({ values, handleChange, handleSubmit, isSubmitting, errors }) => (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 max-w-sm mx-auto"
        >
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          />

          <button
            type="submit"
            disabled={isSubmitting || !values.email || !values.password}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:opacity-50"
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>

          {errors.password ||
            (errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password || errors.email}
              </p>
            ))}
          <Link href="/auth/register">Register</Link>
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;
