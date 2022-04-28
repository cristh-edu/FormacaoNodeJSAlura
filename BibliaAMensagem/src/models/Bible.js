import mongoose from "mongoose";

const bibleSchema = new mongoose.Schema(
  {
    id: {type: String},
    titulo: {type: String, required: true},
    book: {type: mongoose.Schema.Types.ObjectId, ref: 'books', required: true},
    editora: {type: String, required: true},
    numeroPaginas: {type: Number}
  }
);

const bibles= mongoose.model('bibles', bibleSchema);

export default bibles;