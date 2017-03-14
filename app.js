var operationHours = ['6am' , '7am' , '8am' , '9am' , '10am' , '11am' , '12pm' , '1pm' , '2pm' , '3pm' , '4pm' , '5pm' , '6pm' , '7pm' , '8pm'];

var body = document.getElementsByTagName('body')[0];

var firstAndPike = {
  name: 'First and Pike',
  maxCust: 65,
  minCust: 23,
  aveCookie: 6.3,
  salesArr: [],
  randomCust: function() {
    console.log(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  averageCookiesPerHour: function() {
    return this.aveCookie * this.randomCust();
  },
  salesPerHour: function() {
    var total = 0;
    for (var i = 0; i < operationHours.length; i++) {
      this.salesArr.push(this.averageCookiesPerHour().toFixed(0));
      total += this.averageCookiesPerHour();
    }
    this.salesArr.push(this.total);
  },

  renderHtml: function() {
    this.salesPerHour();
    var ul = document.createElement('ul');
    var h2 = document.createElement('h2');
    h2.innerText = this.name;
    body.appendChild(h2);
    for (var i = 0; i < operationHours.length; i++) {
      var li = document.createElement('li');
      li.innerText = operationHours[i] + ': ' + this.salesArr[i] + ' cookies';
      ul.appendChild(li);
    }
    body.appendChild(ul);
  }
  var li = document.createdElement('li');
  li.innerText = 'Total' + ': ' + salesPerHour.total;

};

firstAndPike.renderHtml();

var seatacAirport = {
  maxCust: 65,
  minCust: 23,
  aveCookie: 6.3,
  salesArr: [],
  total:
  randomCust: function() {
    console.log(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  averageCookiesPerHour: function() {
    return this.aveCookie * this.randomCust();
  },
  salesPerHour: function() {
    for (var i = 0; i < operationHours.length; i++) {
      this.salesArr.push(this.averageCookiesPerHour().toFixed(0));
    }
  },

  renderHtml: function() {
    this.salesPerHour();
    var body = document.getElementsByTagName('body')[0];
    var ul = document.createElement('ul');
    for (var i = 0; i < operationHours.length; i++) {
      var li = document.createElement('li');
      li.innerText = operationHours[i] + ': ' + this.salesArr[i] + ' cookies';
      ul.appendChild(li);
    }
    body.appendChild(ul);
  }
  var li = document.createdElement('li');
  li.innerText = 'Total' + ': ' + seatacAirport.total;

};

seatacAirport.renderHtml();

};

var seattleCenter = {
  maxCust: 65,
  minCust: 23,
  aveCookie: 6.3,
  salesArr: [],
  total:
  randomCust: function() {
    console.log(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  averageCookiesPerHour: function() {
    return this.aveCookie * this.randomCust();
  },
  salesPerHour: function() {
    for (var i = 0; i < operationHours.length; i++) {
      this.salesArr.push(this.averageCookiesPerHour().toFixed(0));
    }
  },

  renderHtml: function() {
    this.salesPerHour();
    var body = document.getElementsByTagName('body')[0];
    var ul = document.createElement('ul');
    for (var i = 0; i < operationHours.length; i++) {
      var li = document.createElement('li');
      li.innerText = operationHours[i] + ': ' + this.salesArr[i] + ' cookies';
      ul.appendChild(li);
    }
    body.appendChild(ul);
  }
  var li = document.createdElement('li');
  li.innerText = 'Total' + ': ' + seattleCenter.total;

};

seattleCenter.renderHtml();
};

var capitalHill = {
  maxCust: 65,
  minCust: 23,
  aveCookie: 6.3,
  salesArr: [],
  total:
  randomCust: function() {
    console.log(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  averageCookiesPerHour: function() {
    return this.aveCookie * this.randomCust();
  },
  salesPerHour: function() {
    for (var i = 0; i < operationHours.length; i++) {
      this.salesArr.push(this.averageCookiesPerHour().toFixed(0));
    }
  },

  renderHtml: function() {
    this.salesPerHour();
    var body = document.getElementsByTagName('body')[0];
    var ul = document.createElement('ul');
    for (var i = 0; i < operationHours.length; i++) {
      var li = document.createElement('li');
      li.innerText = operationHours[i] + ': ' + this.salesArr[i] + ' cookies';
      ul.appendChild(li);
    }
    body.appendChild(ul);
  }
  var li = document.createdElement('li');
  li.innerText = 'Total' + ': ' + capitalHill.total;

};

capitalHill.renderHtml();
};

var alki = {
  maxCust: 65,
  minCust: 23,
  aveCookie: 6.3,
  salesArr: [],
  total:
  randomCust: function() {
    console.log(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  averageCookiesPerHour: function() {
    return this.aveCookie * this.randomCust();
  },
  salesPerHour: function() {
    for (var i = 0; i < operationHours.length; i++) {
      this.salesArr.push(this.averageCookiesPerHour().toFixed(0));
    }
  },

  renderHtml: function() {
    this.salesPerHour();
    var body = document.getElementsByTagName('body')[0];
    var ul = document.createElement('ul');
    for (var i = 0; i < operationHours.length; i++) {
      var li = document.createElement('li');
      li.innerText = operationHours[i] + ': ' + this.salesArr[i] + ' cookies';
      ul.appendChild(li);
    }
    body.appendChild(ul);
  }
  var li = document.createdElement('li');
  li.innerText = 'Total' + ': ' + alki.total;

};

alki.renderHtml();
};
