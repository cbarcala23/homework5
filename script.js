/*

var today = moment().format('dddd, MMMM Do');
$("#day").html(today);

var hour = ["9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm"];

//loop that builds out elements
for (var i = 0; i <= 8; i++) {
    var timestamp = moment().format('hh a');
    var table = $("#table");
    var row = $("<tr>", { 'class': 'row' });
    var time = $("<td>", { 'class': 'hour' }).html(hour[i]);
    var textbox = $("<textarea>").html("");
    var save = $("<button>", { 'class': 'saveBtn' }).html("save");
    row.append(time, textbox, save);
    table.append(row);

    //give each button and text area a different ID
    $(save).attr('id', "ID" + i);
    $(textbox).attr('id', "IDtext" + i);

    //Present Time Color Change
    if (hour[i] == "9 am") {
        $(textbox).addClass("present");
    }
    var datatest = localStorage.getItem("value" + i);
    $(textbox).text(datatest);

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

*/

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