'strict';

var timeArray = ['6am', '7am', '8am', '9am', '10am',
  '11am', '12pm', '1pm', '2pm', '3pm',
  '4pm', '5pm', '6pm', '7pm', '8pm'];

var locations = []; //does this serve for the same thing as Store.locations = []; ??

var hourTotal = [];

for (var z = 0; z<timeArray.length; z++){
  hourTotal[z] = 0;
}

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
  //return this.cookiesArray;
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

//Create the table head
var newHead = document.createElement('thead');
var position = document.getElementsByTagName('table')[0];
position.appendChild(newHead);


//create the table tr in the head
var newRow = document.createElement('tr');
position = document.getElementsByTagName('thead')[0];
position.appendChild(newRow);

//use a function to go through and populate the first row with times
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

//create the body for the table
var tBody = document.createElement('tbody');
position = document.getElementsByTagName('table')[0];
position.appendChild(tBody);




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
  //var salesData = this.cookiesByHour();//generate the array cookiesArray
  //salesData.push(this.total);
  //console.log(salesData);
  //again, should use this.cookiesByHour
  for (var h = 0; h < timeArray.length; h++){
    var hourSale = document.createElement('td');
    var saleData = document.createTextNode(this.cookiesArray[h]);
    hourSale.appendChild(saleData);
    // position = document.getElementsByTagName('tr')[l]; //now this part is now making sense
    newRow.appendChild(hourSale);//newRow is the parent, append the a child ('td')
  }

  var fishTotal = document.createElement('td');
  var fishSales = document.createTextNode(this.total);
  fishTotal.appendChild(fishSales);
  newRow.appendChild(fishTotal);

};


//Call funtion to fill in first row with times
tableTimes();

//locations[0].renderDataRow();
var renderTable = function() { 
  for(var t = 0; t < locations.length; t++){
    locations[t].customerByHour();
    //this gives us all the data for the number of cookies
    locations[t].cookiesByHour();//returns an array cookieArray
    locations[t].renderDataRow();

    //change the value of hourTotal with an updated value based on cookies array for location t
    for (var c = 0; c < timeArray.length; c++){
      hourTotal[c] = hourTotal[c] + locations[t].cookiesArray[c];
    }
    console.log('hour total' + hourTotal);
  }

  var newFoot = document.createElement('tfoot');
  position = document.getElementsByTagName('table')[0];
  position.appendChild(newFoot);

  var newFootRow = document.createElement('tr');
  newFoot.appendChild(newFootRow);


  var footLabel = document.createElement('td');
  var footTotalLabel = document.createTextNode('Hourly Totals');
  footLabel.appendChild(footTotalLabel);
  newFootRow.appendChild(footLabel);

  // //fill the array hourTotal with the cookies
  for (var f = 0; f<timeArray.length; f++){
    var newHourTotal = document.createElement('td');
    var theHourTotal = document.createTextNode(hourTotal[f]);
    newHourTotal.appendChild(theHourTotal);
    newFootRow.appendChild(newHourTotal);
  }

  //console.log('this should have 15 values: ' + hourTotal);
};

renderTable();







