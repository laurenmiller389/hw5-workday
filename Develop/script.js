// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  var saveBtnEl = $('.saveBtn');

  //we use time block as key for local storage so save button has to be clicked to start
  saveBtnEl.on('click', function (event) {
    console.log($(this).siblings("textarea")[0].value);
    localStorage.setItem(event.target.closest("div").id, $(this).siblings("textarea")[0].value);


  });
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  var timeBlockEl = $('.time-block');
  var currentTime = dayjs().hour();
  console.log(currentTime);
  timeBlockEl.each(function() {
    console.log($(this));

    //parse from string to get int
    var timeBlockHour = parseInt($(this).attr("id").split('-')[1]);

    //put user input into local storage
    var hourEl = document.getElementsByClassName('.time-block');
    localStorage.setItem(hourEl, $(this).siblings("textarea")[0]);
    localStorage.getItem(hourEl, $(this).siblings("textarea")[0]);

    if(timeBlockHour > currentTime) {
      console.log('future')
      $(this).addClass("future")
    } else if (timeBlockHour < currentTime) {
      console.log('past')
      $(this).addClass("past")
    } else {
      console.log('present')
      $(this).addClass("present")
    }
 
  })
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  function displayCurrentDate() {
    var currentDate = (dayjs().format('dddd MMMM DD, YYYY'));
    var dayID = $('#currentDay');
    dayID.text(currentDate);
  }
  displayCurrentDate();
});
