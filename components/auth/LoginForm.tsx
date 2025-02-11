"use client";

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { Formik } from "formik";
import { User } from "@prisma/client";
import Link from "next/link";
import { LockKeyhole, LogIn, Mail } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { CustomIconButton } from "../form-elements/buttons/CustomIconButton";
import { ErrorMessage } from "../form-elements/messages/ErrorMessage";
import { CustomIconInput } from "../form-elements";

type InitialLoginValues = Pick<User, "email" | "password">;

const LoginForm = () => {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const errorRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (formRef.current) {
      gsap.from(formRef.current, {
        opacity: 100,
        y: 50,
        scale: 0.9,
        duration: 0.8,
        ease: "power2.out",
      });
    }
  }, []);

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

        if (errorRef.current) {
          gsap.fromTo(
            errorRef.current,
            { x: -10 },
            {
              x: 10,
              duration: 0.1,
              repeat: 3,
              yoyo: true,
              ease: "power2.inOut",
            }
          );
        }
      }
    } catch {
      setErrors({
        email: "An unexpected error occurred. Please try again later.",
        password: "An unexpected error occurred. Please try again later.",
      });

      if (errorRef.current) {
        gsap.fromTo(
          errorRef.current,
          { x: -10 },
          {
            x: 10,
            duration: 0.1,
            repeat: 3,
            yoyo: true,
            ease: "power2.inOut",
          }
        );
      }
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
                message={errors.email || (errors.password as string)}
              />
            </div>
          )}
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;
