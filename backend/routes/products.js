const router = require('express').Router()
const knex = require('../db/knex')

//Queries
function getAllProducts() {
  return knex('product')
}

function getProductById(id) {
  return knex('product').where('id', id)
}

function getProductsByCategoryId(id) {
  return knex('product').where('category_id', id)
}

function createNew(newProduct) {
  return knex('product').insert(newProduct).returning('*')
}

function updateProduct(id, updateProductObj) {
  return knex('product').where('id', id).update(updateProductObj, '*')
}

function deleteProduct(id) {
  return knex('product').where('id', id).del()
}

router.get('/', (req, res) => {
  getAllProducts().then(result => {
    res.json(result)
  })
  .catch(err => {
    console.log(err)
    res.status(503).send(err.message)
  })
})

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  getProductById(id).then(result => {
    res.json(result)
  })
  .catch(err => {
    console.log(err)
    res.status(503).send(err.message)
  })
})

router.get('/category/:id', (req, res) => {
  const id = Number(req.params.id)
  getProductsByCategoryId(id).then(result => {
    res.json(result)
  })
  .catch(err => {
    console.log(err)
    res.status(503).send(err.message)
  })
})

router.post('/', (req, res) => {
  createNew(req.body).then(newProduct => {
    res.json(newProduct)
  })
  .catch(err => {
    console.log(err)
    res.status(503).send(err.message)
  })
})

router.put('/:id', (req, res) => {
  const id = Number(req.params.id)
  updateProduct(id, req.body).then(updatedProduct => {
    res.json(updatedProduct)
  })
  .catch(err => {
    console.log(err)
    res.status(503).send(err.message)
  })
})

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  deleteProduct(id).then(() => {
    res.status(204).send()
  })
  .catch(err => {
    console.log(err)
    res.status(503).send(err.message)
  })
})

module.exports = router
