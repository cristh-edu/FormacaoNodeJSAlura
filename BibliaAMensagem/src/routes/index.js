import express from "express";
import bibles from "./biblesRoutes.js"
import books from "./booksRoutes.js"

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({titulo: "Curso de node"})
  })

  app.use(
    express.json(),
    bibles,
    books
  )
}

export default routes