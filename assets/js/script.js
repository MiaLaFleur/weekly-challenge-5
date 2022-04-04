var events = [];

$(".saveBtn").on("click", function() {

    var time = $(this).siblings(".description").attr("id");
    var desc = $(this).siblings(".description").val();

    localStorage.setItem(time, desc);
});

var LoadEvents = function(time, desc) {
    var savedEvents = JSON.parse(localStorage.getItem("time"));
    console.log(savedEvents);

}

LoadEvents();

var Events = function() {
    $(".description").each(function(index) {
        });
    };
