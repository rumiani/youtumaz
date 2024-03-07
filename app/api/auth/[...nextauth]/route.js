import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  session: {
    strategy: 'jwt'
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
  ],
  callbacks: {
    async signIn ({account, profile}){
      console.log(profile, account);
      return true
    }
  }
  ,
  secret: process.env.NEXT_PUBLIC_SECRET,
  url: process.env.NEXT_PUBLIC_URL
});
export { handler as GET, handler as POST };
