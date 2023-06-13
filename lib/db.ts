// import { MongoClient } from 'mongodb';

// export async function connectToDatabase() {
//   if (process.env.MONGO_URL) {
//     throw new Error('Invalid/Missing Environment Variables');
//   }

//   let client;
//   let clientPromise: Promise<MongoClient>;

//   try {
//     client = new MongoClient(process.env.MONGO_URL!);
//     clientPromise = client.connect();
//   } catch (error) {
//     console.log(error);
//   }

//   console.log(client);

//   return client;
// }

import { MongoClient } from 'mongodb';

if (!process.env.MONGO_URL) {
  //checks if the the enviroment variable `MONGO_URL1 is set.
  throw new Error('Invalid/Missing environment variable: "MONGO_URL"');
}

const uri = process.env.MONGO_URL;
const options = {};
//used to specify additional options for connecting to the MongoDB database.

let client;
let clientPromise: Promise<MongoClient>;
//These variables will be used to store the MongoClient instance
//and the promise returned by client.connect().

if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  let globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>;
  };

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri, options);
    globalWithMongo._mongoClientPromise = client.connect();
  }
  clientPromise = globalWithMongo._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise;

//memo1
//If the NODE_ENV environment variable is set to 'development', the code executes the block inside the if statement.
//In this block, it checks if a global variable named _mongoClientPromise exists. If it doesn't,
//it creates a new MongoClient instance using the uri and options and assigns it to the client variable.
//Then, it calls client.connect() to establish a connection to the MongoDB database
//and assigns the returned promise to the _mongoClientPromise global variable.
//Finally, it assigns the _mongoClientPromise to the clientPromise variable.
