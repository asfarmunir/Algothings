import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";
import * as bcrypt from "bcryptjs";
import { connectToDatabase } from "@/lib/database";
import User from "@/lib/database/user.modal";

export const authOptions = {
  providers: [
      GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    httpOptions:{
      timeout: 10000,
    },
  }), 
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Enter your email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
         try {
                if (!credentials || !credentials.password || !credentials.email) return null;
                await connectToDatabase();
                const { email, password } = credentials;

                const user
                = await  User.findOne({ email });

                if (!user) throw new Error("Invalid Credentials");
                    const isValid = await bcrypt.compare(password, user.password);
                   if (!isValid) throw new Error("Invalid Credentials");
                   return user;

             } catch (error:any) {
                console.error("Login failed", error);                         
                throw new Error(error.message);
             }
            }
        
    }),
  ],
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt' as const,  
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  callbacks: {
    async session({ session, token }: { session: any; token: JWT,user:any }) {
      await connectToDatabase();
      const user = await User.findOne({email: token.email});
      session.user.email = user.email;
      session.user.username = user.username
      session.user.firstName = user.firstName;
      session.user.lastName = user.lastName;
      session.user.mobile = user.mobile;
      session.user.country = user.country;
      // session.user.image = user.profileImage;
      session.user.id = user._id.toString();
      
      return session;
   
    },
    async jwt({ token, user }: { token: JWT; user?: any }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async signIn({ account, profile}:{
        account:any,
        profile?:any
    }) {
        try {
        if(account.provider === 'google'){  
            await connectToDatabase();
            const user = await User.findOne({email: profile.email});
            if(!user){
                const newUser = new User({
                    email: profile.email,
                    firstname: profile.given_name,
                    lastname: profile.family_name,
                    profileImage: profile.picture,
                    authProviders: ['google']
                });
                await newUser.save();
                
            }
        }
        return true;
            
        } catch (error) {
            console.log(error);
            return false
        }
        }

  },
  secret: process.env.NEXTAUTH_SECRET,
};

 const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }
