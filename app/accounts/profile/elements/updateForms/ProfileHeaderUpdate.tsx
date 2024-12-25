import { Formik } from "formik";
import { Edit, User } from "lucide-react";
import { CustomIconButton } from "@/components/form-elements/buttons/CustomIconButton";
import CustomIconInput from "@/components/form-elements/CustomIconInput";
import { showToast } from "@/app/helpers/showToast";

type PropsType = {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  userId: number;
  closeModal: () => void;
};

export const ProfileHeaderUpdateForm = ({
  firstName,
  lastName,
  email,
  age,
  userId,
  closeModal,
}: PropsType) => {
  const handleUpdate = async (
    value: Omit<PropsType, "userId" | "closeModal">
  ) => {
    const res = await fetch("/api/users/3", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: userId, ...value }),
    });

    if (res.status === 200) {
      showToast({ message: "Profile updated successfully", type: "success" });
    }

    if (res.status === 400) {
      showToast({ message: "Profile update failed", type: "error" });
    }

    closeModal();
    window.location.reload(); //тимчасово
  };

  return (
    <Formik
      initialValues={{
        firstName: firstName || "",
        lastName: lastName || "",
        age: age || 0,
        email: email || "",
      }}
      onSubmit={handleUpdate}
    >
      {({ values, handleChange, handleSubmit, touched, errors }) => (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First Name */}
          <div className="space-y-2">
            <label
              htmlFor="firstName"
              className="text-sm font-semibold text-gray-700"
            >
              First Name
            </label>
            <CustomIconInput
              id="firstName"
              type="text"
              placeholder="First Name"
              value={values.firstName}
              onChange={handleChange("firstName")}
              className="border p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <User size={16} strokeWidth={2} aria-hidden="true" />
            </CustomIconInput>
            {touched.firstName && errors.firstName && (
              <div className="text-sm text-red-600">{errors.firstName}</div>
            )}
          </div>

          {/* Last Name */}
          <div className="space-y-2">
            <label
              htmlFor="lastName"
              className="text-sm font-semibold text-gray-700"
            >
              Last Name
            </label>
            <CustomIconInput
              id="lastName"
              type="text"
              placeholder="Last Name"
              value={values.lastName}
              onChange={handleChange("lastName")}
              className="border p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <User size={16} strokeWidth={2} aria-hidden="true" />
            </CustomIconInput>
            {touched.lastName && errors.lastName && (
              <div className="text-sm text-red-600">{errors.lastName}</div>
            )}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-gray-700"
            >
              Email
            </label>
            <CustomIconInput
              id="email"
              type="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange("email")}
              className="border p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              readOnly
              disabled
            >
              <User size={16} strokeWidth={2} aria-hidden="true" />
            </CustomIconInput>
          </div>

          {/* Age */}
          <div className="space-y-2">
            <label
              htmlFor="age"
              className="text-sm font-semibold text-gray-700"
            >
              Age
            </label>
            <CustomIconInput
              id="age"
              type="number"
              placeholder="Age"
              value={values.age}
              onChange={handleChange("age")}
              className="border p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <User size={16} strokeWidth={2} aria-hidden="true" />
            </CustomIconInput>
            {touched.age && errors.age && (
              <div className="text-sm text-red-600">{errors.age}</div>
            )}
          </div>

          {/* Submit Button */}
          <CustomIconButton
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center hover:bg-blue-700 transition"
          >
            <Edit size={16} className="mr-2" />
            Update
          </CustomIconButton>
        </form>
      )}
    </Formik>
  );
};
