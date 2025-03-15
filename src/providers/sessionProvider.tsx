"use client";

import { SessionProvider as NextAuthSessionProvider } from "next-auth/react";


function sessionProvider({ children }: { children: React.ReactNode }) {
    return <NextAuthSessionProvider>{children}</NextAuthSessionProvider>;
}

export default sessionProvider
