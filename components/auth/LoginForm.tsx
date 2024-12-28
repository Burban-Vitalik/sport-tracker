"use client";

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { Formik } from "formik";
import { User } from "@prisma/client";
import Link from "next/link";
import { LockKeyhole, Mail } from "lucide-react";
import { CustomIconButton } from "../form-elements/buttons/CustomIconButton";
import { ErrorMessage } from "../form-elements/messages/ErrorMessage";
import { CustomIconInput } from "../form-elements";

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
          className="flex flex-col gap-4 max-w-sm mx-auto w-full"
        >
          <CustomIconInput
            type="email"
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          >
            <Mail size={16} strokeWidth={2} aria-hidden="true" />
          </CustomIconInput>

          <CustomIconInput
            type="password"
            name="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            required
          >
            <LockKeyhole size={16} strokeWidth={2} aria-hidden="true" />
          </CustomIconInput>

          <CustomIconButton
            type="submit"
            disabled={isSubmitting || !values.email || !values.password}
          >
            Login
          </CustomIconButton>

          <div className="flex items-center justify-center gap-2">
            <p>Already have an account?</p>
            <p className="text-blue-500 hover:underline cursor-pointer">
              <Link href="/auth/register">Register</Link>
            </p>
          </div>

          {(errors.email || errors.password) && (
            <ErrorMessage
              message={errors.email || (errors.password as string)}
            />
          )}
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;
