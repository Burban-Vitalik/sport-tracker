"use client";

import { Formik } from "formik";
import gsap from "gsap";
import Cookies from "js-cookie";
import { LockKeyhole, LogIn, Mail } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

import { CustomIconButton, CustomIconInput } from "@/components/form-elements";
import { ErrorMessage } from "@/components/form-elements/messages/ErrorMessage";
import { MyPartial, MyPick } from "@/types/custom-types";
import { User } from "@prisma/client";
import { loginUser } from "@/lib/auth/login";
import { shakeAnimation } from "@/animation/shakeAnimation";

type InitialLoginValues = MyPick<User, "email" | "password">;

const LoginForm = () => {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const errorRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (formRef.current) {
      gsap.from(formRef.current, {
        opacity: 0,
        y: 50,
        scale: 0.9,
        duration: 0.8,
        ease: "power2.out",
      });
    }
  }, []);

  const handleLogin = async (
    values: InitialLoginValues,
    {
      setErrors,
    }: { setErrors: (errors: MyPartial<InitialLoginValues>) => void }
  ) => {
    const handleError = (message: string) => {
      setErrors({
        email: message,
        password: message,
      });
      shakeAnimation(errorRef.current);
    };

    try {
      const res = await loginUser(values);

      if (res.statusCode === 200) {
        Cookies.set("token", res.data.access_token, { expires: 1 });
        router.push("/dashboard");
      } else {
        handleError("Invalid credentials. Please try again.");
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      handleError("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <Formik initialValues={{ email: "", password: "" }} onSubmit={handleLogin}>
      {({ values, handleChange, handleSubmit, isSubmitting, errors }) => (
        <form
          ref={formRef}
          onSubmit={(e) => {
            e.preventDefault();
            if (buttonRef.current) {
              gsap.fromTo(
                buttonRef.current,
                { scale: 1 },
                {
                  scale: 0.9,
                  duration: 0.1,
                  yoyo: true,
                  repeat: 1,
                  ease: "power2.inOut",
                }
              );
            }
            handleSubmit();
          }}
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
            ref={buttonRef}
            type="submit"
            disabled={isSubmitting || !values.email || !values.password}
            className="flex items-center justify-center gap-2 px-4 py-2 text-white bg-cyan-600 rounded-lg hover:bg-cyan-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition"
          >
            <LogIn size={16} strokeWidth={2} aria-hidden="true" />
            <span>Login</span>
          </CustomIconButton>

          <div className="flex items-center justify-center gap-2">
            <p>Already have an account?</p>
            <p className="text-blue-500 hover:underline cursor-pointer">
              <Link href="/auth/register">Register</Link>
            </p>
          </div>

          {(errors.email || errors.password) && (
            <div ref={errorRef}>
              <ErrorMessage
                message={
                  (errors.email as string) || (errors.password as string)
                }
              />
            </div>
          )}
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;
