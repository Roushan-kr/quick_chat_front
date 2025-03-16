import DashNav from '@/components/dashboard/DashNav'
import { getServerSession } from 'next-auth'
import React from 'react'

async function  page() {
  const session = await getServerSession()
  const user = session?.user
  return (
   <DashNav name={user?.name ?? "user" } image={user?.image ?? "/images/user1.png"} />
  )
}

export default page
