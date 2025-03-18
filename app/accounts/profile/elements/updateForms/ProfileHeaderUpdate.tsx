import { Formik } from "formik";
import { Cake, Pen, Trash2, User } from "lucide-react";
import { showToast } from "@/app/helpers/showToast";
import { CustomIconButton, CustomIconInput } from "@/components/form-elements";
import { cn } from "@/lib/utils";

type PropsType = {
  firstName: string | null;
  lastName: string | null;
  email: string;
  age: number;
  userId: string;
  closeModal: () => void;
};

const formFields = [
  {
    name: "firstName",
    label: "First Name",
    icon: <User size={18} />,
    type: "text",
  },
  {
    name: "lastName",
    label: "Last Name",
    icon: <User size={18} />,
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    icon: <User size={18} />,
    type: "email",
  },
  {
    name: "age",
    label: "Age",
    icon: <Cake size={18} />,
    type: "number",
  },
];

const formButtons = [
  {
    name: "update",
    label: "Update",
    icon: <Pen />,
    type: "submit",
    className: "bg-black text-white",
  },
  {
    name: "cancel",
    label: "Cancel",
    icon: <Trash2 />,
    type: "button",
    className: "border border-black text-black",
  },
];

export const ProfileHeaderUpdateForm = ({
  firstName,
  lastName,
  email,
  age,
  userId,
  closeModal,
}: PropsType) => {
  const initialValues = {
    firstName: firstName || "",
    lastName: lastName || "",
    email: email || "",
    age: age || 0,
  };

  const handleUpdate = async (
    value: Omit<PropsType, "userId" | "closeModal" | "profileImage">
  ) => {
    try {
      const res = await fetch(`/api/users/${userId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: userId, ...value }),
      });

      const message =
        res.status === 200
          ? "Profile updated successfully"
          : "Profile update failed";

      showToast({
        message,
        type: res.status === 200 ? "success" : "error",
      });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      showToast({ message: "An unexpected error occurred", type: "error" });
    } finally {
      closeModal();
      // window.location.reload(); // тимчасово
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleUpdate}>
      {({ values, handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {formFields.map((field) => (
              <div key={field.name} className="space-y-2">
                <label
                  htmlFor={field.name}
                  className="text-sm font-semibold text-gray-400"
                >
                  {field.label}
                </label>
                <CustomIconInput
                  id={field.name}
                  type={field.type}
                  placeholder={field.label}
                  value={values[field.name as keyof typeof values]}
                  onChange={handleChange(field.name)}
                  className="p-2"
                  disabled={field.name === "email"}
                >
                  {field.icon}
                </CustomIconInput>
              </div>
            ))}
          </div>

          <div className="flex flex-row gap-4">
            {formButtons.map((button) => (
              <CustomIconButton
                key={button.name}
                type={button.type as "submit" | "button"}
                onClick={button.name === "cancel" ? closeModal : undefined}
                className={cn(button.className, "w-1/2")}
              >
                {button.icon}
                {button.label}
              </CustomIconButton>
            ))}
          </div>
        </form>
      )}
    </Formik>
  );
};
