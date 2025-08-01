"use client";
import { AuthUser } from "@/common.type";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React, { useState } from "react";
import ChatSection from "./ChatSection";
import Sidebar from "./Sidebar";

export const Main: React.FC<{ user: AuthUser }> = ({
  user,
}: {
  user: AuthUser;
}) => {
  const [queryClient] = React.useState(() => new QueryClient());
  const [selectedConversationId, setSelectedConversationId] = useState<
    string | null
  >(null);
  return (
    <QueryClientProvider client={queryClient}>
      <div className="font-sans grid grid-cols-1 md:grid-cols-[25vw_1fr] h-screen ">
        <Sidebar
          user={user}
          setSelectedConversationId={setSelectedConversationId}
        />
        <ChatSection
          user={user}
          selectedConversationId={selectedConversationId}
        />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
