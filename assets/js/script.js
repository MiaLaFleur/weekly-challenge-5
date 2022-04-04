var events = [];

$(".saveBtn").on("click", function() {

    var time = $(this).siblings(".description").attr("id");
    var desc = $(this).siblings(".description").val();

    localStorage.setItem(time, desc);
});

var LoadEvents = function() {
    $("#9").val(localStorage.getItem("9"));
    $("#10").val(localStorage.getItem("10"));
    $("#11").val(localStorage.getItem("11"));
    $("#12").val(localStorage.getItem("12"));
    $("#1").val(localStorage.getItem("1"));
    $("#2").val(localStorage.getItem("2"));
    $("#3").val(localStorage.getItem("3"));
    $("#4").val(localStorage.getItem("4"));
    $("#5").val(localStorage.getItem("5"));
}

LoadEvents();

var checkEventTime = function() {
    var currentTime = moment().hours();
    console.log(currentTime);

    if () {

    };
}

checkEventTime();