const router = require('express').Router();
const { Post } = require('../../models');


// get all Posts
router.get('/', (req, res)=>{})

// get one Post
router.get('/:id', (req, res)=>{})

// Create Post
router.post('/', (req, res)=>{})

// Update Post 
router.put('/:id', (req, res)=>{})

// Delete Post
router.delete('/:id', (req, res)=>{})

module.exports = router;