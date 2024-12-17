"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Trash2 } from "lucide-react";
import { CustomIconButton } from "../form-elements/buttons/CustomIconButton";
import { useState } from "react";

type PropsType = {
  triggerTitle: string;
  dialogTitle: string;
  descriptionText: string;
  confirmBtnText: string;
  requiredText: string;
  onConfirm: () => void;
};

export function ConfirmModal({
  triggerTitle,
  dialogTitle,
  descriptionText,
  confirmBtnText,
  requiredText,
  onConfirm,
}: PropsType) {
  const [inputValue, setInputValue] = useState<string>("");

  const handleConfirm = () => {
    if (inputValue.trim() !== requiredText.trim()) {
      return;
    }
    onConfirm();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">{triggerTitle}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
          <DialogDescription>{descriptionText}</DialogDescription>
          <DialogDescription>
            <p className="font-semibold text-black ">{requiredText}</p>
          </DialogDescription>
        </DialogHeader>

        <Input
          id="name"
          value={inputValue}
          placeholder="Copy the text from above"
          onChange={(e) => setInputValue(e.target.value)}
        />

        <DialogFooter>
          <CustomIconButton
            type="submit"
            variant={"destructive"}
            className="flex justify-center w-full items-center bg-red-400"
            onClick={handleConfirm}
            disabled={inputValue !== requiredText}
          >
            {confirmBtnText} <Trash2 />
          </CustomIconButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
