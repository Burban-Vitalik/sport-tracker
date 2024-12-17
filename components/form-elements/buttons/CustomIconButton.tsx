import { Button } from "@/components/ui/button";

type PropsType = {
  children: React.ReactNode;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const CustomIconButton = ({
  variant = "outline",
  children,
  ...rest
}: PropsType) => {
  return (
    <Button {...rest} variant={variant}>
      {children}
    </Button>
  );
};
