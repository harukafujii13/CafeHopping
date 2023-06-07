import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect("MONGO_URL");

  return client;
}
