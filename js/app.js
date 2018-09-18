'strict';

var timeArray = ['6am', '7am', '8am', '9am', '10am',
  '11am', '12pm', '1pm', '2pm', '3pm',
  '4pm', '5pm', '6pm', '7pm', '8pm'];


var FirstnPike = {
  min: 23,
  max: 65,
  avgSale: 6.3,
  customerArray: [],
  //generates array for random num of customers per hour
  customerByHour: function (){
    for (var i = 0; i<timeArray.length; i++){
      this.customerArray.push(numCustomers(this.min, this.max));
      console.log(typeof(this.customerArray[1]) );
    }
    return this.customerArray;
  },

  //generates random number of sales per hour using the numbers from customerArray and 6.3
  cookiesArray: [],
  cookiesByHour: function(){
    console.log(this.customerArray[1]);
    for(var i=0; i<timeArray.length; i++){
      var mult = Math.floor(this.customerArray[i] * this.avgSale);
      this.cookiesArray.push(mult);
    }
    return this.cookiesArray;
  },

  //calculates the total
  total: 0,
  totalSales:function(){
    for(var i = 0; i<timeArray.length; i++){
      this.total = this.total + this.cookiesArray[i];
    }
    //console.log('total: ' + this.total);
    return this.total;
  },

  //creates a string that can put put on the string
  saleArray: [],
  salesByHour: function (){
    console.log(timeArray[1]);
    console.log(this.cookiesArray[1]);
    for(var i = 0; i<timeArray.length; i++){
      this.saleArray.push(timeArray[i] + ': ' + this.cookiesArray[i] + ' cookies.');
    }
    this.saleArray.push('Total: ' + this.total);
    return this.saleArray;
  },

  display: function(){
    for(var i = 0; i<=timeArray.length; i++){
      var newLi = document.createElement('li');
      var saleItem = document.createTextNode(FirstnPike.saleArray[i]);
      newLi.appendChild(saleItem);
      var position =document.getElementById('first-pike');
      position.appendChild(newLi);
    }
  },

  render: function(){
    this.customerByHour();
    this.cookiesByHour();
    this.totalSales();
    this.salesByHour();
    this.display();
  },

  

  // display: function(){
  //   for(var i = 0; i<=timeArray.length; i++){
  //     var newLi = document.createElement('li');
  //     var saleItem = document.createTextNode(FirstnPike.saleArray[i]);
  //     newLi.appendChild(saleItem);
  //     var position =document.getElementById('first-pike');
  //     position.appendChild(newLi);
  //   }
  // }


};


//FirstnPike;


function numCustomers(min, max){
  return Math.floor(Math.random()* (max-min + 1)+min);
}

var SeaTac = {
  min: 3,
  max: 24,
  avgSale: 1.2,

  customerArray: [],
  customerByHour: function (){
    for (var i =0; i<timeArray.length; i++){
      this.customerArray.push(numCustomers(this.min, this.max));
      console.log(typeof(this.customerArray[1]) );
    }
    return this.customerArray;
  },

  cookiesArray: [],
  cookiesByHour: function(){
    console.log(this.customerArray[1]);

    for(var i=0; i<timeArray.length; i++){
      var mult = Math.floor(this.customerArray[i] * this.avgSale);
      this.cookiesArray.push(mult);
    }
    return this.cookiesArray;
  },

  saleArray: [],
  salesByHour: function (){
    console.log(timeArray[1]);
    console.log(this.cookiesArray[1]);
    for(var i = 0; i<timeArray.length; i++){
      this.saleArray.push(timeArray[i] + ': ' + this.cookiesArray[i] + ' cookies.');
    }
    return this.saleArray;
  },

  total: 0,
  totalSales:function(){
    for(var i = 0; i<timeArray.length; i++){
      this.total = this.total + this.cookiesArray[i];
    }
    this.saleArray.push('Total: ' + this.total);
    console.log('total: ' + this.total);

    console.log(this.saleArray);
  }
};

var seattleCenter = {
  min: 11,
  max: 38,
  avgSale: 3.7,

  customerArray: [],
  customerByHour: function (){
    for (var i =0; i<timeArray.length; i++){
      this.customerArray.push(numCustomers(this.min, this.max));
      console.log(typeof(this.customerArray[1]) );
    }
    return this.customerArray;
  },

  cookiesArray: [],
  cookiesByHour: function(){
    console.log(this.customerArray[1]);

    for(var i=0; i<timeArray.length; i++){
      var mult = Math.floor(this.customerArray[i] * this.avgSale);
      this.cookiesArray.push(mult);
    }
    return this.cookiesArray;
  },

  saleArray: [],
  salesByHour: function (){
    console.log(timeArray[1]);
    console.log(this.cookiesArray[1]);
    for(var i = 0; i<timeArray.length; i++){
      this.saleArray.push(timeArray[i] + ': ' + this.cookiesArray[i] + ' cookies.');
    }
    return this.saleArray;
  },

  total: 0,
  totalSales:function(){
    for(var i = 0; i<timeArray.length; i++){
      this.total = this.total + this.cookiesArray[i];
    }
    this.saleArray.push('Total: ' + this.total);
    console.log('total: ' + this.total);

    console.log(this.saleArray);
  }
};

