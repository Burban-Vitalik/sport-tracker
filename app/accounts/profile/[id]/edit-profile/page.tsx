"use client";

import { showToast } from "@/app/helpers";
import { CustomIconInput } from "@/components/form-elements";
import { Label } from "@/components/ui/label";
import { useUser } from "@/hooks/userContext";
import { Formik } from "formik";
import { Cake, UserIcon } from "lucide-react";

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

const updateProfile = async (
  userId: number,
  values: Record<string, unknown>
) => {
  try {
    const response = await fetch(`/api/users/${userId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: userId, ...values }),
    });

    const message =
      response.status === 200
        ? "Profile updated successfully"
        : "Profile update failed";

    showToast({
      message,
      type: response.status === 200 ? "success" : "error",
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    showToast({ message: "An unexpected error occurred", type: "error" });
  }
};

export default function EditProfilePage() {
  const { user } = useUser();

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
      onSubmit={(values) => updateProfile(user.id, values)}
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
