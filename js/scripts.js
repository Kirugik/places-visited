//Business logic 
function PlaceVisited (name, location, timeOfYear, landmarks) {
    this.name = name;
    this.location = location;
    this.timeOfYear = timeOfYear;
    this.landmarks = landmarks;
}

PlaceVisited.prototype.placeDetails = function () {
    return this.name + " " + this.location + " " + this.timeOfYear + " " + this.landmarks;
}


//UI logic 
$(document).ready(function() {
    $("form#new-place").submit(function(event) {
        event.preventDefault();

        let inputtedName = $("input#new-place-visited").val();
        let inputtedLocation = $("input#new-place-location").val();
        let timeOftheYear = $("input#time-of-year").val();
        let majorLandmarks = $("input#landmarks").val();

        let newPlaceVisited = new PlaceVisited(inputtedName, inputtedLocation, timeOftheYear, majorLandmarks);

        $("ul#list").append ("<li><span class='place'>" + newPlaceVisited.placeDetails() + "</span></li>");

        $(".place").last().click(function() {
            $("#show-place-visited").show();
            $("#show-place-visited h2").text(newPlaceVisited.name);
            $(".place-name").text(newPlaceVisited.name);
            $(".place-location").text(newPlaceVisited.location);
            $(".time-of-year").text(newPlaceVisited.timeOfYear);
            $(".place-landmarks").text(newPlaceVisited.landmarks);
          });

        $("input#new-place-visited").val("");
        $("input#new-place-location").val(""); 
        $("input#time-of-year").val("");
        $("input#landmarks").val("");

    });
});