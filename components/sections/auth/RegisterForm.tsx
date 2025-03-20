"use client";

import { User } from "@prisma/client";
import { Formik } from "formik";
import { useRouter } from "next/navigation";
import { LockKeyhole, Mail } from "lucide-react";
import { ErrorMessage } from "../form-elements/messages/ErrorMessage";
import Link from "next/link";
import { CustomIconButton, CustomIconInput } from "../form-elements";

type InitialRegisterValues = Pick<User, "email" | "password">;

const handleApiErrors = (
  status: number,
  setErrors: (errors: Partial<InitialRegisterValues>) => void
) => {
  const errorMessages: Record<number, Partial<InitialRegisterValues>> = {
    400: {
      email: "Email and password are required.",
      password: "Email and password are required.",
    },
    409: {
      email: "User with this email already exists.",
    },
  };

  const defaultError = {
    email: "Something went wrong. Please try again later.",
    password: "Something went wrong. Please try again later.",
  };

  setErrors(errorMessages[status] || defaultError);
};

const registerUser = async (values: InitialRegisterValues) => {
  const res = await fetch("/api/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  });

  const data = await res.json();
  return { res, data };
};

const RegisterForm = () => {
  const router = useRouter();

  const handleRegister = async (
    values: InitialRegisterValues,
    {
      setErrors,
    }: { setErrors: (errors: Partial<InitialRegisterValues>) => void }
  ) => {
    try {
      const { res, data } = await registerUser(values);

      if (res.status === 201) {
        alert(data.message);
        router.push("/auth/login");
      } else {
        handleApiErrors(res.status, setErrors);
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
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={handleRegister}
    >
      {({ handleSubmit, values, handleChange, isSubmitting, errors }) => (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 max-w-sm mx-auto w-full"
        >
          <CustomIconInput
            type="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange("email")}
            required
            className="border p-2 rounded w-full"
          >
            <Mail size={16} strokeWidth={2} aria-hidden="true" />
          </CustomIconInput>

          <CustomIconInput
            type="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange("password")}
            required
            className="border p-2 rounded w-full"
          >
            <LockKeyhole size={16} strokeWidth={2} aria-hidden="true" />
          </CustomIconInput>

          <CustomIconButton
            type="submit"
            disabled={isSubmitting || !values.email || !values.password}
          >
            Register
          </CustomIconButton>

          <div className="flex items-center justify-center gap-2">
            <p>Already have an account?</p>
            <p className="text-blue-500 hover:underline cursor-pointer">
              <Link href="/auth/login">Login</Link>
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

export default RegisterForm;
