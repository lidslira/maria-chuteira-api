 const MatchModel = require('../models/matchesModel')
 const jwt = require('jsonwebtoken')
 const SECRET = process.env.SECRET
 
 const createMatch = async (req, res) => {
   try {
     const authHeader = req.get('authorization')
     if (!authHeader) {
       return res.status(401).send('Wheres the authorization, gatinha?')
     }

     const token = authHeader.split(' ') [1]
 
   await jwt.verify(token, SECRET, async function (erro) {
 
     if (erro) {
       return res.status(403).send('Not happening')
     }
     const { name, address, numTeams, date, hour } = req.body
 
     const newMatch = new MatchModel({
      name, address, numTeams, date, hour
     })
 
     const savedMatch = await newMatch.save()
     
     res.status(201).json(savedMatch)
     })
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: error.message })
    }
 }
 
 const findAllMatches = async (req, res) => {
   try {
     const authHeader = req.get('authorization')
 
     if (!authHeader) {
       return res.status(401).send('Wheres the authorization, gatinha?')
     }
 
     const token = authHeader.split(' ') [1]
 
     await jwt.verify(token, SECRET, async function (erro) {
 
       if (erro) {
         return res.status(403).send('Not happening')
       }
 
       const allMatchs = await MatchModel.find()
       res.status(200).json(allMatchs)
     })
   } catch(error) {
     console.error(error)
     res.status(500).json({ message: error.message})
   }
 }
 
 const findMatchById = async (req, res) => {
    try {
     const authHeader = req.get('authorization')
 
     if (!authHeader) {
       return res.status(401).send('Wheres the authorization, gatinha?')
     }
 
     const token = authHeader.split(' ') [1]
 
     await jwt.verify(token, SECRET, async function (erro) {
 
       if (erro) {
         return res.status(403).send('Not happening')
     }
      
     const findMatch = await MatchModel.findById(req.params.id)
     res.status(200).json(findMatch)
     })
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: error.message })
    }
 }
 
 const updateMatch = async (req, res) => {
   try {
     const authHeader = req.get('authorization')
 
     if (!authHeader) {
       return res.status(401).send('Wheres the authorization, gatinha?')
     }
 
     const token = authHeader.split(' ') [1]
 
     await jwt.verify(token, SECRET, async function (erro) {
 
       if (erro) {
         return res.status(403).send('Not happening')
     }
     const { name, address, numTeams, date, hour } = req.body
     const updatedMatch = await MatchModel
     .findByIdAndUpdate(req.params.id, {
      name, address, numTeams, date, hour
     })
     res.status(200).json(updatedMatch)
   })
   } catch (error) {
     console.error(error)
     res.status(500).json({ message: error.message })
   }
 }
 
 const deleteMatch = async (req, res) => {
    try {
     const authHeader = req.get('authorization')
 
     if (!authHeader) {
       return res.status(401).send('Wheres the authorization, gatinha?')
     }
 
     const token = authHeader.split(' ') [1]
 
     await jwt.verify(token, SECRET, async function (erro) {
 
       if (erro) {
         return res.status(403).send('Not happening')
     }
       const { id } = req.params
       await MatchModel.findByIdAndDelete(id)
       const message = `The match with the id ${id} has been deleted successfully!`
     res.status(200).json({ message })
     })
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: error.message })
    }
 }
 
 module.exports =  {
  createMatch, findAllMatches, updateMatch, deleteMatch, findMatchById
 }