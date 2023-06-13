import { hashPassword } from '@/lib/auth';
import clientPromise from '@/lib/db';
import { NextApiRequest, NextApiResponse } from 'next';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return;
  }
  const data = req.body;

  const { email, password } = data;
  //`email, password` variables are extracted from the `data` object

  if (
    !email ||
    !email.includes('@') ||
    !password ||
    password.trim().length < 7
  ) {
    res.status(422).json({
      message:
        'Invalid input - password should also be at least 7 characters long',
    });
    return;
  }

  const client = clientPromise;
  //if the validation passes, the code connects to the database

  const db = (await client).db();
  //`db` variable is assigned the reference to the database obtained from the client

  const existingUser = await db.collection('user').findOne({ email: email });

  if (existingUser) {
    res.status(442).json({ message: 'User exits already!' });
    (await client).close;
    return;
  }

  const hashedPassword = await hashPassword(password);

  const result = await db.collection('users').insertOne({
    email: email,
    password: password,
  });
  //sed to insert a new document into the "users" collection

  res.status(201).json({ message: 'Created user!' });
  (await client).close;
}

export default handler;
