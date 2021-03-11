var currentDay = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
$('#currentDay').text(currentDay);

//to dos
//added moments.js to the header

var rightNow = moment();
console.log(rightNow);
var currentHour = $('.time-block');
console.log(currentHour);

var saveBtn = $('.saveBtn');
console.log(saveBtn);

var $textInput = $('input[name="hour"]');
console.log($textInput);

var hours = $('.hours')
//creating individual variables for each time 

var hour8 = $('#hour8');
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

function handleFormSubmit(event){
    event.preventDefault();

    var typedEl = $('input:text');
    var written = [];

    $.each(typedEl, function(){
        written.push($(this).val());
    });
}

saveBtn.on('submit', function(event) {
    event.preventDefault();

var textValue = {
    content: $textInput.val()
}; 

localStorage.setItem("textValue", JSON.stringify(textValue));
handleFormSubmit();
renderText();
});

function renderText() {
    var lastInputText = JSON.parse(localStorage.getItem("textValue"));
    if (lastInputText !== null) {
        $('input[class="description"]').text(lastInputText.textValue.content);

    }
}







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
