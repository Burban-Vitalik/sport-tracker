import Image from "next/image";
import MyImage from "@/public/img/placeholder.png";

const Page1 = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="aspect-video rounded-xl bg-muted/50 relative overflow-hidden"
          >
            <Image
              src={MyImage}
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
    </div>
  );
};

export default Page1;