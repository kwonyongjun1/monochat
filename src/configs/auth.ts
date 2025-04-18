import { PRIVATE_ENV } from "@/constants/pirvate-env";
import NextAuth from "next-auth";
import Kakao from "next-auth/providers/kakao";

export const handler = NextAuth({
  providers: [
    Kakao({
      clientId: PRIVATE_ENV.KAKAO_CLIENT_ID,
      clientSecret: PRIVATE_ENV.KAKAO_CLIENT_SECRET,
    }),
  ],
  session: {
    maxAge: 7 * 24 * 60 * 60, // 7 days,
    updateAge: 24 * 60 * 60, // 1 day
  },
  callbacks: {
    async session({ session, token }) {
      console.log(":::: session :::::");
      console.log("session :::", session);
      console.log("token :::", token);
      return session;
    },
    async jwt({ token, user }) {
      console.log(":::: jwt :::::");
      console.log("token :::", token);
      console.log("user :::", user);

      return token;
    },
  },
});
