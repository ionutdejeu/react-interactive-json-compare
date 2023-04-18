import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  // Include user.id on session
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
  secret: "LlKq6ZtYbr+hTC073mAmAh9/h2HwMfsFo4hrfCx5mLg=",
  // Configure one or more authentication providers
  providers: [
    // ...add more providers here
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      type: "credentials",
      authorize(credentials, req) {
        console.log(credentials);
        return {
          id: "123",
          name: "john",
        };
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    newUser: "/auth/register",
  },
};

export default NextAuth(authOptions);
