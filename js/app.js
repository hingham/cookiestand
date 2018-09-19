'strict';

var timeArray = ['6am', '7am', '8am', '9am', '10am',
  '11am', '12pm', '1pm', '2pm', '3pm',
  '4pm', '5pm', '6pm', '7pm', '8pm'];

var locations = []; //does this serve for the same thing as Store.locations = []; ??

function numCustomers(max, min){
  return Math.floor(Math.random()* (max-min + 1)+min);
}

function Store(min, max, avg, name){
  this.name = name;
  this.min= min;
  this.max = max;
  this.avg = avg;
  this.customerArray = [];
  this.cookiesArray = [];
  this.total = 0;
  this.saleArray = [];
  locations.push(this);
}

//Generates an array of a random number of customers per hour
Store.prototype.customerByHour = function (){
  for (var i = 0; i<timeArray.length; i++){
    this.customerArray.push(numCustomers(this.min, this.max));
    console.log(typeof(this.customerArray[1]) );
  }
  return this.customerArray;
};



//Generates the number of cookies sold per hour multiplying customers by avg cookie sales
Store.prototype.cookiesByHour = function(){
  for(var i=0; i<timeArray.length; i++){
    var mult = Math.floor(this.customerArray[i] * this.avg);
    console.log(mult);
    this.cookiesArray.push(mult);
  }
  return this.cookiesArray;
};


//totals all the cookie sales at the end of the day
Store.prototype.totalSales = function() {
  for(var i = 0; i<timeArray.length; i++){
    this.total = this.total + this.cookiesArray[i];
  }
  return this.total;
};



//this concatenates time with sales per hour to print a nice readable list
Store.prototype.salesByHour = function() {
  console.log(timeArray[1]);
  console.log(this.cookiesArray[1]);
  for(var i = 0; i<timeArray.length; i++){
    this.saleArray.push(timeArray[i] + ': ' + this.cookiesArray[i] + ' cookies.');
  }
  this.saleArray.push('Total: ' + this.total);
  return this.saleArray;
};


new Store(23, 40, 6.3, '1st-and-Pike');
new Store(3, 24, 1.2, 'Seatac');
new Store(11, 38, 3.7, 'Seattle-Center');
new Store(20, 38, 2.3, 'Capitol-Hill');
new Store(2, 16, 4.6, 'Alki');


for (var i = 0; i < locations.length; i++){
  locations[i].customerByHour() ;
  locations[i].cookiesByHour() ;
  console.log(locations[i].totalSales() );
}

var newHead = document.createElement('thead');
var position = document.getElementsByTagName('table')[0];
position.appendChild(newHead);

var newRow = document.createElement('tr');
position = document.getElementsByTagName('thead')[0];
position.appendChild(newRow);

var tableTimes = function(){
  var firstColumn = document.createElement('th');
  var columnName = document.createTextNode('Store Names');
  firstColumn.appendChild(columnName);
  position = document.getElementsByTagName('tr')[0];
  position.appendChild(firstColumn);
  for (var x = 0; x<timeArray.length; x++){
    var newTime = document.createElement('th');
    var hour = document.createTextNode(timeArray[x]);
    newTime.appendChild(hour);
    position = document.getElementsByTagName('tr')[0];
    position.appendChild(newTime);
  }
  var lastColumn = document.createElement('th');
  var columnTotal = document.createTextNode('Total');
  lastColumn.appendChild(columnTotal);
  position = document.getElementsByTagName('tr')[0];
  position.appendChild(lastColumn);

};

tableTimes();

var tBody = document.createElement('tbody');
position = document.getElementsByTagName('table')[0];
position.appendChild(tBody);

var newFoot = document.createElement('tfoot');
position.appendChild(newFoot);


Store.prototype.renderDataRow = function () {

  position = document.getElementsByTagName('tbody')[0];
  var newRow = document.createElement('tr');
  position.appendChild(newRow);
  //get rid of this for loop, should just be making one new row when called
  var newStore = document.createElement('td');
  var storeName = document.createTextNode(this.name);
  newStore.appendChild(storeName);
  newRow.appendChild(newStore);
  //shouldn't have to use locations--just this.name--it knows what instance it is
  var salesData = this.cookiesByHour();
  salesData.push(this.total);
  console.log(salesData);
  //again, should use this.cookiesByHour
  for (var h = 0; h < timeArray.length; h++){
    var hourSale = document.createElement('td');
    var saleData = document.createTextNode(salesData[h]);
    hourSale.appendChild(saleData);
    // position = document.getElementsByTagName('tr')[l]; //now this part is now making sense
    newRow.appendChild(hourSale);//newRow is the parent, append the a child ('td')
  }

  var fishTotal = document.createElement('td');
  var fishSales = document.createTextNode(this.total);
  fishTotal.appendChild(fishSales);
  newRow.appendChild(fishTotal);

};

locations[0].renderDataRow();
locations[1].renderDataRow();







