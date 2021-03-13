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
    $('.saveBtn').on('click', function () {
        //create a variable called text
        //$(this) refers to what activated the code or what started THIS sequence of events
        //after console logging $(this) I see that it is the savebtn obviously because we put an event listener on it
        //but it was great to see it in the log
        //I then played around with the consolelog
        //trying to think of ways to access it I went and reviewed and looked up Jquery dom traversing
        //i console logged parent and saw that the parent was the div with the time-block class
        //knowing this i consoled logged if $(this) had any siblings and it did, .description
        //know that now Im thinking well we want its value right bc we see that the div with class hour is a sibling
        //but its not a textarea and isnt really relevant to what we are trying to do
        //console.log($(this));
        //console.log($(this).parent());
       // console.log($(this).siblings());

        var text = $(this).siblings('.description').val();
        //know what $(this)'s parent was the timeblock div I know that it had a class and an id. the class is on every single other timeblock
        //so its not helpful for trying to store unique inputs so I knew we had to get the id attribute
        var time = $(this).parent().attr('id');
        //console.log(text.siblings());
        //console.log(text.parent());
        //var time = $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss A'));
        //console.log(time);
   localStorage.setItem(time, text);
   
    });

   
  
   





function checkTime() {
    
    var rightNow = moment().hour();
    //originally chained a ton of if else statements going to try something a bit cleaner
    //for each loops through each time block get $(this) or timeblock by and splits
    $('.time-block').each(function () {
        var timeSlots = parseInt($(this).attr("id").split("hour")[1]);
        //console.log(timeSlots);

        if (timeSlots < rightNow) {
            $(this).addClass('past');
        } 
        else if (timeSlots === rightNow)
         {
            $(this).removeClass('past');
            $(this).removeClass('future');
            $(this).addClass('present');
        } 
        else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
        }
    })


}
//getting from local storage
$('#hour8 .description').val(localStorage.getItem('hour8'));
$('#hour9 .description').val(localStorage.getItem('hour9'));
$('#hour10 .description').val(localStorage.getItem('hour10'));
$('#hour11 .description').val(localStorage.getItem('hour11'));
$('#hour12 .description').val(localStorage.getItem('hour12'));
$('#hour13 .description').val(localStorage.getItem('hour13'));
$('#hour14 .description').val(localStorage.getItem('hour14'));
$('#hour15 .description').val(localStorage.getItem('hour15'));
$('#hour16 .description').val(localStorage.getItem('hour16'));
$('#hour17 .description').val(localStorage.getItem('hour17'));


checkTime();


})
//window.onload = function () {
    //checkTime();
//}

