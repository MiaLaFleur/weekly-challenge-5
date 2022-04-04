var events = [];

$(".saveBtn").on("click", function() {

    var time = $(this).siblings(".description").attr("id");
    var desc = $(this).siblings(".description").val();

    localStorage.setItem(time, desc);
});

var LoadEvents = function() {
    localStorage.getItem(time, desc);
}

LoadEvents();

var Events = function() {
    $(".description").each(function(index) {
        });
    };
