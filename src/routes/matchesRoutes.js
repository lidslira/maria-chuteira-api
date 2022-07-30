const controller = require('../controllers/matchesController')
const express = require('express')

const router = express.Router()

router.get("/matches", controller.findAllMatches)
router.get("/matches/:id", controller.findMatchById)
router.post("/matches", controller.createMatch)
router.patch("/matches/:id", controller.updateMatch)
router.delete("/matches/:id", controller.deleteMatch)

module.exports = router