(function() 
 {
  var allQuestions = [{
    question: "Argentina, ________ is well-known for its mountains, is a very popular with ski-tourists.",
    options: ["What", "That", "Which", "Whom"],
    answer: 2
  }, {
    question: "The boys hurt ________ playing football in the park.",
    options: ["themself", "theirselves", "themselves", "ourselves"],
    answer: 2
  }, {
    question: "Can you tell me when ________ leaving?",
    options: ["does the plane", " is the plane", "the plane is","did the plane"],
    answer: 2
  },{
    question: "Having ________ about your suggestion for a few days, I've decided to support the project.",
    options: ["thinking", "think", "thought", "thank"],
    answer: 2
  }, {
    question: "I can't find my keys ________.",
    options: ["everywhere", "anywhere", "anything", "anyone"],
    answer: 1
  },{
    question: "Did you remember _________ the parcels?",
    options: ["post", "to post", "posting", "posted"],
    answer: 1
  },{
    question: "The house will ________ at the end of the year.",
    options: ["be sell", "sold", "be sold", "selling"],
    answer: 2
  },{
    question: "He ________ gone to work yesterday. John was there all day and nobody saw him.",
    options: ["wasn't have", "mustn't have", "can't have", "None of the these"],
    answer: 2
  },{
    question: "This fish is _________ delicious.",
    options: ["really ", "very", "completely", "good"],
    answer: 0
  },{
    question: "He wouldn't be so successful now if he __________ so hard when he was at school.",
    options: ["wouldn't have studied", "hadn't studied", "didn't study", "don't"],
    answer: 1
    }];
  
  var quesCounter = 0;
  var selectOptions = [];
  var quizSpace = $('#quiz');
    
  nextQuestion();
    
  $('#next').click(function () 
    {
        chooseOption();
        if (isNaN(selectOptions[quesCounter])) 
        {
            alert('Please select an option !');
        } 
        else 
        {
          quesCounter++;
          nextQuestion();
        }
    });
  
  $('#prev').click(function () 
    {
        chooseOption();
        quesCounter--;
        nextQuestion();
    });
  
  function createElement(index) 
    {
        var element = $('<div>',{id: 'question'});
        var header = $('<h2>Question No. ' + (index + 1) + ' :</h2>');
        element.append(header);

        var question = $('<p>').append(allQuestions[index].question);
        element.append(question);

        var radio = radioButtons(index);
        element.append(radio);

        return element;
    }
  
  function radioButtons(index) 
    {
        var radioItems = $('<ul>');
        var item;
        var input = '';
        for (var i = 0; i < allQuestions[index].options.length; i++) {
          item = $('<li>');
          input = '<input type="radio" name="answer" value=' + i + ' />';
          input += allQuestions[index].options[i];
          item.append(input);
          radioItems.append(item);
        }
        return radioItems;
  }
  
  function chooseOption() 
    {
        selectOptions[quesCounter] = +$('input[name="answer"]:checked').val();
    }
   
  function nextQuestion() 
    {
        quizSpace.fadeOut(function() 
            {
              $('#question').remove();
              if(quesCounter < allQuestions.length)
                {
                    var nextQuestion = createElement(quesCounter);
                    quizSpace.append(nextQuestion).fadeIn();
                    if (!(isNaN(selectOptions[quesCounter]))) 
                    {
                      $('input[value='+selectOptions[quesCounter]+']').prop('checked', true);
                    }
                    if(quesCounter === 1)
                    {
                      $('#prev').show();
                    } 
                    else if(quesCounter === 0)
                    {
                      $('#prev').hide();
                      $('#next').show();
                    }
                }
              else 
                {
                    var scoreRslt = displayResult();
                    quizSpace.append(scoreRslt).fadeIn();
                    $('#next').hide();
                    $('#prev').hide();
                }
        });
    }
  
  function displayResult() 
    {
        var score = $('<p>',{id: 'question'});
        var correct = 0;
        for (var i = 0; i < selectOptions.length; i++) 
        {
          if (selectOptions[i] === allQuestions[i].answer) 
          {
            correct++;
          }
        }
        score.append('You scored ' + correct + ' out of ' +allQuestions.length);
        return score;
  }
})();