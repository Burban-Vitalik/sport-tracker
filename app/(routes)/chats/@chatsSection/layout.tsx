export default function ChatsSectionLayout({
  children,
  chatsList,
}: {
  children: React.ReactNode;
  chatsList: React.ReactNode;
}) {
  return (
    <div>
      {children}
      {chatsList}
    </div>
  );
}
