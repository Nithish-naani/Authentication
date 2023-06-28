// 1 question
const express = require("express");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const path = require("path");
const app = express();

const dbPath = path.join(__dirname, "userData.db");

let db = null;
app.use(express.json());

const initializeDbAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    app.listen(3000, () => {
      console.log("This server is Running in http://localhost:3000/");
    });
  } catch (e) {
    console.log(`DB ERROR - ${e.message}`);
    process.exit(1);
  }
};
initializeDbAndServer();

// Customer Details
app.post("/register", async (request, response) => {
  let { username, phoneNumber, details } = request.body;

  let checkTheUserName = `SELECT * FROM user WHERE username = ${username};`;
  let userData = await db.get(checkTheUserName);

  if (userData === undefined) {
    let postNewUserQuery = `INSERT INTO 
                                     user (username, phoneNumber, details)
                                     VALUES ('${username}', '${phoneNumber}', '${details}',);`;
    let newUserDetails = await db.run(postNewUserQuery);
    response.status(200);
    response.send("User created Successfully");
  } else {
    response.status(400);
    response.send("User Already Exists");
  }
});
export default app;


// 2 question
SELECT customerid, name FROM customers 
INNER JOIN subjects AND subject student mapping 
WHERE subjects.subjectid = subject student mapping.subjectid
ORDER BY subjectName;


// 3 question 
const customers = [{
email : "anurag11@yopmail.com" ,
name : "anurag"
},
{
email : "sameer11@yopmail.com" ,
name : "sameer"
},
{
email : "ravi11@yopmail.com" ,
name : "ravi"
},
{
email : "akash11@yopmail.com" ,
name : "akash"
},
{
email : "anjali11@yopmail.com" ,
name : "anjai"
},
{
email : "santosh11@yopmail.com" ,
name : "santosh"
},
]

const express = require("express");
const {open} = require ("sqlite");
const sqlite3 = require("sqlite3");
const path = require("path");
const app = express();

const dbPath = path.join(__dirname, "userData.db");

let db = null;
app.use(express.json());

const initializeDbAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    app.listen(3000, () => {
      console.log("This server is Running in http://localhost:3000/");
    });
  } catch (e) {
    console.log(`DB ERROR - ${e.message}`);
    process.exit(1);
  }
};
initializeDbAndServer();

app.post("/update", async (request, response) => {
    let {email, name} = request.body;

    let checkUser  = `SELECT * FROM customers WHERE name = ${name};`;
    let data = await db.get(checkUser);

    if (data === undefined) {
        const newQuery = `INSERT INTO customers (email, name)
                            VALUES ('${email}', '${name}',);`;
        const newData = await db.run(newQuery);
        response.status(200);
        response.send("Success");
    } else {
        const updateQuery = `UPDATE name, FROM customers WHERE name = ${name};`;
        const name = await db.run(updateQuery);
        response.send("Updated");
    }
});
export default app;

// 4 question 
const newObj = {
    id,
    gender,
    name,
    age,
    address,
    bloodGroup,
    height,
}

// 6 question
function findMissingNumber(array, n) {
    let i;
    let temp = [];
    for (i = 0; i <= n; i++){
        temp[i] = 0;
    }
    for (i=0; i < n; i++){
        temp[arr[i] - 1] = 1;
    }
    let ans=0;
    for (i=0; i <= n; i++){
        if (temp[i] == 0){
            ans=i+1;
        }

    }
    console.log(ans);
}


let array = [];
let n = array.length;
findMissingNumber(array, n);