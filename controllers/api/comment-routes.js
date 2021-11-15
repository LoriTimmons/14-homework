const router = require('express').Router();
const { Comment } = require('../../models');


// get all Comments
router.get('/', (req, res)=>{})

// get one Comment
router.get('/:id', (req, res)=>{})

// Create Comment
router.post('/', (req, res)=>{})

// Update Comment
router.put('/:id', (req, res)=>{})

// Delete Comment
router.delete('/:id', (req, res)=>{})

module.exports = router;