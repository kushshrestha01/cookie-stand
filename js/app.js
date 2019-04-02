'use strict';

var dailyHours = ['6am', '7am', '8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

function Store(min, max, averageCookieSale, locationName, customersPerHour, cookiesPerHour, totalCookieSale){
  
}


var location1 = {
  min:23,
  max:44,
  avergeCookiePerCustomer:3.14,
  locationName:'Pike Place Market',
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookiesSales: 0
};
//random number function reference from MDN Math.random docs.
function randomNumber(location1){
  for(var i=0; i<dailyHours.length; i++){
    location1.customersPerHour[i] = Math.floor(Math.random()*(location1.max-location1.min+1))+location1.min;
    console.log(location1.customersPerHour);
  }
}

function cookiesEachHour(location1){
  for(var i = 0; i<dailyHours.length; i++){
    location1.cookiesPerHour[i] = Math.ceil(location1.customersPerHour[i] * location1.avergeCookiePerCustomer);
    console.log(location1.cookiesPerHour[i]);
    location1.totalCookiesSales += location1.cookiesPerHour[i];
  }
}
randomNumber(location1);
cookiesEachHour(location1);

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
