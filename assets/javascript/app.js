//Hide trivia form
$(function() {
	$('form').hide();
	var $button = $('button');
	//Start button click event
	$button.on('click', function(){
		//Show trivia form
		$('form').show();
		//Hide start button
		$button.hide();
	});

	$button.click(stopwatch.start);
});


//Start timer
//function timer()	{
//	clearTimeout(timeout);

//	var timeout = setTimeout(function(){
//		$('form').hide();
//	}, 1000 * 60);
//};

var intervalId;

//prevents the clock from being sped up unnecessarily
var clockRunning = false;

//  Our stopwatch object.
var stopwatch = {

  time: 60,

  start: function() {

      if (!clockRunning) {
        intervalId = setInterval(stopwatch.count, 1000);
       clockRunning = true;
      }

  },
  stop: function() {
  	
  		clearInterval(intervalId);
    	clockRunning = false;	
  },

  count: function() {

        stopwatch.time--;

        var converted = stopwatch.timeConverter(stopwatch.time);

        $("#time-clock").html(converted);
  },

  timeConverter: function(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }

    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }

};

//Display timer


//Display trivia questions and answer radio buttons


//Save input from radio buttons

//When timer ends, hide form

//Compare answers with input

//Show results

//When "finish" button is clicked compare answers and show results