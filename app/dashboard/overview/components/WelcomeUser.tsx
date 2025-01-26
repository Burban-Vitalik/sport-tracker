import { showTimeBasedGreeting } from "@/app/helpers/showTimeBasedGreeting";

type PropsType = {
  userName: string;
};

export function WelcomeUser({ userName }: PropsType) {
  return (
    <div className="flex flex-row gap-1 items-center text-xl">
      <p className="text-fuchsia-700 font-semibold">
        Welcome <b>{userName}</b>,
      </p>
      <p className="text-xl text-gray-700">
        {showTimeBasedGreeting(new Date())}!
      </p>
    </div>
  );
}
