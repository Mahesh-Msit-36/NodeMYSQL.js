var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "msitvideolibrary"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "UPDATE DSvideolib SET  CourseID = 'CB1' WHERE CourseID = 'DSW1'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
});