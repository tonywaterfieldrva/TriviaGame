$(document).ready(function(){
       $("#start-button").click(function(){
            var number = 30;
            var rightGuesses = 0;
            var wrongGuesses = 0;

            $("#start-button").on("click", start);  
            $("#submit").on("click", stop);  
            $("#restart").on("click", start);  
        
            function start(){
                      number = 30;
                      counter = setInterval(timer, 1000);
                      showMe(".question");
                      showMe(".answers");
                      showMe("#submit");
                      hideMe("#start-button");
                      hideMe(".directions");
                      hideMe("#restart");
                      hideMe("#results");
                      rightGuesses = 0;
                      wrongGuesses = 0;
            }

            function timer(){
                    number-- ;
                    $("#show-number").html("<h2>" + "Seconds Remaining :" + number + "</h2>" );
                    if (number === 0){
                      stop();
                    
                    }
            }
            
            function stop(){
                  clearInterval(counter); 
                  $("#results").show();
                  $("#restart").show();
                  $(".question").hide();
                  $(".answers").hide();
                  $("#submit").hide();
                  answerCheck();
            }

            function answerCheck() {
              var q1val = $("input[name='q1']:checked").val();
                if (q1val === "b") {
                  rightGuesses++;
                }
                else { 
                  wrongGuesses++;
                }  
                
                var q2val = $("input[name='q2']:checked").val();
                if (q2val === "b") {
                  rightGuesses++;
                }
                else { 
                  wrongGuesses++;
                }  
                var q3val = $("input[name='q3']:checked").val();
                if (q3val === "b") {
                  rightGuesses++;
                }
                else { 
                  wrongGuesses++;
                }  
                var q4val = $("input[name='q4']:checked").val();
                if (q4val === "b") {
                  rightGuesses++;
                }
                else { 
                  wrongGuesses++;
                }  
                var q5val = $("input[name='q5']:checked").val();
                if (q5val === "b") {
                  rightGuesses++;
                }
                else { 
                  wrongGuesses++;
                }  
                $('input[name="q1"]').attr('checked', false);
                $('input[name="q2"]').attr('checked', false);
                $('input[name="q3"]').attr('checked', false);
                $('input[name="q4"]').attr('checked', false);
                $('input[name="q5"]').attr('checked', false);

                console.log("Right: " , rightGuesses);
                console.log("Wrong: " , wrongGuesses);
                $("#results").html("<h2>" + "Results: " + rightGuesses + " Right / " + wrongGuesses + " Wrong " + "</h2>" );
      
              }



            function hideMe(element) {
    	          $(element).hide();
            }
    
            function showMe(element) {
              	$(element).show();
            }

  	start();
  });
});




