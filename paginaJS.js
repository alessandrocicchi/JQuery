var data=[
    {
      "id": 10001,
      "birthDate": "1953-09-01",
      "firstName": "Georgi",
      "lastName": "Facello",
      "gender": "M",
      "hireDate": "1986-06-25"
    },
    {
      "id": 10002,
      "birthDate": "1964-06-01",
      "firstName": "Bezalel",
      "lastName": "Simmel",
      "gender": "F",
      "hireDate": "1985-11-20"
    },
    {
      "id": 10003,
      "birthDate": "1959-12-02",
      "firstName": "Parto",
      "lastName": "Bamford",
      "gender": "M",
      "hireDate": "1986-08-27T22:00:00.000+0000"
    },
    {
      "id": 10004,
      "birthDate": "1954-04-30",
      "firstName": "Chirstian",
      "lastName": "Koblick",
      "gender": "M",
      "hireDate": "1986-11-30"
  
    },
    {
      "id": 10005,
      "birthDate": "1955-01-20",
      "firstName": "Kyoichi",
      "lastName": "Maliniak",
      "gender": "M",
      "hireDate": "1989-09-11T22:00:00.000+0000"
  
    }
  ]

  var nextId= 10006;

  function inseriscoDipendente(nome, cognome, annoDiNascita, giornoAssunzione, sesso){

    data.push({
        "id": nextId,
        "firstName": nome,
        "lastName": cognome,
        "birthDate": annoDiNascita,
        "gender": sesso,
        "hireDate": giornoAssunzione,
    })

    nextId++;
  }

  function salvaInput(){
    inseriscoDipendente(
      $("#name").val().trim(),
      $("#lastname").val().trim(),
      $("#birthday").val(),
      $("#hiring-date").val(),
      $("#sex").val()
    );
    stampaDipendenti();
  }
  
  $( window ).on( "load", function() {
    stampaDipendenti();
  })
  
  function eliminaDipendenti(){
    $("#name").val("");
    $("#lastname").val("");
    $("#birthday").val("");
    $("#hiring-date").val("");
  }

  function stampaDipendenti() {
    var rows = "";

    $.each(data, function (key, value) {
      rows += "<tr>";
      rows += "<td>" + value.id + "</td>";
      rows += "<td>" + value.firstName + "</td>";
      rows += "<td>" + value.lastName + "</td>";
      rows += "<td>" + "<button class='delete-button' onclick='eliminaDipendenti(" + value.id + "); stampaDipendenti();'>Cancella</button>" + "</td>";
      rows += "</tr>";
      
    });
    $("#to-fill").html(rows);
}

function rimuoviDipendente(id){
  let i = 0;
  $.each(data, function(key, value){
    if(value.id == id){
      data.splice(i, 1);
    }
    i++;
  })
}
