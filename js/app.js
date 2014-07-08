$(document).ready(function(){

  $('#main').on('click', '#add-button', function () {
        var grocery = $('#input').val();
        $('#list').append("<li class='item'><button class='delete'><p1></p1></button><div class='wrapper'><input type='text' value='" + grocery + "' class='entered'/><button class='purchased'><p2></p2></button></div></li>");
    });

    $('#list').on('focus', 'input[type="text"].entered', function () {
        $(this).addClass('focus');
    }).on('blur', 'input[type="text"].entered', function () {
        $(this).removeClass('focus');
    });

    $("#list").on('click', '.delete', function () {
        $(this).parent().fadeOut('slow', function () {
            $(this).remove();
        });
    });

    $("#list").on('click', '.purchased', function () {
        $(this).parent().toggleClass('done');
        $('input[type="text"].entered').toggleClass('blue');
    });

/*
$(".item").mouseenter(function () {
    $(this).children(".delete").show();
});

$(".item").mouseleave(function () {
    $(this).children(".delete").hide();
});

$(".wrapper").mouseenter(function(){
    $(this).children('.purchased').show();
});

$(".wrapper").mouseleave(function(){
    $(this).children('.purchased').hide();
}); */

//Background Randomizer
var $backgroundContainer = $("#bg"), // target container for bg image
    images = [
        ['img/bg1.jpg'],
        ['img/bg2.jpg'], 
        ['img/bg3.jpg'], 
        ['img/bg4.jpg'], 
    ],
    randomNum = Math.floor(Math.random() * images.length), // grab random number
    imageData = images[randomNum]; // grab random item from array

    var newImage = $('<img/>', {
        src: imageData[0]
    });

    $backgroundContainer.html(newImage); // apply the image

});
