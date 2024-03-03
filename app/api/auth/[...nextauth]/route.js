import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbacks: {
        async session({ session }) {
          return session;
        },
        async signIn({ profile }) {
          console.log(profile);
          try {
            await connectDB();
            return true;
          } catch (error) {
            console.log(error);
            return false;
          }
        },
      },
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
});
export { handler as GET, handler as POST };
