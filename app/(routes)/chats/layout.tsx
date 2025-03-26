"use client";

type Props = {
  chatsSection: React.ReactNode;
  chatSection: React.ReactNode;
};

export default function ChatsLayout({ chatsSection, chatSection }: Props) {
  return (
    <section className="border h-[calc(100vh-64px)] flex gap-4 p-4">
      <aside className="bg-white shadow-xl rounded-xl">{chatsSection}</aside>
      <main className="shadow-xl rounded-xl w-full h-full">{chatSection}</main>
    </section>
  );
}
