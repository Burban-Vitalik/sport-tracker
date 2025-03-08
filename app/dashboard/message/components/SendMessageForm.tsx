import { Formik } from "formik";
import { Send } from "lucide-react";

import { CustomIconButton, CustomIconInput } from "@/components/form-elements";

type Props = {
  sendMessage: (message: string) => void;
};

const initialValues = {
  message: "",
};

export const SendMessageForm = ({ sendMessage }: Props) => {
  const handleSend = (values: typeof initialValues) => {
    sendMessage(values.message);
    console.log(values);
    debugger;
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSend}>
      {({ values, handleSubmit, handleChange }) => (
        <form className="p-4 flex gap-4 items-center" onSubmit={handleSubmit}>
          <CustomIconInput
            type="text"
            name="message"
            onChange={handleChange}
            placeholder="Type your message"
          />
          <CustomIconButton
            type="submit"
            disabled={values.message === ""}
            className="bg-cyan-500 text-white px-6 hover:bg-cyan-600 hover:text-white transition-all"
          >
            <Send /> Send
          </CustomIconButton>
        </form>
      )}
    </Formik>
  );
};
