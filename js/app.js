'use strict';

var timeArray = ['6am', '7am', '8am', '9am', '10am',
  '11am', '12pm', '1pm', '2pm', '3pm',
  '4pm', '5pm', '6pm', '7pm', '8pm'];
var thead = document.getElementsByTagName('thead')[0];
var tbody = document.getElementsByTagName('tbody')[0];
var tfoot = document.getElementsByTagName('tfoot')[0];
var newStoreForm = document.getElementById('newStoreForm')[0];

function ranNum(min, max) {
  var randomNumber = Math.floor(Math.random() * (max-min + 1) + min);
  console.log('random number' + randomNumber);
  return randomNumber;
}



function addElement(element, content, parent) {
  var newElement = document.createElement(element);
  var newContent = document.createTextNode(content);
  newElement.appendChild(newContent);
  parent.appendChild(newElement);
  return newElement;
}

function Store(location, min, max, avg){
  this.locationName = location;
  this.minCustomersPerHour = min;
  this.maxCustomersPerHour = max;
  this.avgCookiesPerSale = avg;
  this.avgCookiesPerSale = avg;
  this.cookiesPerHour = [];
  this.totalCookies= 0 ;
  this.getSales();

  Store.locations.push(this);
}

Store.locations = [];

Store.prototype.getSales = function (){
  for ( var i = 0; i< timeArray.length; i++){
    var numCustomers = ranNum(
      this.minCustomersPerHour,
      this.maxCustomersPerHour
    );
    console.log(numCustomers);
    var hourlyCount = Math.floor((numCustomers * this.avgCookiesPerSale));
    this.cookiesPerHour.push(hourlyCount);
    this.totalCookies += hourlyCount;
    console.log('total' + this.totalCookies);
    console.log('cookie array' + this.cookiesPerHour);
  }
};

//This method creates a row for a given location and a cell for every data entry and fills that entry with values from cookiesPerHour
Store.prototype.render = function () {
  var tr = addElement('tr', '', tbody);
  addElement('td', this.locationName, tr);
  for (var i = 0; i< this.cookiesPerHour.length; i++){
    addElement('td', this.cookiesPerHour[i], tr);
    // var input = addElement('input', '', td);
    //td.value = this.cookiesPerHour[i];
  }
  addElement('th', this.totalCookies, tr);
};

//Creaters header
function renderHeader() {
  //clears the header
  thead.innerHTML = '';
  //adds a row to the table header
  var tr = addElement('tr', '', thead);
  //adds an cell that says 'Stores' to the header
  addElement('th', 'Stores', tr);

  //loops through time array and adds the times across the top of the table
  for(var i = 0; i<timeArray.length; i++){
  //creates an cell for each time and adds it to the row
    addElement('th', timeArray[i], tr);
  }
}

function renderFooter(){
  //clear foot, add a row to the foot, and then add a data cell that says 'Hourly Total' to the row
  tfoot.innerHTML = '';
  var tr = addElement('tr', '', tfoot);
  addElement('th', 'Hourly Total', tr);

  //creates a variable to store the grand total
  var grandTotal = 0;
  //console.log(grandTotal);
  //loops through the time array
  for (var i = 0; i<timeArray.length; i++){
    //set hourTotal to 0 so each columns is added seperately
    var hourTotal = 0;
    //loops through the locations
    for (var x = 0; x<Store.locations.length; x++){
      //loops through the locations and sums the amount sold at that hour for a fixed index in the cookiesPerHour 
      hourTotal += Store.locations[x].cookiesPerHour[i];
      //sums all totals from each column
      grandTotal += Store.locations[x].cookiesPerHour[i];
    }
    //create a cell and append the row to include the hourTotal
    addElement('th', hourTotal, tr);
  }
  //create a cell and append the row to include grandTotal
  addElement('th', grandTotal, tr);
}


//this function calls the render method for every store location
function renderStore(){
  tbody.innerHTML = '';
  for (var i=0; i<Store.locations.length; i++){
    //loops through every store and calls the render function 
    Store.locations[i].render();
  }
}


//add a new store
function handleSubmit(event) {
  event.preventDefault();
  var locationName = event.target.location.value;
  var min = parseInt(event.target.customerMin.value);
  var max = parseInt(event.target.customerMax.value);
  var avg = parseFloat(event.target.avg.value);

  var store = new Store (locationName, min, max, avg);

  console.log(store);
  console.log(Store.locations);
  tbody.innerHTML='';
  // store.render();
  // renderFooter();
}



newStoreForm.addEventListener('submit', handleSubmit);


new Store('Pike Place', 22, 65, 6.3);
new Store('Seatac', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);

renderHeader();
renderStore();
renderFooter();


console.log('locations' + Store.locations);






