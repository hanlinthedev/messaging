import { LucideLogOut } from "lucide-react";
import Image from "next/image";

type Props = {
  isAuth: {
    name: string;
    email: string;
    avatar: string;
  };
};

const Profile = ({ isAuth }: Props) => {
  return (
    <div className="grid grid-cols-[40px_1fr_20px] mt-auto px-4 py-2 gap-2 shadow-2xl rounded bg-gray-100">
      <div>
        <Image
          src={isAuth.avatar}
          alt={`${isAuth.name}'s profile`}
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
      <div>
        <p className="text-gray-600 text-sm font-semibold">{isAuth.name}</p>
        <p className="text-gray-500 text-xs">{isAuth.email}</p>
      </div>
      <div className="flex items-center justify-center">
        <button className=" hover:underline">
          <LucideLogOut />
        </button>
      </div>
    </div>
  );
};

export default Profile;
