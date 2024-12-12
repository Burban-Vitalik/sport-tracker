import { Button } from "@/components/ui/button";

type PropsType = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const CustomIconButton = ({ children, ...rest }: PropsType) => {
  return <Button {...rest}>{children}</Button>;
};
