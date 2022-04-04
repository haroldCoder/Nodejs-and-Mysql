const mysql = require('mysql');

const letw = mysql.createConnection({
    host: 'localhost',
    user: 'koder',
    password: '2364144',
    database: 'testdb'
});
console.log(letw.connect((err)=>{
   if(err){ console.log(err)}
   console.log("conect to db✔");
}));
module.exports = () => {
    return mysql.createConnection({
    host: 'localhost',
    user: 'koder',
    password: '2364144',
    database: 'testdb'
    });
}

