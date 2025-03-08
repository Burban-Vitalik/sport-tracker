import { ChatsSidebar } from "./components/ChatsSidebar";
import { ChatSection } from "./components/ChatSection";

export default function MessagePage() {
  return (
    <div className="flex gap-6">
      <ChatsSidebar />
      <ChatSection />
    </div>
  );
}
