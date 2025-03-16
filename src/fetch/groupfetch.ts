import { CHAT_GROUP } from "@/lib/apiAuthRoutes";
import { getServerSession } from "next-auth";

export async function fetchChatGroups(token: string) {
    
  const res = await fetch(CHAT_GROUP, {
    headers: {
      "Authorization": "Bearer " + token,
    },
    next:{
        revalidate: 60*60,
        tags: ["chat-group","dashboard"]
    }
  });

 if(!res.ok){
    throw new Error("Failed to fetch chat groups")
 }
  const {data} = await res.json() || [];
  return data;
 
}
// Compare this snippet from Frontend/src/components/chatGroup/ChatGroup.tsx: