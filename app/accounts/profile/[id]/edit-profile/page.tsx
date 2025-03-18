"use client";

import { Formik } from "formik";
import { Cake, UserIcon } from "lucide-react";

import { CustomIconInput } from "@/components/form-elements";
import { Label } from "@/components/ui/label";
import { useUpdateUser } from "@/hooks/put/useUpdateUser";
import { useUser } from "@/hooks/userContext";
import { User } from "@prisma/client";

const formFields = [
  {
    name: "firstName",
    label: "First Name",
    icon: <UserIcon size={18} />,
    type: "text",
  },
  {
    name: "lastName",
    label: "Last Name",
    icon: <UserIcon size={18} />,
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    icon: <UserIcon size={18} />,
    type: "email",
  },
  { name: "age", label: "Age", icon: <Cake size={18} />, type: "number" },
];

export default function EditProfilePage() {
  const { user } = useUser();

  const { updateUser } = useUpdateUser();

  if (!user) return <p>Loading...</p>;

  const initialValues = {
    firstName: user.firstName || "",
    lastName: user.lastName || "",
    email: user.email || "",
    age: user.age || "",
    sex: user.sex || "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) =>
        updateUser({ userId: user.id, data: values as Partial<User> })
      }
    >
      {({ handleSubmit, values, handleChange }) => (
        <form onSubmit={handleSubmit}>
          <section className="bg-white shadow-lg rounded-2xl p-6 flex flex-col gap-6 mx-auto">
            <h1 className="text-2xl font-bold text-gray-800">Edit Profile</h1>
            {formFields.map(({ name, label, type, icon }) => (
              <div key={name} className="flex flex-col gap-2">
                <Label htmlFor={name} className="text-md text-gray-700">
                  {label}
                </Label>
                <CustomIconInput
                  id={name}
                  name={name}
                  type={type}
                  placeholder={label}
                  defaultValue={values[name as keyof typeof initialValues]}
                  onChange={handleChange}
                  disabled={name === "email"}
                >
                  {icon}
                </CustomIconInput>
              </div>
            ))}
            <button
              type="submit"
              className="bg-primary text-white text-lg font-medium py-2 px-4 rounded-md hover:bg-primary-dark transition"
            >
              Save Changes
            </button>
          </section>
        </form>
      )}
    </Formik>
  );
}
