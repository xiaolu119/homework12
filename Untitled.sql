CREATE database homework12;
USE homework12;
CREATE table department(
   id int auto_increment,
   name varchar(30),
   primary key(id));
   
CREATE table role (id int auto_increment, title varchar(30), salary decimal, 
   department_id int, primary key(id), 
  foreign key(department_id) references department(id)); 
create table employee (id int auto_increment, first_name varchar(30), last_name varchar(30),
role_id int, manager_id int, primary key(id), foreign key(role_id) references role(id));
insert into department(name) values("Production"),("Marketing"), ("It");
insert into role(title, salary, department_id) values
("Manager", 100000, 1), ("Manager", 100000, 2), ("Manager", 100000, 3),
("teamleader", 70000, 1), ("teamleader", 70000, 2), ("teamleader", 70000, 3),
("employee", 60000, 1), ("employee", 60000, 2), ("employee", 60000, 3);
insert into employee(first_name, last_name, role_id, manager_id) values
("Toom","Monsoon",1,0 ),("Jim","Colors",2,0),("Leo","Scorpio",3,0),
("Jake","Trumph",4,1),("Obama","Barrack",5,2),("Michael","Leigh",6,3),
("Rich", "Lee",7, 1),("Lisa", "Rose",8,2),("Krista","Avery",9,3);


select * from department;
select * from role;
select * from employee;
