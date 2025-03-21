import { Form, Formik } from "formik";
import { Send, Text } from "lucide-react";

import { CustomIconButton, CustomIconInput } from "@/components/form-elements";
import { useCreateMessage } from "@/hooks/post/useCreateMessage";

const initialValues = {
  message: "",
};

export const SendMessageForm = () => {
  const { createMessage } = useCreateMessage();

  const handleSend = (values: typeof initialValues) =>
    createMessage({
      text: values.message,
      chatId: "cm87nc7gl0000uwagdjemid0b",
      senderId: "cm87nf0eg0000uwekoud293e9",
    });

  return (
    <Formik initialValues={initialValues} onSubmit={handleSend}>
      {({ values, handleSubmit, handleChange, isSubmitting }) => (
        <Form className="p-4 flex gap-4 items-center" onSubmit={handleSubmit}>
          <CustomIconInput
            type="text"
            name="message"
            onChange={handleChange}
            placeholder="Type your message"
          >
            <Text color="gray" size={20} />
          </CustomIconInput>

          <CustomIconButton
            type="submit"
            disabled={values.message === "" || isSubmitting}
            className="bg-cyan-500 text-white px-6 hover:bg-cyan-600 hover:text-white transition-all"
          >
            <Send /> Send
          </CustomIconButton>
        </Form>
      )}
    </Formik>
  );
};
