fetch('js/data.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.log(err);
  });
  var obj, dbParam, xmlhttp, myObj,i, x = ""; txt = "";
  var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    x += "<table  border='1'>"
    for (i in myObj.pastTransactions) {
       x += "<tr>" + "<td>" + myObj.pastTransactions[i].date +  "</td>"+"<td>" + myObj.pastTransactions[i].cardNumber +  "</td>"+"</td>"+"<td>" + myObj.pastTransactions[i].amount +  "</td>"+"</tr>";
    }
     x += "</table>"    
    document.getElementById("jsresult").innerHTML = x;

    document.getElementById("patient-id").innerHTML = myObj.patientName;
    document.getElementById("practice-id").innerHTML = myObj.practice + " " + myObj.zipCode;
    document.getElementById("counter1").innerHTML = myObj.totalAmount;
    document.getElementById("counter2").innerHTML = myObj.previouslyPaid;
    document.getElementById("counter3").innerHTML = myObj.balanceDue;
  }
};
xmlhttp.open("GET", "js/data.json", true);
xmlhttp.send();





