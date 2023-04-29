/* Your Code Here */

function createEmployeeRecord(array){
    return {
     firstName : array[0],
     familyName:array[1],
     title: array[2],
     payPerHour: array[3],
     timeInEvents : [],
     timeOutEvents : [] ,
 }
}

function createEmployeeRecords(arrayOfRecords){
 return arrayOfRecords.map((array)=> createEmployeeRecord(array))
}
function createTimeInEvent(dateStamp){
 this.timeInEvents.push({
     type: "TimeIn",
     hour: parseInt(dateStamp.split(' ')[1]),
     date: dateStamp.split(' ')[0]
 })
 return this
}
function createTimeOutEvent(dateStamp){
 this.timeOutEvents.push({
     type: "TimeOut",
     hour: parseInt(dateStamp.split(' ')[1]),
     date: dateStamp.split(' ')[0]
 })
 return this
}
function hoursWorkedOnDate(inputDate){
let inTime = this.timeInEvents.find((ele)=>(ele.date === inputDate )).hour
let outTime = this.timeOutEvents.find((ele)=>(ele.date === inputDate )).hour
return (outTime-inTime)/100
}
function wagesEarnedOnDate(inputDate){
 let wagesEarnedOnGivenDate = hoursWorkedOnDate.call(this,inputDate)*this.payPerHour;
 return wagesEarnedOnGivenDate
}

function calculatePayroll(arrayEmployeeRecords){
 let totalPaymentOwned = 0
 for (const recordObj of arrayEmployeeRecords) {
     totalPaymentOwned = totalPaymentOwned + allWagesFor.call(recordObj)
 }
 return totalPaymentOwned
}
function findEmployeeByFirstName(srcArray, firstName){
 for (const recordObj of srcArray) {
     if (recordObj.firstName === firstName) {
         return recordObj
     } else {
         return undefined
     }        
 }
}

/*
We're giving you this function. Take a look at it, you might see some usage
that's new and different. That's because we're avoiding a well-known, but
sneaky bug that we'll cover in the next few lessons!

As a result, the lessons for this function will pass *and* it will be available
for you to use if you need it!
*/

const allWagesFor = function () {
 const eligibleDates = this.timeInEvents.map(function (e) {
     return e.date
 })
 
 const payable = eligibleDates.reduce(function (memo, d) {
     return memo + wagesEarnedOnDate.call(this, d)
 }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!
 
 return payable
}