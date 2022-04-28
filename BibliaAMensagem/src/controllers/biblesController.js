import bibles from "../models/Bible.js";

class BibleController {

  static listarBibles = (req, res) => {
    bibles.find()
      .populate('book')
      .exec((err, bibles) => {
        res.status(200).json(bibles)
  })
  }

  static listarBiblePorId = (req, res) => {
    const id = req.params.id;

    bibles.findById(id)
      .populate('book', 'nome')
      .exec((err, bibles) => {
      if(err) {
        res.status(400).send({message: `${err.message} - Id do bible não localizado.`})
      } else {
        res.status(200).send(bibles);
      }
    })
  }

  static cadastrarBible = (req, res) => {
    let bible = new bibles(req.body);

    bible.save((err) => {

      if(err) {
        res.status(500).send({message: `${err.message} - falha ao cadastrar bible.`})
      } else {
        res.status(201).send(bible.toJSON())
      }
    })
  }

  static atualizarBible = (req, res) => {
    const id = req.params.id;

    bibles.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err) {
        res.status(200).send({message: 'Bible atualizado com sucesso'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

  static excluirBible = (req, res) => {
    const id = req.params.id;

    bibles.findByIdAndDelete(id, (err) => {
      if(!err){
        res.status(200).send({message: 'Bible removido com sucesso'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

  static listarBiblePorEditora = (req, res) => {
    const editora = req.query.editora

    bibles.find({'editora': editora}, {}, (err, bibles) => {
      res.status(200).send(bibles);

    })
  }



}

export default BibleController