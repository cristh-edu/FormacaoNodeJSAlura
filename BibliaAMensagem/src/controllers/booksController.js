import books from "../models/Book.js";

class BookController {

  static listarBooks = (req, res) => {
    books.find((err, books) => {
      res.status(200).json(books)
  })
  }

  static listarBookPorId = (req, res) => {
    const id = req.params.id;

    books.findById(id, (err, books) => {
      if(err) {
        res.status(400).send({message: `${err.message} - Id do Book não localizado.`})
      } else {
        res.status(200).send(books);
      }
    })
  }

  static cadastrarBook = (req, res) => {
    let book = new books(req.body);

    book.save((err) => {

      if(err) {
        res.status(500).send({message: `${err.message} - falha ao cadastrar Book.`})
      } else {
        res.status(201).send(book.toJSON())
      }
    })
  }

  static atualizarBook = (req, res) => {
    const id = req.params.id;

    books.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err) {
        res.status(200).send({message: 'Book atualizado com sucesso'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

  static excluirBook = (req, res) => {
    const id = req.params.id;

    books.findByIdAndDelete(id, (err) => {
      if(!err){
        res.status(200).send({message: 'Book removido com sucesso'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

}

export default BookController