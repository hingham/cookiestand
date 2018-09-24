'use strict'

// var timeArray = ['6am', '7am', '8am', '9am', '10am',
//   '11am', '12pm', '1pm', '2pm', '3pm',
//   '4pm', '5pm', '6pm', '7pm', '8pm'];
// var thead = document.getElementsByTagName('thead')[0];
// var tbody = document.getElementsByTagName('tbody')[0];
// var tfoot = document.getElementsByTagName('tfood')[0];
// var addForm = document.getElementById('newStoreForm')[0];

function ranNum(min, max) {
    var randomNumber = Math.floor(Math.random() * (max-min) + 1) + min);
    console.log('random number' + randomNumber);
    return randomNumber;
}


console.log(ranNum());

// function addElement(element, content, parent) {
//     var newElement = document.createElement(element);
//     var newContent = document.createTextNode(content);
//     newElement.appendChild(newContent);
//     parent.appendChild(newElement);
//     return newElement;
// }

// function Store(location, min, max, ave){
//     this.locationName = location;
//     this.mixCustomersPerHour = min;
//     this.maxCustomersPerHour = max;
//     this.avgCookiesPerSale = avg;
//     this.avgCookiesPerSale = avg;
//     this.cookiesPerHour = [];
//     this.totalCookies = [];
//     this.getSales();

//     Store.locations.push(this);
// }

// Store.locations = [];

// Store.prototype.getSales = function (){
//     for ( var i = 0; i< hours.length; i++){
//         var numCustomers = ranNum(
//             this.minCustomersPerHour,
//             this.maxCustomersPerHour

//         );
//     var hourlyCount = Math.floor((numCustomers* this.avgCookiesPerSale));
//     this.cookiesPerHour.push(hourlyCount);
//     this.totalCookies+=hourlyCount;
//     console.table('total' = this.totalCookies);
//     console.log('cookie array' + this.cookiesPerHour);
//     }
// }

// new Store('alki', 10, 15, 2.2);