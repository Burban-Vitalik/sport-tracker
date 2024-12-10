"use client";

import { User } from "@prisma/client";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";

type InitialRegisterValues = Pick<User, "email" | "password">;

const RegisterForm = () => {
  const router = useRouter();
  const handleRegister = async (
    values: InitialRegisterValues,
    {
      setErrors,
    }: { setErrors: (errors: Partial<InitialRegisterValues>) => void }
  ) => {
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (res.status === 201) {
        alert(data.message);
        router.push("/auth/login");
        return;
      }

      if (res.status === 400) {
        setErrors({
          email: "Email and password are required.",
          password: "Email and password are required.",
        });
        return;
      }

      if (res.status === 409) {
        setErrors({
          email: "User with this email already exists.",
        });
        return;
      }

      setErrors({
        email: "Something went wrong. Please try again later.",
        password: "Something went wrong. Please try again later.",
      });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setErrors({
        email: "An unexpected error occurred. Please try again later.",
        password: "An unexpected error occurred. Please try again later.",
      });
    }
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={handleRegister}
    >
      {({ handleSubmit, values, handleChange, isSubmitting, errors }) => (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 max-w-sm mx-auto"
        >
          <input
            type="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange("email")}
            required
            className="border p-2 rounded w-full"
          />
          <input
            type="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange("password")}
            required
            className="border p-2 rounded w-full"
          />

          <button
            type="submit"
            disabled={isSubmitting || !values.email || !values.password}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:opacity-50"
          >
            {isSubmitting ? "Wating..." : "Register"}
          </button>

          {errors.password ||
            (errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password || errors.email}
              </p>
            ))}
          <Link href="/auth/login">Login</Link>
        </form>
      )}
    </Formik>
  );
};

export default RegisterForm;
