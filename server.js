const express = require('express');
const articleRouter = require('./routes/articles');
const app = express();

const PORT = 1000;

app.use(express.static('views'));
app.set('view engine', 'ejs');

app.use('/articles', articleRouter);

app.get('/', (req, res) => {
    const articles = [{
        title: 'test article',
        createdAt: Date.now(),
        descripyion: 'test description'
    }]
    res.render('index', { articles: articles });
})


app.listen(PORT)