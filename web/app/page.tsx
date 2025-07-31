import Profile from "@/components/shared/Profile";
import { getUserProfile } from "./action";

export default async function Home() {
  const isAuth = await getUserProfile();
  return (
    <>
      <div className="font-sans grid grid-cols-[25vw_1fr] h-screen ">
        <div className="h-full flex flex-col bg-gray-200 p-2">
          {isAuth && <Profile isAuth={isAuth} />}
        </div>
        <div className="bg-red-200 w-full">s</div>
      </div>
    </>
  );
}
