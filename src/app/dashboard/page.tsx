import DashNav from '@/components/dashboard/DashNav';
import { getServerSession, Session } from 'next-auth';
import React from 'react';
import { authOptions } from '../api/auth/[...nextauth]/options';
import CreateChat from '@/components/chatGroup/CreateChat';
import { fetchChatGroups } from '@/fetch/groupfetch';
import { GroupChatType } from '@/types/chatgroup';
import GroupChatCard from '@/components/chatGroup/GroupChatCard';

async function page() {
	const session = (await getServerSession(authOptions)) as Session;
	const user = session?.user;
  const groups : Array<GroupChatType> | [] = await fetchChatGroups(user?.token!) ;
	return (
		<>
			<DashNav name={user?.name!} image={user?.image ?? '/images/user1.png'} />
			<div className="container">
				<div className="mt-6 text-end">
					<CreateChat user={session?.user!} />
				</div>

          {/* If Groups */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {groups.length > 0 &&
            groups.map((item, index) => (
              <GroupChatCard group={item} key={index} user={session?.user!} />
            ))}
        </div>

			</div>
		</>
	);
}

export default page;
