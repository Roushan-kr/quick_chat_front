import DashNav from '@/components/dashboard/DashNav'
import { getServerSession, Session } from 'next-auth'
import React from 'react'
import { authOptions } from '../api/auth/[...nextauth]/options'

async function  page() {
  const session = await getServerSession(authOptions) as Session

  const user = session?.user
  return (
   <DashNav name={user?.name! } image={user?.image ?? "/images/user1.png"} />
  )
}

export default page
