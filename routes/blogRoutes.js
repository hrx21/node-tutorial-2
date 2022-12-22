const express = require('express');
const blogController = require('../controllers/blogController');
const Blog = require('../models/blog');
const router = express.Router();

router.get('/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

router.get('/', blogController.blog_index);

router.post('/', (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.redirect('/blogs');
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  console.log(id);
  Blog.findById(id).then((result) => {
    res.render('details', { blog: result, title: 'Blog Details' });
  });
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: '/' });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
