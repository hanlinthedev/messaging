import { AuthUser } from "@/common.type";

type Props = {
  user: AuthUser;
  selectedConversationId?: string | null;
};

const ChatSection = ({
  user,
  selectedConversationId: conversationId,
}: Props) => {
  return <section className="p-2">ChatSection : {conversationId}</section>;
};

export default ChatSection;
