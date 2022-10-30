$(document).ready(function() {
    $(".box").on("click", function() {
        var classNames = $(this).attr("class").split(" ");
        var boxClass = classNames[0];
        varclassName = classNames[1];
        if($(this).css("background-color") == "rgb(255, 0, 0)") {
            $("." + className).css("background-color", "black");
        } else {
            $("." + boxClass).css("background-color", "#000");
            $("." + className).css("background-color", "red");
        }
    })
});