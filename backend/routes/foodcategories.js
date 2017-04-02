const router = require('express').Router()
const knex = require('../db/knex')

//queries

function getCategories() {
  return knex('foodcategory')
}

function getCategoryById(id) {
  return knex('foodcategory').where('id', id)
}

function createNew(newCategory) {
  return knex('foodcategory').insert(newCategory).returning('*')
}

function updateCategory(id, updateCategoryObj) {
  return knex('foodcategory').where('id', id).update(updateCategoryObj, '*')
}

function deleteCategory(id) {
  return knex('foodcategory').where('id', id).del()
}

//routes

router.get('/', (req, res) => {
  getCategories().then(result => {
    res.json(result)
  })
  .catch(err => {
    console.log(err)
    res.status(503).send(err.message)
  })
})

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  getCategoryById(id).then(result => {
    res.json(result)
  })
  .catch(err => {
    console.log(err)
    res.status(503).send(err.message)
  })
})

router.post('/', (req, res) => {
  createNew(req.body).then(newCategory => {
    res.json(newCategory)
  })
  .catch(err => {
    console.log(err)
    res.status(503).send(err.message)
  })
})

router.put('/:id', (req, res) => {
  const id = Number(req.params.id)
  updateCategory(id, req.body).then(updatedCategory => {
    res.json(updatedCategory)
  })
  .catch(err => {
    console.log(err)
    res.status(503).send(err.message)
  })
})

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  deleteCategory(id).then(() => {
    res.status(204).send('deleted category')
  })
  .catch(err => {
    console.log(err)
    res.status(503).send(err.message)
  })
})
module.exports = router