var capHill = {
  min: 20,
  max: 38,
  avgSale: 2.3,

  customerArray: [],
  customerByHour: function (){
    for (var i =0; i<timeArray.length; i++){
      this.customerArray.push(numCustomers(this.min, this.max));
      console.log(typeof(this.customerArray[1]) );
    }
    return this.customerArray;
  },

  cookiesArray: [],
  cookiesByHour: function(){
    console.log(this.customerArray[1]);

    for(var i=0; i<timeArray.length; i++){
      var mult = Math.floor(this.customerArray[i] * this.avgSale);
      this.cookiesArray.push(mult);
    }
    return this.cookiesArray;
  },

  saleArray: [],
  salesByHour: function (){
    console.log(timeArray[1]);
    console.log(this.cookiesArray[1]);
    for(var i = 0; i<timeArray.length; i++){
      this.saleArray.push(timeArray[i] + ': ' + this.cookiesArray[i] + ' cookies.');
    }
    return this.saleArray;
  },

  total: 0,
  totalSales:function(){
    for(var i = 0; i<timeArray.length; i++){
      this.total = this.total + this.cookiesArray[i];
    }
    this.saleArray.push('Total: ' + this.total);
    console.log('total: ' + this.total);

    console.log(this.saleArray);
  }
};

var alki = {
  min: 2,
  max: 16,
  avgSale: 4.6,

  customerArray: [],
  customerByHour: function (){
    for (var i =0; i<timeArray.length; i++){
      this.customerArray.push(numCustomers(this.min, this.max));
      console.log(typeof(this.customerArray[1]) );
    }
    return this.customerArray;
  },

  cookiesArray: [],
  cookiesByHour: function(){
    console.log(this.customerArray[1]);

    for(var i=0; i<timeArray.length; i++){
      var mult = Math.floor(this.customerArray[i] * this.avgSale);
      this.cookiesArray.push(mult);
    }
    return this.cookiesArray;
  },

  saleArray: [],
  salesByHour: function (){
    console.log(timeArray[1]);
    console.log(this.cookiesArray[1]);
    for(var i = 0; i<timeArray.length; i++){
      this.saleArray.push(timeArray[i] + ': ' + this.cookiesArray[i] + ' cookies.');
    }
    return this.saleArray;
  },

  total: 0,
  totalSales:function(){
    for(var i = 0; i<timeArray.length; i++){
      this.total = this.total + this.cookiesArray[i];
    }
    this.saleArray.push('Total: ' + this.total);
    console.log('total: ' + this.total);
    console.log(this.saleArray);
  }
};


FirstnPike.render();


// console.log(FirstnPike.customerByHour() );
// console.log(FirstnPike.cookiesByHour() );
// FirstnPike.totalSales();
// console.log(FirstnPike.salesByHour() );


console.log(SeaTac.customerByHour());
console.log(SeaTac.cookiesByHour());
console.log(SeaTac.salesByHour() );
SeaTac.totalSales();

console.log(seattleCenter.customerByHour());
console.log(seattleCenter.cookiesByHour() );
console.log(seattleCenter.salesByHour());
seattleCenter.totalSales();

console.log(capHill.customerByHour());
console.log(capHill.cookiesByHour() );
console.log(capHill.salesByHour());
capHill.totalSales();

console.log(alki.customerByHour());
console.log(alki.cookiesByHour() );
console.log(alki.salesByHour());
alki.totalSales();


// for(var i = 0; i<=timeArray.length; i++){
//   var newLi = document.createElement('li');
//   var saleItem = document.createTextNode(FirstnPike.saleArray[i]);
//   newLi.appendChild(saleItem);
//   var position =document.getElementById('first-pike');
//   position.appendChild(newLi);
// }

for(var i = 0; i<=timeArray.length; i++){
  var newLi = document.createElement('li');
  var saleItem = document.createTextNode(SeaTac.saleArray[i]);
  newLi.appendChild(saleItem);
  var position = document.getElementById('seatac');
  position.appendChild(newLi);
}

for(i = 0; i<=timeArray.length; i++){
  newLi = document.createElement('li');
  saleItem = document.createTextNode(seattleCenter.saleArray[i]);
  newLi.appendChild(saleItem);
  position = document.getElementById('Seattle-Center');
  position.appendChild(newLi);
}

for(i = 0; i<=timeArray.length; i++){
  newLi = document.createElement('li');
  saleItem = document.createTextNode(capHill.saleArray[i]);
  newLi.appendChild(saleItem);
  position = document.getElementById('capitol-hill');
  position.appendChild(newLi);
}

for(i = 0; i<=timeArray.length; i++){
  newLi = document.createElement('li');
  saleItem = document.createTextNode(alki.saleArray[i]);
  newLi.appendChild(saleItem);
  position = document.getElementById('alki');
  position.appendChild(newLi);
}







