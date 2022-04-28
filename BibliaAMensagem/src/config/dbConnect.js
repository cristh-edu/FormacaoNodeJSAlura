import mongoose from "mongoose";

const username = encodeURIComponent("Christian");
const password = encodeURIComponent("OnlyJesusSaves");
const cluster = "bible.mkjk1.mongodb.net";

mongoose.connect(
  `mongodb+srv://${username}:${password}@${cluster}/Books`
);

let db = mongoose.connection;

export default db;
