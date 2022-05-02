let timeDisplayEl = $("#time-display");

function displayTime() {
  let rightNow = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
  timeDisplayEl.text(rightNow);
}
setInterval(displayTime, 1000);

$(document).ready(function () {
  function hourUpdate() {
    let currentHour = moment().hour();
    $(".time-block").each(function () {
      let divTime = parseInt($(this).attr("id").split("-")[1]);
      if (currentHour > divTime) {
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
      }
      if (currentHour === divTime) {
        $(this).addClass("present");
        $(this).removeClass("past");
        $(this).removeClass("future");
      }
      if (currentHour < divTime) {
        $(this).addClass("future");
        $(this).removeClass("present");
        $(this).removeClass("past");
      }
    });
  }
  $(".saveBtn").on("click", function (event) {
    event.preventDefault();
    let time = $(this).parent().attr("id");
    let text = $(this).siblings(".description").val();
    //    console.log(time, text)
    localStorage.setItem(time, text);
  });

  $("#hour-7 .description").val(localStorage.getItem("hour-7"));
  $("#hour-8 .description").val(localStorage.getItem("hour-8"));
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));

  hourUpdate();
});
