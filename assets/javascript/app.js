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

//Display trivia questions and answer radio buttons
var trivia = [
		{
			question: "What is the name of the actress who plays Hermione Granger in the Harry Potter series of films?",
			answer: "Emma Watson",
			choices: ["Natalie Portman", "Emma Watson", "Emma Roberts"]
			},
		 {
			question: "Which is not one of the four houses at Hogwarts School of Witchcraft and Wizardry?",
			answer: "Thunderbird",
			choices: ["Gryffindor","Slytherin", "Thunderbird"]
	
			},
		 {
			question: "In what year was the first Harry Potter movie released?",
			answer: "2001",
			choices: ["2001", "1997", "1999"]
			},
		 {
			question: "What is the name of Harry Potter's Owl?",
			answer: "Hedwig",
			choices: ["Errol", "Crookshanks", "Hedwig"]
			},
		 {
			question: "Which of these objects is not a component of the Deathly Hallows?",
			answer: "Sorcerer's Stone",
			choices: ["Elder Wand", "Sorcerer's Stone", "Resurrection Stone"]
			}
	
];

var correctAnswers = 0;

function displayQuestion() {
	var questions = trivia.question;
	var questionClass = $(document).find(".container > #question");
	var choiceList = $(document).find(".container > .choiceList");
	var numChoices = trivia.choices.length;

	$(questionClass).text(question);

	var choice;
	for (i = 0; i < numChoices; i++) {
		choice = trivia.choices[i];
		$('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
	}

}

//Save input from radio buttons

//When timer ends, hide form
setTimeout(timeClock.stop, 1000 * 60);
//Compare answers with input

//Show results

//When "finish" button is clicked compare answers and show results