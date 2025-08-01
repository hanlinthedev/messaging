import { AuthUser } from "@/common.type";
import { Main } from "@/components/shared/Main";
import { getUserProfile } from "./action";

export default async function Home() {
  const isAuth: AuthUser = await getUserProfile();
  return <Main user={isAuth} />;
}
