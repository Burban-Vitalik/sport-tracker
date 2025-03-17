import { FC } from "react";

import { CollapsibleWrapper } from "@/components/common/CollapsibleWrapper";
import { UseModal } from "@/types/modal";

import {
  Actions,
  Attachments,
  Header,
  PersonalInfo,
  ProfileOptions,
  Stats,
} from "./index";
import { Members } from "./Members";

type Props = {
  user?: string;
  toggleModal: UseModal["toggleModal"];
};

const Details = () => {
  return (
    <div className="space-y-4">
      <PersonalInfo />
      <ProfileOptions />
      <Actions />
    </div>
  );
};
const components: { title: string; component: FC; open?: boolean }[] = [
  { title: "Personal Info", component: Details, open: true },
  { title: "Stats", component: Stats },
  { title: "Settings", component: Attachments },
  { title: "Members", component: Members },
];

export const ChatInfo: FC<Props> = ({ toggleModal }) => {
  return (
    <section className="relative h-full rounded-r-2xl p-6 flex flex-col items-center space-y-4 shadow-lg overflow-y-auto">
      <Header toggleModal={toggleModal} />
      <div>
        {components.map(({ title, component: Component, open }) => (
          <CollapsibleWrapper key={title} title={title} defaultOpen={open}>
            <Component />
          </CollapsibleWrapper>
        ))}
      </div>

      <button className="bg-red-500 w-full p-2 rounded-lg text-white">
        Leave Chat
      </button>
    </section>
  );
};
