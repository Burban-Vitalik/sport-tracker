import Cookies from "js-cookie";
import { redirect } from "next/navigation";

export function logout() {
  Cookies.remove("token");
  redirect("/auth");
  // router.push("/auth");
}
