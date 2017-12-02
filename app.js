var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
var firstDate = new Date();
var secondDate = new Date(2017,11,14);

var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));

var days = 550;
document.getElementById('day').innerText = diffDays;
document.getElementById('res').innerText = days - diffDays;
console.log(diffDays)