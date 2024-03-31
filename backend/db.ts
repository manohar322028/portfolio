import type _mongoose from "mongoose";
import { connect, ConnectionStates } from "mongoose";

const { MONGODB_URI } = process.env;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections from growing exponentially
 * during API Route usage.
 */

export async function dbConnect() {
  const connection = {
    isConnected: null as unknown as ConnectionStates,
  };

  try {
    if (connection.isConnected) {
      return;
    }
    const db = await connect(MONGODB_URI!);
    connection.isConnected = db.connections[0].readyState;
  } catch (e) {
    console.error(e);
  }
}
