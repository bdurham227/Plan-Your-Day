//function displaying current day and time using moments.js


    var currentDay = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    $('#currentDay').text(currentDay);



   /* if (now > 8) {
        $("#comment9am").addClass("past");
      } else if (now >= 8 && now < 9) {
        $("#comment9am").addClass("present");
      } else if (now < 9) {
        $("#comment9am").addClass("future");
      }*/
    



//to dos
var timeSlot = $('.description');
var currentHour = $('.time-block');
//console.log(currentHour);
var rightNow = moment().hour();
//console.log(rightNow);


function checkTime() {
    //=============0800=================
    if (rightNow > 7 ) {
        $('#hour8').addClass("past");
    } else if (rightNow >= 7 && rightNow < 8) {
        $('#hour8').addClass("present");
    } else {
        $('#hour8').addClass('future');
    }
    //===========0900==============
    if (rightNow > 8 ) {
        $('#hour9').addClass("past");
    } else if (rightNow >= 8 && rightNow < 9) {
        $('#hour9').addClass("present");
    } else {
        $('#hour9').addClass('future');
    }
    //===============1000===============
    if (rightNow > 9 ) {
        $('#hour10').addClass("past");
    } else if (rightNow >= 9 && rightNow < 10) {
        $('#hour10').addClass("present");
    } else {
        $('#hour10').addClass('future');
    }
    //=============1100============
    if (rightNow > 10 ) {
        $('#hour11').addClass("past");
    } else if (rightNow >= 10 && rightNow < 11) {
        $('#hour11').addClass("present");
    } else {
        $('#hour11').addClass('future');
    }
    //==============1200===============
    if (rightNow > 11 ) {
        $('#hour12').addClass("past");
    } else if (rightNow >= 11 && rightNow < 12) {
        $('#hour12').addClass("present");
    } else {
        $('#hour12').addClass('future');
    }
    //==============1300=================
    if (rightNow > 12 ) {
        $('#hour13').addClass("past");
    } else if (rightNow >= 12 && rightNow < 13) {
        $('#hour13').addClass("present");
    } else {
        $('#hour13').addClass('future');
    }
    //===============1400====================
    if (rightNow > 13 ) {
        $('#hour14').addClass("past");
    } else if (rightNow >= 13 && rightNow < 14) {
        $('#hour14').addClass("present");
    } else {
        $('#hour14').addClass('future');
    }
    //============1500=================
    if (rightNow > 14 ) {
        $('#hour15').addClass("past");
    } else if (rightNow >= 14 && rightNow < 15) {
        $('#hour15').addClass("present");
    } else {
        $('#hour15').addClass('future');
    }
    //===============1600===============
    if (rightNow > 15 ) {
        $('#hour16').addClass("past");
    } else if (rightNow >= 15 && rightNow < 16) {
        $('#hour16').addClass("present");
    } else {
        $('#hour16').addClass('future');
    }
    //=============1700==================
    if (rightNow > 16 ) {
        $('#hour17').addClass("past");
    } else if (rightNow >= 16 && rightNow < 17) {
        $('#hour17').addClass("present");
    } else {
        $('#hour17').addClass('future');
    }
























}
checkTime();



var saveBtn = $('.saveBtn');
console.log(saveBtn);



var hours = $('.hours')
//creating individual variables for each time 


var timeBlock = $('.time-block');
timeBlock.addClass('block').css('background-color: blue;')

var hour8 = $('#hour8');

//hour8 = moment().subtract('hours', " h:mm:ss a");
//console.log(hour8);
var hour9 = $('#hour9');
var hour10 = $('#hour10');
var hour11 = $('#hour11');
var hour12 = $('#hour12');
var hour13 = $('#hour13');
var hour14 = $('#hour14');
var hour15 = $('#hour15');
var hour16 = $('#hour16');
var hour17 = $('#hour17');















//function that when a user inputs text 






/*var content = $('input[class="description"]');
localStorage.getItem('content');

content.text(content);
//console.log(content);

saveBtn.on('click', function(event) {
    event.preventDefault();
    content.text(content);
    localStorage.setItem("content", content);
    localStorage.setItem("content", JSON.stringify(content));
});*/






/*saveBtn.on('submit', function(event) {
    event.preventDefault();

localStorage.setItem("textValue", JSON.stringify(textValue));
handleFormSubmit();
//renderText();
});*/

/*function renderText() {
    var lastInputText = JSON.parse(localStorage.getItem("textValue"));
    if (lastInputText !== null) {
        $('input[class="description"]').text(lastInputText.textValue.content);

    }
}*/







//create two variables for time
//one variable for current time to compare against another variable for the current time

//we need to use jquery to select the textarea look up find

//need a variable to select the timerow class

//need an event listener that will trigger saving local storage

//to create different colors for the hour areas we can chain if else statements












//the timeblocks need color to indicate whether they are past present or future

//might have something to do with moments.js but not 100% sure yet
//currently the user can type into the timeblock

//TO DO- need to add local storage to the file
//the information saved from local storage is kept on the browser page even if the page is refreshed
//the save button is going to need an event listener that will most likely lead into a localstorage event

//look up how to keep information saved to the local storage stay on the page
