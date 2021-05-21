var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "msitvideolibrary"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  var sql = "INSERT INTO  DSvideolib (VidId , CourseID , Videourl , durationmints , DATEcreated, TYPE, Description ) VALUES ?";
  var values = [
    [ 'DSM0', 'DSW', 'https://youtu.be/fSWAkJz_huQ', '3', 02-05-2021, 'Youtube', 'yt/vjdkvbdfjvbhdbvhjdbfhjb'],
    [ 'DSM2', 'DSW1', 'https://youtu.be/fSWAkJz_huQ', '4', 03-05-2021, 'Youtube', '/nvjdkvbdfjvbhdbvhjdbfhjf'],           
    [ 'DSM3', 'DSW1', 'https://youtu.be/fSWAkJz_huQ', '5', 04-05-2021, 'Youtube', '/dkvbdfjvbhdbvhjdbfhjf'],  
    [ 'DSM', 'DSW1', 'https://youtu.be/fSWAkJz_huQ', '4', 05-05-2021, 'Youtube', '/kvbfjvbhdbvhjdbfhjb'],  
    [ 'DSM', 'DSW1', 'https://youtu.be/fSWAkJz_huQ', '6', 06-05-2021, 'Youtube', '/fjvbhdbvhjdbfhjb'],  
    [ 'DSM1', 'DSW2', 'https://youtu.be/fSWAkJz_huQ', '3', 07-05-2021, 'Youtube', '/jvbhdbvhjdbfhjb'],  
    [ 'DSM2', 'DSW2', 'https://youtu.be/fSWAkJz_huQ', '5', 08-05-2021, 'Youtube', '/fjvbhdbvhjdbfhjb'],  
    [ 'DSM3', 'DSW2', 'https://youtu.be/fSWAkJz_huQ', '8', 09-05-2021, 'Youtube', '/nvjdkvbdfjvbhdbvhjdbfhjb'],  
    [ 'DSM4', 'DSW2', 'https://youtu.be/fSWAkJz_huQ', '4', 10-05-2021, 'Youtube', '/fnvjdkvbdfjvbhdbvhjdbfhjb'],  
    [ 'DSM5', 'DSW2', 'https://youtu.be/fSWAkJz_huQ', '3', 11-05-2021, 'Youtube', '/jdkvbdfjvbhdbvhjdbfhjb'],
    
  ];

  
  
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});



 