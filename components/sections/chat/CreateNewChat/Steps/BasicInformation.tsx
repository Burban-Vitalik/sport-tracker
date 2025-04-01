import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { ChatMember } from "../../ChatMemeber";

type Props = {
  type: "CHAT" | "GROUP" | "CHANEL";
  stepBack: () => void;
};

export function BasicInformation({ type, stepBack }: Props) {
  const [chatName, setChatName] = useState("");
  const [chatDescription, setChatDescription] = useState("");
  const [chatType, setChatType] = useState("public");

  return (
    <div className="mx-auto p-4 w-full max-w-md space-y-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold text-center flex items-center justify-start gap-4">
        <ArrowLeft onClick={stepBack} /> Create a New{" "}
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </h2>

      {type !== "CHAT" && (
        <div className="space-y-2">
          <Label htmlFor="chat-name">Chat Name</Label>
          <Input
            id="chat-name"
            placeholder="Enter chat name"
            value={chatName}
            onChange={(e) => setChatName(e.target.value)}
          />
        </div>
      )}

      {type === "CHANEL" && (
        <div className="space-y-2">
          <Label htmlFor="chat-description">Description</Label>
          <Input
            id="chat-description"
            placeholder="Enter chat description"
            value={chatDescription}
            onChange={(e) => setChatDescription(e.target.value)}
          />
        </div>
      )}

      {type === "GROUP" && (
        <div className="space-y-2">
          <Label htmlFor="chat-type">Chat Type</Label>
          <Select value={chatType} onValueChange={setChatType}>
            <SelectTrigger>
              <SelectValue placeholder="Select chat type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="public">Public</SelectItem>
              <SelectItem value="private">Private</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}

      <div className="opacity-50 pointer-events-none">
        <ChatMember
          name={"Vitalik Burba"}
          email={"burbanvitalik2002@gmail.com"}
        />
      </div>

      <Button className="w-full mt-2">
        Create {type.charAt(0).toUpperCase() + type.slice(1)}
      </Button>
    </div>
  );
}
