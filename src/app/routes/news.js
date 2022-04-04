const dbConnection = require('../../config/dbconection.js');

module.exports = app =>{
    const connection = dbConnection();
    app.get('/', (req, res) => {

      connection.query('SELECT * FROM news', (err, result) => {
      connection.query('SELECT * FROM news ORDER BY Title', (err, result)=>{
        console.log(result);
      })
          res.render('news/news', {
          news: result
        });
      });
    });

    app.post('/', (req, res) => {
      const { title, news } = req.body;
      connection.query('INSERT INTO news SET?', {
        title,
        news
      }, (err, result)=>{
        res.redirect('/');
      });
    })
}