import { ChatsSidebar } from "./components/ChatsSidebar";

export default function ChatsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex gap-6 h-[80vh]">
      <ChatsSidebar />
      {children}
    </section>
  );
}
