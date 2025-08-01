import { AuthUser, Conversation as IConversation } from "@/common.type";
import Image from "next/image";

type Props = {
  conversation: IConversation;
  user: AuthUser;
};

const Conversation = ({ conversation, user }: Props) => {
  const otherParticipants = conversation.participants.find(
    (p) => p._id !== user._id
  );
  return (
    <div className="grid grid-cols-[40px_1fr_20px] gap-2 p-2 shadow-md rounded bg-white hover:bg-gray-200 transition-colors">
      <Image
        src={otherParticipants?.avatar || "/default-avatar.png"}
        alt="Avatar"
        width={36}
        height={36}
        className="rounded-full"
      />
      <div className="flex flex-col justify-center">
        <span className="text-sm font-semibold">
          {otherParticipants?.name || "Unknown User"}
        </span>
        <span className="text-xs text-gray-500">
          {conversation.lastMessage || "No messages yet"}
        </span>
      </div>
    </div>
  );
};

export default Conversation;
