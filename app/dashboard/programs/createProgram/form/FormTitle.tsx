import { FC } from "react";

type PropsType = {
  title: string;
  subtitle: string;
};

export const FormTitle: FC<PropsType> = ({ title, subtitle }) => {
  return (
    <div className="text-center">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-400">{subtitle}</p>
    </div>
  );
};
