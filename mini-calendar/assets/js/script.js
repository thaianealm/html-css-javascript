const lang = navigator.language;

let date = new Date();
let dayNumber = date.getDate();
let month = date.getMonth();
let dayName = date.toLocaleString(lang, {weekday: 'long'});
let monthName = date.toLocaleString(lang, {weekday: 'long'});
let year = date.getFullYear();


// assign value to elements
let _number = document.getElementById('number').innerHTML = dayNumber;
let _day = document.getElementById('day').innerHTML = dayName;
let _month = document.getElementById('month').innerHTML = monthName;
let _year = document.getElementById('year').innerHTML = year;


