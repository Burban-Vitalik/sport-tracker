import { usePathname, useSearchParams } from "next/navigation";

export const useChatParams = () => {
  const pathname = usePathname();
  const params = useSearchParams();

  const chatId = pathname.split("/")[2] || "";
  const type = params.get("type") || "all";

  return { chatId, type, params };
};
