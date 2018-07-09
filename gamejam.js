var contest;
var rules;
var schedule;

window.onload = function() {
    var countDownDate = new Date("Aug 1, 2018 18:30:00").getTime();
  
    contest = document.getElementById("contestDiv");
    rules = document.getElementById("rulesDiv");
    schedule = document.getElementById("scheduleDiv");

    // Update the count down every 1 second
    var x = setInterval(function() {
      // Get todays date and time
      var now = new Date().getTime();
  
      // Find the distance between now an the count down date
      var distance = countDownDate - now;
  
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      // Display the result in the element with id="demo"
      document.getElementById("countdownDiv").innerHTML =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  
      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);
  };
  
  function displayContestDescription(){
    rules.style.display = "none";
    schedule.style.display = "none";
    contest.style.display = "block";
    
  }

  function displayScheduleOfEvents(){
    rules.style.display = "none";
    contest.style.display = "none";
    schedule.style.display = "block";
  }

  function displayOfficialRules(){
    schedule.style.display = "none";
    contest.style.display = "none";
    rules.style.display = "block";
  }