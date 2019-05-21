function tabulateAnswers() {
  
  var ascore = 0;
  var bscore = 0;
  var cscore = 0;
  var dscore = 0;
  
  var choices = document.getElementsByTagName('input');
  
  for (i=0; i<choices.length; i++) {
    
    if (choices[i].checked) {     
      if (choices[i].value == 'a') {
        ascore = ascore + 1;
      }
      if (choices[i].value == 'b') {
        bscore = bscore + 1;
      }
      if (choices[i].value == 'c') {
        cscore = cscore + 1;
      }
      if (choices[i].value == 'd') {
        dscore = dscore + 1;
      }
    }
  }
  
  /*The choice that has been clicked maximum number of times determines the answer*/
  
  var maxscore = Math.max(ascore,bscore,cscore,dscore);
  
  var answerbox = document.getElementById('answer');
  
  if (ascore == maxscore) {
    answerbox.innerHTML = "Yellow Orchid";
  }
  if (bscore == maxscore) {
    answerbox.innerHTML = "Blue Orchid";
  }
  if (cscore == maxscore) {
    answerbox.innerHTML = "White Orchid";
  }
  if (dscore == maxscore) {
    answerbox.innerHTML = "Pink Orchid";
  }
  
  /*So that the answer stays on the screen after clicking it*/
  	event.preventDefault();

}
  
  /*Reset button*/
  function resetAnswers() {
  var answerbox = document.getElementById('answer');
  answerbox.innerHTML = "Your Orchid Type";
  
}
