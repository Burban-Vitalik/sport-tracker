import Image from "next/image";

import MyImage from "@/public/img/placeholder.png";

export default function Page() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Image src={MyImage} alt="My Image" />
    </div>
  );
}
