"use client";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { FC } from "react";

type PropsType = {
  disabled: (date: Date) => boolean;
  name: string;
  label: string;
  date: Date | null;
  setDate: (date: Date | undefined) => void;
};

export const CustomDataPicker: FC<PropsType> = ({
  disabled,
  name,
  label,
  date,
  setDate,
}) => {
  return (
    <div className="flex flex-col">
      <Label className="text-gray-500 text-md mb-2">{label}</Label>
      <Popover>
        <PopoverTrigger name={name} asChild>
          <div>
            <Button
              variant={"outline"}
              className={cn(
                "w-[240px] pl-3 text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              {date ? format(new Date(date), "PPP") : <span>Pick a date</span>}
              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
            </Button>
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="center">
          <Calendar
            mode="single"
            selected={date || undefined}
            onSelect={setDate}
            disabled={disabled}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};
