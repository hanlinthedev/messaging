import { AuthUser, Conversation as IConversation } from "@/common.type";
import { getData } from "@/lib/auth";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import Conversation from "./Conversation";
type Props = {
  user: AuthUser;
  setSelectedConversationId: (id: string | null) => void;
};

const ConversatioList = ({ user, setSelectedConversationId }: Props) => {
  const { data: conversations, isLoading } = useQuery({
    queryKey: ["converationsList"],
    queryFn: async () => {
      const data = await getData("conversation");
      return data;
    },
  });
  useEffect(() => {
    const firstConversationId = conversations?.[0]._id;
    setSelectedConversationId(firstConversationId || null);
  }, [conversations]);
  return (
    <div className="flex flex-col h-full overflow-auto">
      {isLoading ? (
        <p>Loading ....</p>
      ) : conversations && conversations.length > 0 ? (
        conversations.map((conversation: IConversation) => (
          <Conversation
            key={conversation._id}
            conversation={conversation}
            user={user}
          />
        ))
      ) : (
        "No Conversations Found!!"
      )}
    </div>
  );
};

export default ConversatioList;
