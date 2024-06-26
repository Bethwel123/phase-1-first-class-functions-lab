// Code your solution in this file!

function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
}

function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(multiplier) {
    return function (value) {
      return value * multiplier;
    };
  }

function fareDoubler(double) {
    return double * 2;
}

function fareTripler(triple) {
    return triple * 3;
}

function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
}
  
function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
}
  
function selectDifferentDrivers(drivers, driverSelector) {
    return driverSelector(drivers);}
  