import { hashPassword } from "@/lib/auth";
import { connectToDatabase } from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return;
  }
  const data = req.body;

  const { username, email, password } = data;
  //`username, email, password` variables are extracted from the `data` object

  if (
    !username ||
    username.trim().length < 5 ||
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 7
  ) {
    res.status(422).json({
      message:
        "Invalid input - username should be at least 5 characters, and password should be at least 7 characters",
    });
    return;
  }
  const client = connectToDatabase();
  //if the validation passes, the code connects to the database

  const db = (await client).db();
  //`db` variable is assigned the reference to the database obtained from the client

  const hashedPassword = hashPassword(password);

  const result = await db.collection("users").insertOne({
    username: username,
    email: email,
    password: password,
  });
  //sed to insert a new document into the "users" collection

  res.status(201).json({ message: "Created user!" });
}

export default handler;
