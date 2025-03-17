import Image from "next/image";

import MyImage from "@/public/img/placeholder.webp";

export default function Page() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Image
        src={MyImage}
        alt="My Image"
        quality={80}
        placeholder="blur"
        loading="lazy"
        layout="responsive"
        width={1200} // Це базовий розмір
        height={800} // Пропорційно для адаптивності
      />
    </div>
  );
}
