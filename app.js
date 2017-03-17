'use strict';

var operationHours = ['6am' , '7am' , '8am' , '9am' , '10am' , '11am' , '12pm' , '1pm' , '2pm' , '3pm' , '4pm' , '5pm' , '6pm' , '7pm' , '8pm'];

var body = document.getElementById('table');

var storesArr = [];

var firstAndPike = new CookieStand('First and Pike', 65, 23, 6.3);
var seatacAirport = new CookieStand('SeaTac Airport', 24, 3, 1.2);
var seattleCenter = new CookieStand('Seattle Center', 38, 11, 3.7);
var capitalHill = new CookieStand('Captial Hill', 38, 20, 2.3);
var alki = new CookieStand('Alki', 16, 2, 4.6);

function CookieStand(name, maxCust, minCust, aveCookie){
  this.name = name;
  this.maxCust = maxCust;
  this.minCust = minCust;
  this.aveCookie = aveCookie;
  this.total = 0;
  this.salesArr = [];

  this.randomCust = function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  };

  this.averageCookiesPerHour = function() {
    return this.aveCookie * this.randomCust();
  };

  this.salesPerHour = function() {
    for (var i = 0; i < operationHours.length; i++) {
      var cookiesPerHour = this.salesArr.push(Math.floor(this.averageCookiesPerHour()));
      this.total += cookiesPerHour;
    }
  };

  this.renderData = function() {
    this.salesPerHour();
    var table = document.getElementsByTagName('table')[0];
    body.appendChild(table);
    var tbody = document.getElementById('tbody');
    table.appendChild(tbody);
    var tableRow = document.createElement('tr');
    tbody.appendChild(tableRow);
    var tData = document.createElement('td');
    tableRow.appendChild(tData);
    tData.innerText = this.name;
    for (var i = 0; i < operationHours.length; i++) {
      var newTdata = document.createElement('td');
      tableRow.appendChild(newTdata);
      newTdata.innerText = this.salesArr[i];
    }
  };

  storesArr.push(this);
}
renderStoreTable = function() {
  var table = document.createElement('table');
  body.appendChild(table);
  var tableHead = document.createElement('thead');
  table.appendChild(tableHead);
  var tbody = document.createElement('tbody');
  table.appendChild(tbody);
  tbody.id = 'tbody';
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

function tableTotals() {
  var newTR = document.createElement('tr');
  var tbody = document.getElementById('tbody');
  tbody.appendChild(newTR);
  var newTD = document.createElement('td');
  newTR.appendChild(newTD);
  newTD.innerText = 'Totals';
  for (var i = 0; i < operationHours.length; i++) {
    var total = 0;
    for (var j = 0; j < storesArr.length; j++) {
      total += storesArr[j].salesArr[i];
    }
    var totalData = document.createElement('td');
    newTR.appendChild(totalData);
    totalData.innerText = total;
  }
}

for (var i = 0; i < storesArr.length; i++) {
  storesArr[i].renderData();
}

tableTotals();

var form = document.getElementById('the-form');
function userInput(event) {
  event.preventDefault();
  var tbody = document.getElementById('tbody');
  if (maximumCustomers === NaN || minimumCustomers === NaN || averageCookies === NaN) {
    alert('please input a number');
  } else if (maximumCustomers < minimumCustomers) {
    alert('your max number cannnot be less than your min number!');
  } else {
    event.preventDefault();
    var newStoreForm = event.target;
    var storeName = newStoreForm.elements['Store Location'];
    var maximumCustomers = newStoreForm.elements['Maximum Customers'];
    var minimumCustomers = newStoreForm.elements['Minimum Customers'];
    var averageCookies = newStoreForm.elements['Average Cookies Sold Per Hour'];
    var newCookieStand = new CookieStand(storeName.value, Math.floor(maximumCustomers.value), Math.floor(minimumCustomers.value), averageCookies.value);
    tbody.removeChild(tbody.lastChild);
    newCookieStand.renderData();
    tableTotals();
    form.reset();
  };

};

form.addEventListener('submit', userInput);

// firstAndPike.renderData();
// seatacAirport.renderData();
// seattleCenter.renderData();
// capitalHill.renderData();
// alki.renderData();
