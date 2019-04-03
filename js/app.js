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
//console.log('here is from array ' + storeArray[1]);

//random number function reference from MDN Math.random docs.
Store.prototype.randomNumber = function(){
  for(var i=0; i<dailyHours.length; i++){
    this.customersPerHour[i] = Math.floor(Math.random()*(this.max-this.min+1))+this.min;
    //console.log(this.customersPerHour);
  }
};

//total cookies sales which is random customer * average cookies.
Store.prototype.cookiesEachHour = function(){
  var total = 0;
  for(var i = 0; i<dailyHours.length; i++){
    this.cookiesPerHour[i] = Math.ceil(this.customersPerHour[i] * this.averageCookieSale);
    //console.log(this.cookiesPerHour[i]);
    total += this.cookiesPerHour[i];
  }
  this.totalCookiesSales = total;
  //console.log(total);
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

//fill the heading
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

// fill the table with locations and cookies per hour value
function populateCookiesPerHour(){
  for(var j=0; j<5; j++){
    var trEl = document.createElement('tr');
    var thEl = document.createElement('th');
    thEl.textContent = storeArray[j];
    //console.log(thEl.textContent);
    trEl.appendChild(thEl);
    table.appendChild(trEl);
    body.appendChild(table);
    for(var i=0; i<dailyHours.length; i++){
      var tdEl = document.createElement('td');
      tdEl.textContent = locationArray[j].cookiesPerHour[i];
      //console.log('cookies per hours   '+locationArray[0].cookiesPerHour[i]);
      trEl.appendChild(tdEl);
    }
    tdEl = document.createElement('td');
    tdEl.textContent = locationArray[j].totalCookiesSales;
    trEl.appendChild(tdEl);
  }
}
populateCookiesPerHour();

function allTotals(){
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Total Each Hour';
  //console.log(thEl.textContent);
  trEl.appendChild(thEl);
  table.appendChild(trEl);
  var tdEl = document.createElement('td');
  var dailyTotal = 0;
  for(var j=0; j<dailyHours.length; j++){
    var total = 0;
    for(var i=0; i<5; i++){
      tdEl.textContent = locationArray[i].cookiesPerHour[j];
      total =total + parseInt(tdEl.textContent);
      dailyTotal = dailyTotal + parseInt(tdEl.textContent);
      //console.log('value here is' + total);
    }
    tdEl.textContent = total;
    //console.log('total sum = ' +tdEl.textContent);
    trEl.appendChild(tdEl);
    tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
  }
  tdEl.textContent = dailyTotal;
  trEl.appendChild(tdEl);
}
allTotals();


// console.log('total cookie sale ' + locationArray[0].cookiesPerHour[0]);
// console.log('total cookie sale ' + locationArray[1].cookiesPerHour[0]);
// console.log('total cookie sale ' + locationArray[2].cookiesPerHour[0]);
// console.log('total cookie sale ' + locationArray[3].cookiesPerHour[0]);
// console.log('total cookie sale ' + locationArray[4].cookiesPerHour[0]);
