var timesteps = ['00hr', '24hr', '48hr', '72hr', '96hr', '120hr', '144hr'];
var image_order = ['5', '1', '3', '2', '7', '4']; //the images are named with a number, and this is the order I want them displayed on page

var $setupBoxes = function(){
    for(var i = 0; i < 7; i++){
        $('#timeboxes').append("<div class='timestep_box' id='" + timesteps[i] +"'>" + timesteps[i] + "</div>");
    }
    
    $('.timestep_box').mouseenter(function(){
        $(this).css('opacity',1);
        $changeTimestep($(this).attr('id'));
    });
    
    $('.timestep_box').mouseleave(function(){
        $(this).css('opacity',0.5);
    });
}


var $changeTimestep = function(timestep){
    var image_url = '';
    $('#guidance').empty(); //clear the previous images
    for(var i = 0; i < image_order.length; i++){
        image_url = "http://wxmaps.org/pix/aus" + image_order[i] + "." + timestep + ".png";
        $('#guidance').append("<a href='" + image_url + "' target='_blank'><img class='wx-tile' src='" + image_url + "'/></a>");
    }
}

$(document).ready(function(){
    $setupBoxes();
    $changeTimestep(timesteps[0]);
});