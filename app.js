const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

// express app
const app = express();

// connect to mongodb & listen for requests
const dbURI = 'mongodb+srv://hrx:green1234@cluster0.xxafdqv.mongodb.net/node?retryWrites=true&w=majority'

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(3000))
  .catch(err => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}))
// app.use((req, res, next) => {
//   res.locals.path = req.path;
//   next();
// });

// mongoose & mongo tests
app.get('/add-blog', (req, res) => {
  const blog = new Blog({
    title: 'new blog',
    snippet: 'about my new blog',
    body: 'more about my new blog'
  })

  blog.save()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

app.get('/all-blogs', (req, res) => {
  Blog.find()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

app.get('/single-blog', (req, res) => {
  Blog.findById('5ea99b49b8531f40c0fde689')
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// blog routes
app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

app.get('/blogs', (req, res) => {
  Blog.find().sort({ createdAt: -1 })
    .then(result => {
      res.render('index', { blogs: result, title: 'All blogs' });
    })
    .catch(err => {
      console.log(err);
    });
});

app.post('/blogs',(req, res) => {
    const blog = new Blog(req.body)
    blog.save()
    .then((result)=> {
        res.redirect('/blogs')
    })
    .catch((err) => {
        console.log(err)
    })
})

app.get('/blogs/:id', (req, res)=> {
    const id = req.params.id;
    console.log(id)
})

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});

































// const express = require('express')
// const morgan = require('morgan')
// const mongoose = require('mongoose')
// const Blog = require('./models/blog')

// const app = express()

// app.set('view engine', 'ejs')

// //lidtening requests
// // app.listen(3000)

// const dbURI = 'mongodb+srv://hrx:green1234@cluster0.xxafdqv.mongodb.net/node?retryWrites=true&w=majority'
// mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
//    .then((result) => app.listen(3000))
//    .catch((err) => console.log(err))
 
// app.use(morgan('dev'))
// app.use(express.urlencoded({ extended: true}))

// //midddleware static files
// app.use(express.static('public'))
// // app.use(morgan('dev'))s


// //blog- routes
// app.get('/blogs', (req, res) => {
//     Blog.find().sort({ createdAt: -1 })
//     .then((result) => {
//         res.render('index', {title: 'All Blogs', blogs: result})
//     })
//     .catch((err) => {
//         console.log(err)
//     })
// })

// app.post('/create', (req, res) => {
//     console.log(req.body)
// })

// app.get('/', (req, res) => {
//     const blogs = [
//         {title:'Sam', snippet:'lorem ipsum lorem ipsumlorem ipsumlorem ipsum'},
//         {title:'Sean', snippet:'lorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsum'},
//         {title:'Sonny', snippet:'lorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum'}
//     ]
//     // res.render('index' ,{title:'page'})
//     res.render('index', { title: 'Home', blogs }); 
// })

// app.get('/about', (req, res) => {
//     // res.send('<p>About</p>')
//     // res.sendFile('./doc2/about.ejs' , {root : __dirname})
//     res.render('about') 
// })
// app.get('/create', (req, res) => {
//     // res.send('<p>About</p>')
//     // res.sendFile('./doc2/about.ejs' , {root : __dirname})
//     res.render('create') 
// })

// // redirect
// app.get('/about-us', (req,res) => {
//     res.redirect('/about')
// })
// //404 
// app.use((req, res) => {
//     res.status(404).render('404')
// })