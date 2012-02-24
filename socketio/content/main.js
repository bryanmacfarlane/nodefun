var socket;
var username;

$(function () {
    configureAuth();
    configureIO();
    populateBoard();
});


function configureIO() {

    // Create the socket connection to the server
    socket = io.connect('http://hakane:8099');

    // Handler for "welcome" messages
    socket.on("welcome", function (message) {
        //log("Welcome: " + message.text);
    });

    // Handler for "move" messages
    socket.on("move", function (message) {

        // Ignore messages originating from self
        if (message.username === username) {
            return;
        }

        // Replay the "move"
        move(message);
    });
}


function drop(ui) {

    // Get the item being dropped
    var $item = $(ui.item);

    // Construct the message
    var message = {
        username: username,
        itemID: $item.attr("id"),
        targetID: $item.parent().attr("id"),
        text: username + " moved " + $item.text() + " to " + $item.parent().attr("id")
    };

    // Send the message through the socket connection
    socket.emit("move", message);
}



function move(message)
{
    $("#" + message.itemID).animate({
        left: $("#" + message.targetID).position().left
    }, 1000, function () {
        $("#" + message.itemID).appendTo("#" + message.targetID).css({ left: 0 });
        showTooltip(message);
    });
    
}

function configureAuth() {
    username = document.location.search.replace("?", "");

    $("#header").append($("<img>").css({ "margin-right": 16 }).attr({ width: 32, height: 32 }).attr("src", username + ".jpg"));
    $("#header").append($("<span>").text("Welcome, " + username));
}

function populateBoard() {
    var $content, $tile;

    $todo = $("#todo");
    for (var i = 1; i < 4; i++) {
        $tile = $("<li>").attr("id", i).addClass("tile").text("Item " + i);
        $todo.append($tile);
    }

    $("#todo, #inprogress, #done").sortable({
        connectWith: ".col",
        stop: function (event, ui) {
            drop(ui);
        }
    }).disableSelection();

}


function showTooltip(message)
{
    var $notification = $("#notification");
    var $target = $("#" + message.targetID);
    var $item = $("#" + message.itemID);

    $notification.find(".picture > img").attr("src", message.username + ".jpg");
    $notification.find(".name").text(message.username);
    $notification.find(".message").html("Moved Item " + message.itemID + " to " + message.targetID);
    $notification.css({ left: $item.position().left - 10, top: $item.position().top - 70 });
    $notification.fadeIn(1000);

    setTimeout(function () {
        $notification.fadeOut(1000);
    }, 3000);
}

function log(message) {
    $("#log").append(message + "<br>");
}



