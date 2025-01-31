const { rejects } = require('assert');
const mysql = require('mysql');
const { resolve } = require('path');
//add conection


var conection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ".........",
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
/*Check Role
input: variable C Type String
Output: String
*/
db.checkRole = function(c){
    return new Promise((resolve,rejects)=>{
        var query = "SELECT * FROM schoolmanagement.role WHERE RoleID = ?";
        conection.query(query,[c],(err,result)=>{
            if (err)
            {
                return rejects(err);
            } 
            else
            {
                return resolve(result[0].RoleName);
            }
        })
    })
};
module.exports = db;