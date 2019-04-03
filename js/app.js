'use strict';

var dailyHours = ['6am', '7am', '8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

function Store(min, max, averageCookieSale, locationName){
  this.min = min;
  this.max = max;
  this.averageCookieSale = averageCookieSale;
  this.locationName = locationName;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.totalCookiesSales = 0;
}
var location1 = new Store(23,64,3.14,'Pike Place Market');
var location2 = new Store(3,24,1.2,'SeaTac Airport');
var location3 = new Store(11,38,3.7,'Seattle Center');
var location4 = new Store(20,38,3.3,'Capitol Hill');
var location5 = new Store(2,16,4.6,'Alki');

var locationArray = [];
locationArray.push(location1);
locationArray.push(location2);
locationArray.push(location3);
locationArray.push(location4);
locationArray.push(location5);

var storeArray = [location1.locationName,location2.locationName,location3.locationName,location4.locationName,location5.locationName,];
console.log('here is from array ' + storeArray[1]);

//random number function reference from MDN Math.random docs.
Store.prototype.randomNumber = function(){
  for(var i=0; i<dailyHours.length; i++){
    this.customersPerHour[i] = Math.floor(Math.random()*(this.max-this.min+1))+this.min;
    console.log(this.customersPerHour);
  }
};

//total cookies sales which is random customer * average cookies.
Store.prototype.cookiesEachHour = function(){
  var total = 0;
  for(var i = 0; i<dailyHours.length; i++){
    this.cookiesPerHour[i] = Math.ceil(this.customersPerHour[i] * this.averageCookieSale);
    console.log(this.cookiesPerHour[i]);
    total += this.cookiesPerHour[i];
  }
  this.totalCookiesSales = total;
  console.log(total);
};

//For location 1 random number and cookies each hour
location1.randomNumber(location1);
location1.cookiesEachHour();

//For location 2 random number and cookies each hour
location2.randomNumber(location2);
location2.cookiesEachHour();

//For location 3 random number and cookies each hour
location3.randomNumber(location3);
location3.cookiesEachHour();

//For location 4 random number and cookies each hour
location4.randomNumber(location4);
location4.cookiesEachHour();

//For location 5 random number and cookies each hour
location5.randomNumber(location5);
location5.cookiesEachHour();

var body = document.getElementById('table1');
var table = document.createElement('table');
function headingForTime(){
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  trEl.appendChild(thEl);
  for(var i = 0; i<dailyHours.length; i++){
    thEl = document.createElement('th');
    thEl.textContent = dailyHours[i];
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Daily Location Total';
  trEl.appendChild(thEl);
  table.appendChild(trEl);
  body.appendChild(table);
}
headingForTime();


for(var j=0; j<5; j++){
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = storeArray[j];
  console.log(thEl.textContent);
  trEl.appendChild(thEl);
  table.appendChild(trEl);
  body.appendChild(table);
  for(var i=0; i<dailyHours.length; i++){
    var tdEl = document.createElement('td');
    tdEl.textContent = locationArray[j].cookiesPerHour[i];
    console.log('cookies per hours   '+locationArray[0].cookiesPerHour[i]);
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = locationArray[j].totalCookiesSales;
  trEl.appendChild(tdEl);
}



//table.appendChild(trEl);
//body.appendChild(table);


// for(var i = 0; i < dailyHours.length; i++){
//   var trEl = document.createElement('tr');
//   var tdEl = document.createElement('td');
//   tdEl.textContent = Store[i].locationName;
//   trEl.appendChild(tdEl);
// }
// table.appendChild(trEl);
// table.appendChild(table);
//th for header







/* OLD WAY
//1st and Pike
var location1 = {
  min: 24,
  max: 65,
  averageCookieSale: 6.3,
  totalCookieSale: [],
  randomtotalsale: function() {
    for (var i = 0; i < 15; i++){
      var randomCustomer =  Math.random() * (this.max - this.min) + this.min;
      this.totalCookieSale[i] = randomCustomer * this.averageCookieSale;
      this.totalCookieSale.push(i);
    }
  },
};
location1.randomtotalsale();
var ulEl = document.getElementById('store1');
var totalSum1 = 0;
for (var i = 0; i <15; i++) {
  // create a <li> element
  var liEl = document.createElement('li');
  // give it content
  var roundedNumber = Math.round(location1.totalCookieSale[i]);
  liEl.textContent = dailyHours[i] + ' : ' + roundedNumber;
  console.log('hellooo '+liEl.textContent);
  totalSum1 = totalSum1 + roundedNumber;
  console.log('here is the sum ' + totalSum1);
  // put it in the DOM
  ulEl.appendChild(liEl);
}

console.log('here is the sum final' + totalSum1);
document.getElementById('location1Sum').innerHTML = totalSum1;

//SeaTac Airport
var location2 = {
  min: 3,
  max: 24,
  averageCookieSale: 1.2,
  totalCookieSale: [],
  randomtotalsale: function() {
    for (var i = 0; i < 15; i++){
      var randomCustomer =  Math.random() * (this.max - this.min) + this.min;
      this.totalCookieSale[i] = randomCustomer * this.averageCookieSale;
      this.totalCookieSale.push(i);
    }
  },
};
location2.randomtotalsale();
ulEl = document.getElementById('store2');
var totalSum2 = 0;
for (i = 0; i <15; i++) {
  // create a <li> element
  liEl = document.createElement('li');
  var roundedNumber2 = Math.round(location2.totalCookieSale[i]);
  // give it content
  liEl.textContent = dailyHours[i] + ' : ' + roundedNumber2;
  console.log('hellooo '+liEl.textContent);
  totalSum2 = totalSum2 + roundedNumber2;
  // put it in the DOM
  ulEl.appendChild(liEl);
}
document.getElementById('location2Sum').innerHTML = totalSum2;

//Seattle Center
var location3 = {
  min: 11,
  max: 38,
  averageCookieSale: 3.7,
  totalCookieSale: [],
  randomtotalsale: function() {
    for (var i = 0; i < 15; i++){
      var randomCustomer =  Math.random() * (this.max - this.min) + this.min;
      this.totalCookieSale[i] = randomCustomer * this.averageCookieSale;
      this.totalCookieSale.push(i);
    }
  },
};
location3.randomtotalsale();
ulEl = document.getElementById('store3');
var totalSum3 = 0;
for (i = 0; i <15; i++) {
  // create a <li> element
  liEl = document.createElement('li');
  var roundedNumber3 = Math.round(location3.totalCookieSale[i]);
  // give it content
  liEl.textContent = dailyHours[i] + ' : ' + roundedNumber3;
  console.log('hellooo '+liEl.textContent);
  totalSum3 = totalSum3 + roundedNumber3;
  // put it in the DOM
  ulEl.appendChild(liEl);
}
document.getElementById('location3Sum').innerHTML = totalSum3;

//Capitol Hill
var location4 = {
  min: 20,
  max: 38,
  averageCookieSale: 2.3,
  totalCookieSale: [],
  randomtotalsale: function() {
    for (var i = 0; i < 15; i++){
      var randomCustomer =  Math.random() * (this.max - this.min) + this.min;
      this.totalCookieSale[i] = randomCustomer * this.averageCookieSale;
      this.totalCookieSale.push(i);
    }
  },
};
location4.randomtotalsale();
ulEl = document.getElementById('store4');
var totalSum4 = 0;
for (i = 0; i <15; i++) {
  // create a <li> element
  liEl = document.createElement('li');
  var roundedNumber4 = Math.round(location4.totalCookieSale[i]);
  // give it content
  liEl.textContent = dailyHours[i] + ' : ' + roundedNumber4;
  console.log('hellooo '+liEl.textContent);
  totalSum4 = totalSum4 + roundedNumber4;
  // put it in the DOM
  ulEl.appendChild(liEl);
}
console.log('here is the sum4 '+ totalSum4);
document.getElementById('location4Sum').innerHTML = totalSum4;

//Alki
var location5 = {
  min: 2,
  max: 16,
  averageCookieSale: 4.6,
  totalCookieSale: [],
  randomtotalsale: function() {
    for (var i = 0; i < 15; i++){
      var randomCustomer =  Math.random() * (this.max - this.min) + this.min;
      this.totalCookieSale[i] = randomCustomer * this.averageCookieSale;
      this.totalCookieSale.push(i);
    }
  },
};
location5.randomtotalsale();
ulEl = document.getElementById('store5');
var totalSum5 = 0;
for (i = 0; i <15; i++) {
  // create a <li> element
  liEl = document.createElement('li');
  var roundedNumber5 = Math.round(location5.totalCookieSale[i]);
  // give it content
  liEl.textContent = dailyHours[i] + ' : ' + roundedNumber5;
  console.log('hellooo '+liEl.textContent);
  totalSum5 = totalSum5 + roundedNumber5;
  // put it in the DOM
  ulEl.appendChild(liEl);
}
document.getElementById('location5Sum').innerHTML = totalSum5;

//Current Date
// var d = new Date();
// console.log('date '+ d);
// document.getElementById('date').innerHTML = d;
*/