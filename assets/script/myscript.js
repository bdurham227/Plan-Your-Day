//function displaying current day and time using moments.js


    //var currentDay = moment().format("dddd, MMMM Do YYYY, h:mm:ss A");
// this variable/function wombo combo is using Jquery selector to get the id currentDay from the html
//its setting its text value to the formatted time from moments
//then a jquery ready function is declared and sets an interval to 1000ms to re-run the function above

var currentDayUpdater = function () {
    $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss A'));
};

$(document).ready(function(){
    setInterval(currentDayUpdater, 1000);
    saveBtn.on('click', function () {
        var text = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');
        console.log(text);
        console.log(time);
        //var time = $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss A'));
        //console.log(time);
   localStorage.setItem(time, text);
    })
    

var rightNow = moment().hour();




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

});

//need to add event listener for saveBtn and sync with local storage
//create local storage for user inputs in the textarea at least get it to setItems into the local storage
//probably need to create a function with a time interval (setInterval) to keep the countTime function relevant or up to date

var saveBtn = $('.saveBtn');
console.log(saveBtn);


var hours = $('.hours')
//creating individual variables for each time 


//var timeBlock = $('.time-block');
//timeBlock.addClass('block').css('background-color: blue;')



//hour8 = moment().subtract('hours', " h:mm:ss a");
//console.log(hour8);
/*var hour8 = localStorage.getItem('description1input');
console.log(hour8);


saveBtn.on('click', function () {
    //hour8.text('.description1input');
    hour8.text(hour8);
    localStorage.setItem('description1input', hour8);
})*/
 

/*var hour8Input = $('#hour8');
var hour8TextInput = ('.description1input');


function renderInput () {
    var hour8 = localStorage.getItem('#hour8');
    hour8TextInput.text(hour8);
}
saveBtn.on('click', function (event) {
    event.preventDefault();
    var hour8 = $('#hour8').val();
localStorage.setItem('hour8', hour8);
})*/

/*var hour8Input = $('#hour8Text');
var hour9Input = $('#hour9Text');
var hour10Input = $('#hour10Text');




var userInput1 = $('.description');
var userInput2 = $('.description1');








function renderInput() {
    var hour8 = localStorage.getItem('hour8');
    var hour9 = localStorage.getItem('hour9');
    var hour10 = localStorage.getItem('hour10');
    userInput1.text(hour8);
    userInput2.text(hour9);
    userInput.text(hour10);


}
saveBtn.on('click', function(event) {
    event.preventDefault();

    var hour8 = $('#hour8Text').val();
    var hour9 = $('#hour9Text').val();
    var hour10 = $('#hour10Text').val();

    localStorage.setItem('hour8', hour8);
    localStorage.setItem('hour9', hour9);
    localStorage.setItem('hour10', hour10);

})*/







//console.log(hour8);
//var hour9 = $('#hour9');
//var hour10 = $('#hour10');
/*var hour11 = $('#hour11');
var hour12 = $('#hour12');
var hour13 = $('#hour13');
var hour14 = $('#hour14');
var hour15 = $('#hour15');
var hour16 = $('#hour16');
var hour17 = $('#hour17');*/








/*for (var i = 0; i < 11; i++) {
    $('.description' + i + 'input').val(localStorage.getItem("description" + i));
    
}


function saveText() {
  
    for (var i = 8; i < 18; i++) {
        localStorage.setItem("description" + i, $('.description' + i + 'input').val());
        console.log(hour8);
    }
};



saveBtn.on('click', saveText);*/



























/*var allTimeBlocks = {
    hour8: $('#hour8').val();
    hour9: $('#hour9');
    hour10: $('#hour10');
}

for (var i = 0; i < allTimeBlocks.length; i++) {

}*/














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
