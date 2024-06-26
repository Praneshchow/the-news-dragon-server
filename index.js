const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

// require is like importing. 
const categories = require('./data/categories.json');
const news = require('./data/news.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Dragon is running');
});

app.get('/categories', (req, res) => {
    res.send(categories);
})

app.get('/news', (req, res) => {
    res.send(news);
})

// for id based news.
app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    // console.log(id);
    const selectedNews = news.find(n => n._id === id);
    res.send(selectedNews);
})

// categories based news. 
app.get('/categories/:id', (req, res) => {
    const id = parseInt(req.params.id);
    // console.log(id);
    if (id === 0) {
        res.send(news);         // showing all news. 
    }
    else {
        const categoryNews = news.filter(n => parseInt(n.category_id) === id);
        res.send(categoryNews);         // showing only single news. 
    }
})

app.listen(port, () => {
    console.log(`Dragon API is running on port: ${port}`)
})
