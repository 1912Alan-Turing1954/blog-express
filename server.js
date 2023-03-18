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
        createdAt: new Date(),
        description: 'test description'
    },
    {
        title: 'test article 2',
        createdAt: new Date(),
        description: 'test description 2'
    }]
    res.render('articles/index', { articles: articles });
})


app.listen(PORT)