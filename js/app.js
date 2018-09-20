'strict';

var timeArray = ['6am', '7am', '8am', '9am', '10am',
  '11am', '12pm', '1pm', '2pm', '3pm',
  '4pm', '5pm', '6pm', '7pm', '8pm'];

var locations = []; //does this serve for the same thing as Store.locations = []; ??
var hourTotal = [];
var storeTable = document.getElementsByTagName('table')[0];
var newStoreForm = document.getElementById('newStoreForm');


function numCustomers(min, max){
  console.log('min and max' + min + max);
  var random = Math.random();
  var tootal = Math.floor((random * (max-min + 1)) + min);
  console.log('tootal' + tootal);

  return tootal;
}


function Store(name, min, max, avg){
  this.name = name;
  this.min= min;
  this.max = max;
  this.avg = avg;
  this.customerArray = [];//holds the random numbers of customers for each hour
  this.cookiesArray = [];
  this.total=0;
  this.saleArray = [];
  locations.push(this);
}

//Generates an array of a random number of customers per hour
Store.prototype.customerByHour = function (){
  for (var i = 0; i<timeArray.length; i++){
    this.customerArray.push(numCustomers(this.min, this.max));
  }
  console.log(this.name + ' has ' + this.customerArray);
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
Store.prototype.salesByHour = function() {
  for(var i = 0; i<timeArray.length; i++){
    console.log(this.total);
    console.log(this.cookiesArray);
    this.total += this.cookiesArray[i];
  }
};

new Store('1st-and-Pike', 23, 40, 6.3);
new Store('Seatac', 3, 24, 1.2);
new Store('Seattle-Center', 11, 38, 3.7);
new Store('Capitol-Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);

var generateTable = function () {

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

  tableTimes();
};


Store.prototype.renderDataRow = function () {

  var position = document.getElementsByTagName('tbody')[0];
  var newRow = document.createElement('tr');
  position.appendChild(newRow);
  //get rid of this for loop, should just be making one new row when called
  var newStore = document.createElement('td');
  var storeName = document.createTextNode(this.name);
  newStore.appendChild(storeName);
  newRow.appendChild(newStore);

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




//locations[0].renderDataRow();
var renderTable = function() { 
  for (var z = 0; z<timeArray.length; z++){
    hourTotal[z] = 0;
  }
  for(var t = 0; t < locations.length; t++){
    locations[t].customerByHour();
    locations[t].cookiesByHour();//returns an array cookieArray
    locations[t].salesByHour();
    locations[t].renderDataRow();

    //change the value of hourTotal with an updated value based on cookies array for location t
    for (var c = 0; c < timeArray.length; c++){
      hourTotal[c] = hourTotal[c] + locations[t].cookiesArray[c];
    }
    console.log('hour total' + hourTotal);
  }

  var newFoot = document.createElement('tfoot');
  var position = document.getElementsByTagName('table')[0];
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


generateTable();
renderTable();



function addNewStore(event){
  event.preventDefault();
  //gives each target a variable name
  var newLocation = event.target.locationName.value;
  var newCustomerMin = parseInt(event.target.customerMin.value);
  var newCustomerMax = parseInt(event.target.customerMax.value);
  var newAvgSale = parseInt(event.target.avgSale.value);

  //feed input into constructor function to make new instance of object
  new Store(newLocation, newCustomerMin, newCustomerMax, newAvgSale);



  storeTable.innerHTML='';
  generateTable();
  renderTable();

  //I am getting data of 0 cookies per hour and I don't know why
  //I checked my random number functions and functions that called the random number functions
  //This only happens for the store data I get from the user
}

newStoreForm.addEventListener('submit', addNewStore);





