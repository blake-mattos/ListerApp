

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