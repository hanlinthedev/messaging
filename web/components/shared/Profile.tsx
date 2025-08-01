import { AuthUser } from "@/common.type";
import { Copy, CopyCheck, LucideLogOut } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type Props = {
  user: AuthUser;
};

const Profile = ({ user }: Props) => {
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(user._id);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 5000);
  };
  return (
    <div className="grid grid-cols-[40px_1fr_20px] mt-auto px-4 py-2 gap-2 shadow-2xl rounded bg-gray-100 items-center justify-center">
      <div>
        <Image
          src={user.avatar || "/default-avatar.png"}
          alt={`${user.name}'s profile`}
          width={30}
          height={30}
          className="rounded-full"
        />
      </div>
      <div>
        <div className="flex gap-1 items-center justify-start">
          <p className="text-gray-600 text-sm font-semibold">{user.name}</p>
          <span
            className="hover:cursor-pointer hover:scale-110 transition-transform"
            onClick={handleCopy}
          >
            {isCopied ? <CopyCheck size={12} /> : <Copy size={12} />}
          </span>
        </div>
        <p className="text-gray-500 text-xs">{user.email}</p>
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
