const mysql = require('mysql');
//add conection


var conection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ".......",
    database: "SchoolManagement"
});
//add conected to database
var db = {};

/*Check conection*/ 
db.checkConection = function(){
    conection.connect(function(err){
        if (err) throw err;
        console.log("Conected!!");
    });
};
module.exports = db;