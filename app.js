var operationHours = ['6am' , '7am' , '8am' , '9am' , '10am' , '11am' , '12pm' , '1pm' , '2pm' , '3pm' , '4pm' , '5pm' , '6pm' , '7pm' , '8pm'];

var firstAndPike = {
  maxCust: 65,
  minCust: 23,
  aveCookie: 6.3,
  randomCust : function() {
    console.log(Math.floor(Math.random() * ((this.maxCust - this.minCust) + this.minCust)));
    return Math.floor(Math.random() * ((this.maxCust - this.minCust) + this.minCust));
  },
  averageCookiesPerHour: function() {
    this.averageCookiesPerHour = this.aveCookie * this.randomCust;
    for (var i = 0; i < operationHours.length; i++) {
      return firstAndPikeArr = [console.log(i), this.averageCookiesPerHour];
    }
    console.log(averageCookiesPerHour);
  },

};

firstAndPike.randomCust();
firstAndPike.averageCookiesPerHour();
console.log(firstAndPike.randomCust);
var seatacAirport = {};

var seattleCenter = {};

var capitalHill = {};

var alki = {};
