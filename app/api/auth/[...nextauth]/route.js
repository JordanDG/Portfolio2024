import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        const { username, password } = credentials;
        console.log("Received credentials:", { username, password });

        try {
          await connectMongoDB();
          const user = await User.findOne({ username });

          if (!user) {
            console.log("No user found with username:", username);
            return null;
          }

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (!passwordsMatch) {
            console.log("Password does not match");
            return null;
          }

          console.log("User authorized successfully");
          return user;
        } catch (error) {
          console.log("Error during authorization:", error);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
  debug: true,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };