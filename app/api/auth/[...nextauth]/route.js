import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import User from "@/models/User";
import { dbConnect } from "@/lib/dbConnect";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await dbConnect();

        // ✅ Always lowercase emails
        const email = credentials.email.toLowerCase();

        // 🔍 Find user
        const user = await User.findOne({ email });
        if (!user) {
          console.log("❌ No user found for email:", email);
          return null;
        }

        // 🔐 Compare password securely
        const isValid = await bcrypt.compare(credentials.password, user.password);
        if (!isValid) {
          console.log("❌ Invalid password for:", email);
          return null;
        }

        console.log("✅ Login successful for:", email);
        return { id: user._id.toString(), email: user.email };
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
});

export { handler as GET, handler as POST };