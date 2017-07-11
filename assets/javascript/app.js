

$(document).ready(function(){
//Hide trivia form
	$(function() {
		$('form').hide();
		$(".trivia-over").hide();
		var $button = $('button');
		//Start button click event
		$button.on('click', function(){
			//Show trivia form
			$('form').show();
			displayQuestion();
			//Hide start button
			$button.hide();
		});

		$button.click(timeClock.start);
	});


	//Start and display timer
	var intervalId;

	var clockRunning = false;


	var timeClock = {

	  time: 60,

	  start: function() {

	      if (!clockRunning) {
	        intervalId = setInterval(timeClock.count, 1000);
	       clockRunning = true;
	      }

	  },
	  stop: function() {
	  		
	  		clearInterval(intervalId);
	    	clockRunning = false;	
	    	$('form').hide();
	    	console.log("time up");
	  },

	  count: function() {

	        timeClock.time--;

	        var converted = timeClock.timeConverter(timeClock.time);

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

	//Display trivia questions and answer radio button

var trivia = [
		{
			question: "What is the name of the actress who plays Hermione Granger in the Harry Potter series of films?",
			answer: 2,
			choices: ["Natalie Portman", "Emma Watson", "Emma Roberts"]
			},
		 {
			question: "Which is not one of the four houses at Hogwarts School of Witchcraft and Wizardry?",
			answer: 3,
			choices: ["Gryffindor","Slytherin", "Thunderbird"]
	
			},
		 {
			question: "In what year was the first Harry Potter movie released?",
			answer: 1,
			choices: ["2001", "1997", "1999"]
			},
		 {
			question: "What is the name of Harry Potter's Owl?",
			answer: 3,
			choices: ["Errol", "Crookshanks", "Hedwig"]
			},
		 {
			question: "Which of these objects is not a component of the Deathly Hallows?",
			answer: 2,
			choices: ["Elder Wand", "Sorcerer's Stone", "Resurrection Stone"]
			}
	
];

	var correctAnswers = 0;


	var displayQuestion = function() {
		var questions = trivia.question;
		var questionClass = $(document).find(".container > .trivia-body > question");
		var choiceList = $(document).find(".container > .triva-body > .choiceList");
		var numChoices = trivia.choices.length;

		$(questionClass).text(question);

		var choice;
		for (i = 0; i < numChoices; i++) {
			choice = trivia.choices[i];
			$('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
		}

	}

	//Save input from radio buttons
	var finalAnswer = function() {
		value = $("input[type='radio']:checked").val();

		if(value == undefined) {
			$("#error-message").text("Please select an answer to all questions to continue.");
		} else {
			//Compare answers with input
			if(value == trivia.answer) {
				correctAnswers++;
			}
		}
	}
	//When timer ends, hide form
	setTimeout(timeClock.stop, 1000 * 60);

	//Show results
	var score = function() {
		$(".trivia-over").text("You got " + correctAnswers + " answers correct! " + (correctAnswers * 5) + " points for Gryffindor!");
		$(".trivia-over").show();
	}

	//When "finish" button is clicked compare answers and show results
		$("#finish-button").on('click', function() {
			$('form').hide();
			score();
		});
	
});
