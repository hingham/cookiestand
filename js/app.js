'strict';

var timeArray = ['6am', '7am', '8am', '9am', '10am', 
  '11am', '12pm', '1pm', '2pm', '3pm', 
  '4pm', '5pm', '6pm', '7pm', '8pm'];

var FirstnPike = {
  min: 23,
  max: 65,
  avgSale: 6.3,
  customerArray: [],
  customerByHour: function (){
    for (var i = 0; i<timeArray.length; i++){
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

};



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
  }
};



console.log(FirstnPike.customerByHour() );
console.log(FirstnPike.cookiesByHour() );
console.log(FirstnPike.salesByHour() );

console.log(SeaTac.salesByHour() );

console.log(seattleCenter.salesByHour() );


for(var i = 0; i<timeArray.length; i++){
  var newLi = document.createElement('li');
  var saleItem = document.createTextNode(FirstnPike.saleArray[i]);
  newLi.appendChild(saleItem);
  var position =document.getElementById('first-pike');
  position.appendChild(newLi);
}

for(i = 0; i<timeArray.length; i++){
  newLi = document.createElement('li');
  saleItem = document.createTextNode(SeaTac.saleArray[i]);
  newLi.appendChild(saleItem);
  position = document.getElementById('seatac');
  position.appendChild(newLi);
}

for(i = 0; i<timeArray.length; i++){
  newLi = document.createElement('li');
  saleItem = document.createTextNode(seattleCenter.saleArray[i]);
  newLi.appendChild(saleItem);
  position = document.getElementById('seattleCenter');
  position.appendChild(newLi);
}

for(i = 0; i<timeArray.length; i++){
  newLi = document.createElement('li');
  saleItem = document.createTextNode(seattleCenter.saleArray[i]);
  newLi.appendChild(saleItem);
  position = document.getElementById('seattleCenter');
  position.appendChild(newLi);
}





