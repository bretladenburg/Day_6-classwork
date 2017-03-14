var operationHours = ['6am' , '7am' , '8am' , '9am' , '10am' , '11am' , '12pm' , '1pm' , '2pm' , '3pm' , '4pm' , '5pm' , '6pm' , '7pm' , '8pm'];

var firstAndPike = {
  maxCust: 65,
  minCust: 23,
  aveCookie: 6.3,
  salesArr: [],
  total:
  randomCust : function() {
    console.log(Math.floor(Math.random() * ((this.maxCust - this.minCust) + this.minCust)));
    return Math.floor(Math.random() * ((this.maxCust - this.minCust) + this.minCust));
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
  li.innerText = 'Total' + ': ' + firstAndPike.total;

};

firstAndPike.renderHtml();

var seatacAirport = {
  maxCust: 65,
  minCust: 23,
  aveCookie: 6.3,
  salesArr: [],
  total:
  randomCust : function() {
    console.log(Math.floor(Math.random() * ((this.maxCust - this.minCust) + this.minCust)));
    return Math.floor(Math.random() * ((this.maxCust - this.minCust) + this.minCust));
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
  li.innerText = 'Total' + ': ' + firstAndPike.total;

};

seatacAirport.renderHtml();

};

var seattleCenter = {
  maxCust: 65,
  minCust: 23,
  aveCookie: 6.3,
  salesArr: [],
  total:
  randomCust : function() {
    console.log(Math.floor(Math.random() * ((this.maxCust - this.minCust) + this.minCust)));
    return Math.floor(Math.random() * ((this.maxCust - this.minCust) + this.minCust));
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
  li.innerText = 'Total' + ': ' + firstAndPike.total;

};

seattleCenter.renderHtml();
};

var capitalHill = {
  maxCust: 65,
  minCust: 23,
  aveCookie: 6.3,
  salesArr: [],
  total:
  randomCust : function() {
    console.log(Math.floor(Math.random() * ((this.maxCust - this.minCust) + this.minCust)));
    return Math.floor(Math.random() * ((this.maxCust - this.minCust) + this.minCust));
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
  li.innerText = 'Total' + ': ' + firstAndPike.total;

};

capitalHill.renderHtml();
};

var alki = {
  maxCust: 65,
  minCust: 23,
  aveCookie: 6.3,
  salesArr: [],
  total:
  randomCust : function() {
    console.log(Math.floor(Math.random() * ((this.maxCust - this.minCust) + this.minCust)));
    return Math.floor(Math.random() * ((this.maxCust - this.minCust) + this.minCust));
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
  li.innerText = 'Total' + ': ' + firstAndPike.total;

};

alki.renderHtml();
};
