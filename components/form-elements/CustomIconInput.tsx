import { Input } from "../ui/input";

type PropsType = {
  children?: React.ReactNode;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function CustomIconInput({ children, ...rest }: PropsType) {
  return (
    <div className="relative">
      <Input
        id="input-09"
        className="peer pl-10"
        {...rest}
        style={{ paddingLeft: "35px" }}
      />
      <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
        {children}
      </div>
    </div>
  );
}
