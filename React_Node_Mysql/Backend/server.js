// Imports
const express=require('express');
const mysql=require('mysql');
const cors=require('cors');
// Express app

const app = express()
app.use(cors());

app.get('',(re,res)=>{
    return res.json("From Backend")
})
// // Mysql server instance
const db =mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mysql',
})
// //Api instance
app.get('/users', (req,res)=>{
    const sql ="SELECT * FROM users";
    db.query(sql,(err,data) => {
        if(err) return res.json(err);
        return res.json(data)

   })

})


// Listeninig Port
app.listen(8081,()=>{
    console.log("Listening");
})