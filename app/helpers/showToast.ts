import { toast } from "react-toastify";

type ToastType = "success" | "error" | "warning" | "info";

type PropsType = {
  message: string;
  type: ToastType;
};

export const showToast = ({ message, type }: PropsType) => {
  if (typeof toast[type] === "function") {
    toast[type](message, {
      autoClose: 3000,
      hideProgressBar: false,
    });
  } else {
    console.error(`Invalid toast type: ${type}`);
  }
};
