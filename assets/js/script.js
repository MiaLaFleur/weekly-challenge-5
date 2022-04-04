var timeArr = ["9", "10", "11", "12", "13", "14", "15", "16","17"];

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
    $("#13").val(localStorage.getItem("13"));
    $("#14").val(localStorage.getItem("14"));
    $("#15").val(localStorage.getItem("15"));
    $("#16").val(localStorage.getItem("16"));
    $("#17").val(localStorage.getItem("17"));
}

LoadEvents();

var checkEventTime = function() {
    var currentHour = moment().format("H");
    
    for (var i = 0; i < timeArr.length; i++) {
        var blockEl = $("#" + timeArr[i]);

        if (currentHour < parseInt(timeArr[i])) {
            blockEl.addClass("future");
        }
        else if (currentHour > parseInt(timeArr[i])) {
            blockEl.addClass("past");
        }
        else if (currentHour === parseInt(timeArr[i])) {
            blockEl.addClass("present");
        }
            
    };
    console.log(currentHour);
};

checkEventTime();