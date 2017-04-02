const router = require('express').Router()
const knex = require('../db/knex')

//Queries
function getFarms() {
  return knex('farm')
}

function getFarmById(id) {
  return knex('farm').where('id', id)
}

function createNewFarm(newFarm) {
  return knex('farm').insert(newFarm).returning('*')
}

function updateFarm(id, newFarm) {
  return knex('farm').where('id', id).update(newFarm, '*')
}

function deleteFarm(id) {
  return knex('farm').where('id', id).del()
}
//routes
router.get('/', (req, res) => {
  getFarms().then(result => {
    res.json(result)
  })
  .catch(err => {
    console.log(err)
    res.status(503).send(err.message)
  })
})
router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  getFarmById().then(result => {
    res.json(result)
  })
  .catch(err => {
    console.log(err)
    res.status(503).send(err.message)
  })
})
router.post('/', (req, res) => {
  createNewFarm(req.body).then(newFarm => {
    res.json(newFarm)
  })
  .catch(err => {
    console.log(err)
    res.status(503).send(err.message)
  })
})
router.put('/:id', (req, res) => {
  const id = Number(req.params.id)
  updateFarm(id, req.body).then(updatedFarm => {
    res.json(updatedFarm)
  })
  .catch(err => {
    console.log(err)
    res.status(503).send(err.message)
  })
})

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  deleteFarm(id).then(() => {
    res.status(204).send()
  })
  .catch(err => {
    console.log(err)
    res.status(503).send(err.message)
  })
})

module.exports = router
