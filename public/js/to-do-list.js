var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://quotes15.p.rapidapi.com/quotes/random/?language_code=en",
  "method": "GET",
  "headers": {
    "x-rapidapi-host": "quotes15.p.rapidapi.com",
    "x-rapidapi-key": ""
  }
}

window.onload = function() {
    if(!window.location.hash) {
        window.location = window.location + '#loaded';
        window.location.reload();
    }
}

$(document).ready(function() {

  //Get date and time
  let today = new Date();

  let options = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  };

  let options2 = {
    hour12: false
  };
  day = today.toLocaleDateString("en-US", options);
  time = today.toLocaleTimeString("en-GB", options2);
  time = time.substring(0, 2);
  var hour = parseInt(time);
  if(hour >= 4 && hour <= 12){
    $("h1").text("Good Morning.");
  }
  else if(hour >=12 && hour <=18) {
    $("h1").text("Good Afternoon.");
  }
  else {
    $("h1").text("Good Evening.");
  }

  $("span.dateTime").text(day);

});

$(document).ready(function() {
  $("#flip").click(function() {
    if($("#panel").css("display") === 'block'){
      $.ajax(settings).done(function(response) {
        $("#quotes").text(response.content);
        $("#author").text("- " + response.originator.name);
      });
    }
  });
});

$(document).ready(function() {
  $("#flip").click(function() {
    $("#panel").slideToggle("slow");
  });
});
