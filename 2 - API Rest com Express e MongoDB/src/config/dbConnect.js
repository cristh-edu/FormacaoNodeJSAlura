import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://cristh:VuAAWJgQtwXrzQpF@alura-node.mkjk1.mongodb.net/alura-node"
);

let db = mongoose.connection;

export default db;