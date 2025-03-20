import { FC } from "react";
import { BalanceItem } from "./BalanceItem";
import { StaticImageData } from "next/image";

type ItemType = {
  drinkType: string;
  fillLevel: number;
  color: string;
  backgroundColor: string;
  icon: StaticImageData;
};

type PropsType = {
  listItems: ItemType[];
};

export const BalanceList: FC<PropsType> = ({ listItems }) => {
  return (
    <>
      {listItems.map((item, index) => (
        <BalanceItem
          key={index}
          drinkType={item.drinkType}
          fillLevel={item.fillLevel}
          color={item.color}
          backgroundColor={item.backgroundColor}
          icon={item.icon}
        />
      ))}
    </>
  );
};
