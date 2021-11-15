const router = require('express').Router();
const { User } = require('../../models');


// get all users 
router.get('/', (req, res)=>{})

// get one user
router.get('/:id', (req, res)=>{})

// Create User
router.post('/', (req, res)=>{})

// Update User 
router.put('/:id', (req, res)=>{})

// Delete User
router.delete('/:id', (req, res)=>{})

module.exports = router;