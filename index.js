const returnFirstTwoDrivers = function(array) {
    return firstTwoArray = [array[0], array[1]];
}

const returnLastTwoDrivers = function(array) {
    return lastTwoArray = array.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(integer) {
    return function(fare) {
        return fare * integer;
    }
}

function fareDoubler(fare) {
    return fare * 2;
}

function fareTripler(fare) {
    return fare * 3;
}

function fetchSpecifiedDrivers(driverArray, func) {
    return func(driverArray);
}