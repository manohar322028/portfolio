import mongoose from "mongoose";
global.mongoose = {
  conn: null,
  promise: null,
};

export async function dbConnect() {
  if (global.mongoose && global.mongoose.conn) {
    console.log("connected from previous");
    return global.mongoose.conn;
  } else {
    const url = process.env.db_url;
    const promise = mongoose.connect(url, {
      autoIndex: true,
    });
    global.mongoose = {
      conn: await promise,
      promise: promise,
    };
    console.log("connected from new");
    return await promise;
  }
}
