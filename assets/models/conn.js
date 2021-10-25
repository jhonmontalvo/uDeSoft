var conn = mysql.createConnection(
    {host: "mysqldb21.mysql.database.azure.com", 
    user: "mysqladmin@mysqldb21", 
    password: {DevSoft21!}, 
    database: {mysqldb21}, 
    port: 3306, 
    ssl:{ca:fs.readFileSync({ca-cert filename})}});
    