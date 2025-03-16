import { LOGIN_URL } from "@/lib/apiAuthRoutes";
import axios, { AxiosError } from "axios";
import { Account, AuthOptions, Session, User } from "next-auth";
import { JWT } from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";
import { redirect } from "next/navigation";

export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
      clientId: `${process.env.GOOGLE_CLIENT_ID}`,
      authorization: {
        params: {
          scope:
            "openid email profile https://www.googleapis.com/auth/userinfo.profile",
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
  callbacks: {
    async signIn({ user, account }: { user: User; account: Account | null }) {
      try {
        const payload = {
          email: user.email!,
          name: user.name!,
          oauth_id: account?.providerAccountId!,
          provider: account?.provider!,
          image: user?.image,
        };
        const { data } = await axios.post(LOGIN_URL, payload);

        user.id = data?.user?.id?.toString();
        user.token = data?.user?.token;
        return true;
      } catch (error) {
        if (error instanceof AxiosError) {
          return redirect(`/auth/error?message=${error.message}`);
        }
        return redirect(
          `/auth/error?message=Something went wrong.please try again!`
        );
      }
    },

    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },

    async session({ session, token }: { session: Session; token: JWT }) {
      session.user = token.user ? (token.user as User) : null;
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: `${process.env.NEXTAUTH_SECRET}`,
};
