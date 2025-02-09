import type { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "./prisma";
import bcrypt from "bcryptjs";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        const { email, password } = credentials;
        try {
          if (!password || !email) {
            return null;
          }
          const user = await prisma.user.findUnique({
            where: { email },
          });
          if (!user) {
            return null;
          }
          const passwordIsCorrect = await bcrypt.compare(password, user.password);
          if (!passwordIsCorrect) {
            return null;
          }
          return {
            id: user.id,
            name: user.name,
            email: user.email,
          };
        } catch (error) {
          console.error(error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token = user;
      }
      return token;
    },
    async session({ session, token }: any) {
      session.user = token;
      return session;
    },
  },
};
