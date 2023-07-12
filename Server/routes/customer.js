const express =  require('express');

const appForEmps = express.Router();
const mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     :  'root',
    password :  'manager65',
    database :  'hackathon2'
   });

//    Query for login
appForEmps.get("/:usernameToPass", (request, response)=>
{
    var query = `select first_name, password from users where first_name = '${request.params.usernameToPass}'`;
    connection.query(query, (error, result)=>{
                if(error==null)
                {
                    var data = JSON.stringify(result) 
                    response.setHeader("Content-Type","application/json");
                    response.write(data);
                } 
                else
                {
                    console.log(error);
                    response.setHeader("Content-Type","application/json");
                    response.write(error)
                }
                response.end();
    })

})

//    Query for register
appForEmps.post("/", (request, response)=>
{
    var query = `insert into users(first_name, last_name, email, password, mobile)
            values('${request.body.first_name}','${request.body.last_name}',
            '${request.body.email}','${request.body.password}','${request.body.mobile}')`;
    connection.query(query, (error, result)=>{
                if(error==null)
                {
                    var data = JSON.stringify(result) 
                    response.setHeader("Content-Type","application/json");
                    response.write(data);
                } 
                else
                {
                    console.log(error);
                    response.setHeader("Content-Type","application/json");
                    response.write(error)
                }
                response.end();
    })

})

module.exports = appForEmps;