import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import GroupChatCardMenu from "./GroupChatCardMenu";
import { User } from "next-auth";
import { GroupChatType } from "@/types/chatgroup";

export default function GroupChatCard({
  group,
  user,
}: {
  group: GroupChatType;
  user: User;
}) {
  return (
    <Card>
      <CardHeader className="flex justify-between items-center ">
        <CardTitle className="text-xl">{group.title.toLocaleUpperCase()}</CardTitle>
        <GroupChatCardMenu user={user} group={group} />
      </CardHeader>
      <CardContent>
        <p>
          Passcode :-<strong>{group.passcode}</strong>
        </p>
        <p>Created At :-{new Date(group.created_at).toDateString()}</p>
      </CardContent>
    </Card>
  );
}