import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { dbConnect } from "@/backend/db";
import { User } from "@/backend/models/models";

const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "password",
        },
      },
      authorize: async (credentials) => {
        await dbConnect();
        const user = await User.findOne({
          type: "admin",
          username: credentials?.username,
          password: credentials?.password,
        });

        if (user) {
          // If authentication is successful, return the user object
          return Promise.resolve(user);
        } else {
          // If authentication fails, return null
          return Promise.resolve(null);
        }
      },
    }),
  ],
};

export default options;
