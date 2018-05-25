const express = require('express');
const router = express.Router();
const knex = require('knex');


router.get('/', (res, req) => {
  return knex('pickups')
  .then(pickups => res.json(pickups))
})

router.get('/:id', (req, res) =>{
  knex('pickups').where('id', req.params.id)
  .first()
  .then(data => res.json(data))
})

router.post('/', (req, res) => {
  knex('pickups').insert(req.body, '*')
  .then(pickups =>{
    res.json(pickups)
  })
})

router.put('/:id', (req, res) =>{
  knex('pickups').where('id', req.params.id).update(req.body, '*')
  .then(pickups => res.json(pickups[0]))
})

router.delete('/:id', (req, res) =>{
  knex('pickups').where('id', req.params.id).del()
  .then(() =>
    res.json({
      deleted: true
    })
  )
})
