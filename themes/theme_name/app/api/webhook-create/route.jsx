// fetchData.js

// Import the MongoClient from the mongodb package
import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
// Define your MongoDB URI
const MONGO_URI = process.env.DATABASE;
// if (!MONGO_URI) {
//   throw new Error("MONGO_URI is not defined");
// }
try {
} catch (error) {}
// Create a MongoDB client instance

// Define a function to connect to MongoDB, fetch data, and log it
export async function POST(req, res) {
  try {
    // Connect to MongoDB
    const client = new MongoClient(MONGO_URI);
    await client.connect();

    // Access the database
    const database = client.db("drigginsweb"); // Replace with your database name

    // Access a collection
    const collection = database.collection("harrypotter"); // Replace with your collection name

    // Fetch data from the collection
    const documents = await collection.find({}).toArray();
    // await console.log(documents);
    await client.close();

    return NextResponse.json(
      {
        fulfillmentResponse: {
          messages: [
            {
              text: {
                text: [`Here are the documents: ${JSON.stringify(documents)}`],
              },
            },
          ],
        },
        sessionInfo: {
          parameters: {
            documents: JSON.stringify(documents),
          },
        },
      },
      { status: 200 }
    );

    // return NextResponse.json(documents, { status: 200 });

    // Disconnect from MongoDB
  } catch (error) {
    // console.error("Failed to fetch data:", error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
