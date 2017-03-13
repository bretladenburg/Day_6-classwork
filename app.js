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
    return this.aveCookie * this.randomCust();
  },
  salesPerHour: function() {
    var firstAndPikeArr = [];
    for (var i = 0; i < operationHours.length; i++) {
      firstAndPikeArr.push(this.averageCookiesPerHour().toFixed(0));
    }
    console.log(firstAndPikeArr);
  }
};

var seatacAirport = {
  maxCust: 65,
  minCust: 23,
  aveCookie: 6.3,
  randomCust : function() {
    console.log(Math.floor(Math.random() * ((this.maxCust - this.minCust) + this.minCust)));
    return Math.floor(Math.random() * ((this.maxCust - this.minCust) + this.minCust));
  },
  averageCookiesPerHour: function() {
    return this.aveCookie * this.randomCust();
  },
  salesPerHour: function() {
    var seatacAirportArr = [];
    for (var i = 0; i < operationHours.length; i++) {
      seatacAirportArr.push(this.averageCookiesPerHour().toFixed(0));
    }
    console.log(seatacAirportArr);
  }

};

var seattleCenter = {
  maxCust: 65,
  minCust: 23,
  aveCookie: 6.3,
  randomCust : function() {
    console.log(Math.floor(Math.random() * ((this.maxCust - this.minCust) + this.minCust)));
    return Math.floor(Math.random() * ((this.maxCust - this.minCust) + this.minCust));
  },
  averageCookiesPerHour: function() {
    return this.aveCookie * this.randomCust();
  },
  salesPerHour: function() {
    var seattleCenterArr = [];
    for (var i = 0; i < operationHours.length; i++) {
      seattleCenterArr.push(this.averageCookiesPerHour().toFixed(0));
    }
    console.log(seattleCenterArr);
  }
};

var capitalHill = {
  maxCust: 65,
  minCust: 23,
  aveCookie: 6.3,
  randomCust : function() {
    console.log(Math.floor(Math.random() * ((this.maxCust - this.minCust) + this.minCust)));
    return Math.floor(Math.random() * ((this.maxCust - this.minCust) + this.minCust));
  },
  averageCookiesPerHour: function() {
    return this.aveCookie * this.randomCust();
  },
  salesPerHour: function() {
    var capitialHillArr = [];
    for (var i = 0; i < operationHours.length; i++) {
      capitialHillArr.push(this.averageCookiesPerHour().toFixed(0));
    }
    console.log(capitialHillArr);
  }
};

var alki = {
  maxCust: 65,
  minCust: 23,
  aveCookie: 6.3,
  randomCust : function() {
    console.log(Math.floor(Math.random() * ((this.maxCust - this.minCust) + this.minCust)));
    return Math.floor(Math.random() * ((this.maxCust - this.minCust) + this.minCust));
  },
  averageCookiesPerHour: function() {
    return this.aveCookie * this.randomCust();
  },
  salesPerHour: function() {
    var alkiArr = [];
    for (var i = 0; i < operationHours.length; i++) {
      alkiArr.push(this.averageCookiesPerHour().toFixed(0));
    }
    console.log(alkiArr);
  }
};
