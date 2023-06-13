import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { MongoDBAdapter } from '@auth/mongodb-adapter';

import { verifyPassword } from '../../../lib/auth';
import clientPromise from '../../../lib/db';

export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  session: {
    strategy: 'jwt',
    //The session option is configured with the strategy set to 'jwt'.
    //This indicates that JSON Web Tokens (JWT) will be used for session management.
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials: { email: string; password: string }) {
        const client = await clientPromise;

        const usersCollection = client.db().collection('users');

        const user = await usersCollection.findOne({
          email: credentials.email,
        });

        if (!user) {
          client.close();
          throw new Error('No user found!');
        }

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
          client.close();
          throw new Error('Could not log you in!');
        }

        client.close();
        return { email: user.email };
      },
    }),
  ],
  callbacks: {
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
        },
      };
    },
    jwt: ({ token, user }) => {
      if (user) {
        const u = user as unknown as any;
        return {
          ...token,
        };
      }
      return token;
    },
  },
});

//memo1
//@auth/mongodb-adapter is used to connect NextAuth
//with MongoDB as the session storage.

//memo2
//verifyPassword function from the ../../../lib/auth module.
//This function is used to verify the password provided by the user during authentication.

//memo3
//clientPromise from the ../../../lib/db module.
//This promise represents the connection to the MongoDB database.
