const express = require('express');
const router = express.Router();
const knex = require('../knex');


//
// function validPickup(pickup) {
//   const hasPickup = typeof pickup.p_u_line == 'string' && pickup.p_u_line.trim() != ''
//   const hasCategory = typeof pickup.category == 'string' && pickup.category.trim() != ''
//   const hasRate = typeof pickup.success_rate == 'number' && pickup.successrate.trim() != ''
//   return hasPickup && hasCategory && hasRate
// }

router.get('/', (req, res) => {
   knex('pickups')
  .then(pickups => res.json(pickups))
})

router.get('/:id', (req, res) =>{
  knex('pickups').where('id', req.params.id)
  .first()
  .then(data => res.json(data))
})
//
// router.post('/', (req, res, next) => {
//   if(validPickup(req.body)) {
//     knex('pickups').insert(req.body, '*')
//     .then(pickups =>{
//       res.json(pickups)
//     })
//   } else {
//     next(new Error('Invalid Pickup'))
//   }
// })

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

module.exports = router
