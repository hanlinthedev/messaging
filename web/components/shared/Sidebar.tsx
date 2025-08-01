import { AuthUser } from "@/common.type";
import ConversatioList from "./ConversatioList";
import CreateConversation from "./CreateConversation";
import Profile from "./Profile";

type Props = {
  user: AuthUser;
  setSelectedConversationId: (id: string | null) => void;
};

const Sidebar = ({ user, setSelectedConversationId }: Props) => {
  return (
    <div className="h-full hidden md:grid grid-rows-[40px_1fr_64px] bg-gray-200 p-2 gap-2">
      <CreateConversation />
      <ConversatioList
        user={user}
        setSelectedConversationId={setSelectedConversationId}
      />
      {user && <Profile user={user} />}
    </div>
  );
};

export default Sidebar;
