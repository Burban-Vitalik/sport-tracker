export function PageTitle({ title }: { title: string }) {
  return (
    <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
      {title}
    </h1>
  );
}
