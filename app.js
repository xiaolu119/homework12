const inquirer = require ("inquirer");
const mysql = require ("mysql");
require("console.table");
var connection = mysql.createConnection({
    "host" : "localhost",
    port:3306,
    user:"root",
    password: "",
    database: "homework12",
})

connection.connect(function(err){
    if(err) throw err
      displayOptions()
})


function displayOptions(){
    inquirer.prompt([
        {
            type:"list", 
            message: "two options",
            name: "choice",
            choices: ["Display Employees","Display Roles","Display Departments","Add Employee","Add role", "Add department","Update Employees","exit"]

        }
    ])
    .then(function(res){
        switch(res.choice){
            case "Display Employees":
                displayEmployees();
                break;
            case "Display Roles":
                displayRoles();
                break;
            case "Display Departments":
                displayDepartments();
                break;  
            case "Update Employees":
                updateemployees();
                break;       
            case"Add Employee":
            addemployee();
            break;
            case "Add role":
            addrole();
            break;    
            case"Add department":
            adddepartment();
            break;
            default:process.exit (0);
        }
        })
    
}

function addemployee(){
    console.log("add empl")
    inquirer.prompt([
        {
            type:"input",
            message:"enter first_name",
            name:"first_name",
        },
        {
            type:"input",
            message:"enter last_name",
            name:"last_name",
        },
        {
            type:"list",
            message:"Select role_id",
            name:"role_id",
            choices :[1,2,3,4,5,6,7,8,9,10,11]
        },
        {
            type:"list",
            message:"Select manager_id",
            name:"manager_id",
            choices :[1,2,3]
        }
    ]).then(function(usedata){
    connection.query("insert into employee(first_name, last_name, role_id, manager_id) values(?,?,?,?)", 
    [usedata.first_name, usedata.last_name,usedata.role_id, usedata.manager_id], function(err,res)
    {
     if(err) throw err
     console.log("emloyee added")
     displayOptions()
    })
})
}

function addrole(){
    console.log("add role")
    inquirer.prompt([
        {
            type:"input",
            message:"title",
            name:"title",
        },
        {
            type:"input",
            message:"salary",
            name:"salary",
        },
        {
            type:"list",
            message:"Select department_id",
            name:"department_id",
            choices :[1,2,3]
        }
    ]).then(function(usedata){
    connection.query("insert into role(title, salary, department_id) values(?,?,?)", 
    [usedata.title, usedata.salary,usedata.department_id], function(err,res)
    {
     if(err) throw err
     console.log("role added")
     displayOptions()
    })
})
}

function adddepartment(){
    console.log("add department")
    inquirer.prompt([
        {
            type:"input",
            message:"enter department name",
            name:"name",
        }
    ]).then(function(usedata){
    connection.query("insert into department(name) values(?)", 
    usedata.name, function(err,res)
    {
     if(err) throw err
     console.log("department added")
     displayOptions()
    })
})
}
function displayEmployees(){
connection.query("select * from employee", function(err,res){
    if(err) throw err
    console.table(res)
    displayOptions()
}
)

}

function displayRoles(){
    connection.query("select * from role", function(err,res){
        if(err) throw err
        console.table(res)
        displayOptions()
    }
    )
}


function displayDepartments(){
    connection.query("select * from department", function(err,res){
        if(err) throw err
        console.table(res)
        displayOptions()
    }
    )
}

function updateemployees(){
    inquirer.prompt([
        {
            type:"list",
            message:"Select employee_id",
            name:"employee_id",
            choices :[1,2,3,4,5,6,7,8,9,10]
        },
        {
            type:"list",
            message:"Select role_id",
            name:"role_id",
            choices :[1,2,3,4,5,6,7,8,9,10,11]
        }
    ]).then(function(usedata){
    connection.query("update employee set role_id=? where id=?", 
    [usedata.role_id, usedata.employee_id], function(err,res)
    {
     if(err) throw err
     console.log("emloyee added")
     displayOptions()
    })
})

}