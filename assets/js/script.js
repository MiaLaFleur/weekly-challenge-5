var events = [];

$(".saveBtn").on("click", function() {
    var text = $('textarea').val();

    localStorage.setItem("event description", text);
});

var Events = function() {
    $(".description").each(function(index) {
        });
    };
