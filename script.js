//far fa-save

var today = moment().format('dddd, MMMM Do');
$("#day").html(today);

//store global array for hour labels
var hour = ["9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm"];
//store the starting hour to compare and set row styles in loop
var starthour = 9;
//store the current timestamp hour in military time to compare to the start hour as it is incremented in loop
var timestamp = moment().format('H');

//loop that builds out elements
for (var i = 0; i <= 8; i++) {


  var table = $("#table");
  var row = $("<tr>", { 'class': 'row' });
  var time = $("<td>", { 'class': 'hour' }).html(hour[i]);
  var textbox = $("<textarea>").html("");
  var save = $("<button>", { 'class': 'saveBtn'}).html("save");
  row.append(time, textbox, save);
  table.append(row);

  //give each button and text area a different ID
  //$(save).attr('id', "ID"+i);
  $(textbox).attr('id', "IDtext" + i);

  var justhour = hour[i].replace(/\D/g, '');

  //Present Time Color Change
  if (starthour == timestamp) {
    console.log(justhour, timestamp);
    $(textbox).addClass("present");
  }
  //Future Time Color Change
  if (starthour > timestamp) {
    $(textbox).addClass("future");
  }
  //Past Time Color Change
  if (starthour < timestamp) {
    console.log(justhour, timestamp);
    $(textbox).addClass("past");
  }

  //get the data back from storage and place in textbox again
  var dataAddedback = localStorage.getItem("value" + i);
  $(textbox).text(dataAddedback);

  //increment starthour for next row to compare
  starthour++;

}

//Storage values of each text area
$('.saveBtn').click(function () {
  console.log(this.id);
  var inputtext = document.getElementById("IDtext0");
  localStorage.setItem("value0", inputtext.value);
  var data = localStorage.getItem("value0");
  console.log(data);
});

$('.saveBtn').click(function () {
  console.log(this.id);
  var inputtext = document.getElementById("IDtext1");
  localStorage.setItem("value1", inputtext.value);
  var data = localStorage.getItem("value1");
  console.log(data);
});

$('.saveBtn').click(function () {
  console.log(this.id);
  var inputtext = document.getElementById("IDtext2");
  localStorage.setItem("value2", inputtext.value);
  var data = localStorage.getItem("value2");
  console.log(data);
});

$('.saveBtn').click(function () {
  console.log(this.id);
  var inputtext = document.getElementById("IDtext3");
  localStorage.setItem("value3", inputtext.value);
  var data = localStorage.getItem("value3");
  console.log(data);
});

$('.saveBtn').click(function () {
  console.log(this.id);
  var inputtext = document.getElementById("IDtext4");
  localStorage.setItem("value4", inputtext.value);
  var data = localStorage.getItem("value4");
  console.log(data);
});

$('.saveBtn').click(function () {
  console.log(this.id);
  var inputtext = document.getElementById("IDtext5");
  localStorage.setItem("value5", inputtext.value);
  var data = localStorage.getItem("value5");
  console.log(data);
});

$('.saveBtn').click(function () {
  console.log(this.id);
  var inputtext = document.getElementById("IDtext6");
  localStorage.setItem("value6", inputtext.value);
  var data = localStorage.getItem("value6");
  console.log(data);
});

$('.saveBtn').click(function () {
  console.log(this.id);
  var inputtext = document.getElementById("IDtext7");
  localStorage.setItem("value7", inputtext.value);
  var data = localStorage.getItem("value7");
  console.log(data);
});

$('.saveBtn').click(function () {
  console.log(this.id);
  var inputtext = document.getElementById("IDtext8");
  localStorage.setItem("value8", inputtext.value);
  var data = localStorage.getItem("value8");
  console.log(data);
});



// a.function to build scheduler Rows(function name buildRows) -> loop, moment.js(maybe)
function buildRows() {

}

// b.set date at the top of the page(showTodaysDate) -> moment.js
function showTodaysDate() {

}

// c.save button event handler(function saverow) -> uses localstorage
function saveRows() {

}

// d.change row styles(function updateRowStyle) -> moment.js (update style for those that are past hours, present hour, future hours)

function updateRowStyle() {

}

// i.on page load, check current time(hour) against rows in scheduler
function getTime() {

}

//buildRows();