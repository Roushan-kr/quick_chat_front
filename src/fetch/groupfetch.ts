import { CHAT_GROUP } from '@/lib/apiAuthRoutes';
import { getServerSession } from 'next-auth';

export async function fetchChatGroups(token: string) {
	const res = await fetch(CHAT_GROUP, {
		headers: {
			authorization: token,
		},
		method: 'GET',
		next: {
			revalidate: 60 * 60,
			tags: ['chat-group', 'dashboard'],
		},
	});
	const fdata = await res.json();
	return fdata.data || [];
}
// Compare this snippet from Frontend/src/components/chatGroup/ChatGroup.tsx:
