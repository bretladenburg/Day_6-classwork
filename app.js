var operationHours = ['6am' , '7am' , '8am' , '9am' , '10am' , '11am' , '12pm' , '1pm' , '2pm' , '3pm' , '4pm' , '5pm' , '6pm' , '7pm' , '8pm'];

var body = document.getElementsByTagName('body')[0];
console.log('this is the body,' , body);

var storeArr = [];

function cookieStand(name, maxCust, minCust, aveCookie){
  this.location = name;
  this.maxCust = maxCust;
  this.minCust = minCust;
  this.aveCookie = aveCookie;
  this.salesArr = [];

  this.randomCust = function() {
    console.log(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  };

  this.averageCookiesPerHour = function() {
    return this.aveCookie * this.randomCust();
  };

  this.salesPerHour = function() {
    var total = 0;
    for (var i = 0; i < operationHours.length; i++) {
      this.salesArr.push(Math.floor(this.averageCookiesPerHour()));
      total += this.salesArr[i]++;
    }
  };

  this.renderData = function() {
    this.salesPerHour();
    var table = document.getElementsByTagName('table')[0];
    body.appendChild(table);
    var tbody = document.createElement('tbody');
    table.appendChild(tbody);
    var tableRow = document.createElement('tr');
    tbody.appendChild(tableRow);
    var tData = document.createElement('td');
    tableRow.appendChild(tData);
    tData.innerText = this.location;
    for (var i = 0; i < operationHours.length; i++) {
      var newTdata = document.createElement('td');
      tableRow.appendChild(newTdata);
      newTdata.innerText = this.salesArr[i];
    }
  };
};
renderStoreTable = function() {
  var table = document.createElement('table');
  body.appendChild(table);
  var tableHead = document.createElement('thead');
  table.appendChild(tableHead);
  var tableRow = document.createElement('tr');
  tableHead.append(tableRow);
  var tableH = document.createElement('th');
  tableRow.appendChild(tableH);
  for (var i = 0; i < operationHours.length; i++){
    var tableH = document.createElement('th');
    tableRow.appendChild(tableH);
    tableH.innerText = operationHours[i];
  }
};

renderStoreTable();

var firstAndPike = new cookieStand('First and Pike', 65, 23, 6.3);
storeArr.push(firstAndPike);
var seatacAirport = new cookieStand('SeaTac Airport', 24, 3, 1.2);
storeArr.push(seatacAirport);
var seattleCenter = new cookieStand('Seattle Center', 38, 11, 3.7);
storeArr.push(seattleCenter);
var capitalHill = new cookieStand('Captial Hill', 38, 20, 2.3);
storeArr.push(capitalHill);
var alki = new cookieStand('Alki', 16, 2, 4.6);
storeArr.push(alki);

firstAndPike.renderData();
seatacAirport.renderData();
seattleCenter.renderData();
capitalHill.renderData();
alki.renderData();
