There are three required setup steps to run the program. 

First: Set up a postgresql user and tables inside postgres with the following commands.
$CREATE USER intern430 WITH PASSWORD '4al6z3n79k3';
$\i s.sql 

Second: Set up the backend with the following commands. 
$cd back 
$npm install express body-parser cors pg

Third: Set up front end with the following commands (inside 430intern directory).
$npm install


Running the Program: 
Run the backend 
$cd back
$node index.js 

Run the frontend (inside 430intern directory)  
$npm run dev  

Visit the site: http://localhost:3000/


