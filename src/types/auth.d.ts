import "next-auth";
import { DefaultSession, DefaultUser, User } from "next-auth";

declare module "next-auth" {
  interface User extends DefaultUser {
    provider?: string | null;
    token?: string | null;
  }

  interface Session extends DefaultSession {
    user?: User;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends User {}
}

declare module "next-auth/react" {
  interface SessionProviderProps {
    session?: Session;
  }
}
