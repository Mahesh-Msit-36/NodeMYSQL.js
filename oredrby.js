var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "msitvideolibrary"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM DSvideolib ORDER BY VidId", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});