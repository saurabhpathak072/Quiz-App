const questionObj = 
    {
      category: 'Food & Drink',
      id: 'qa-1',
      correctAnswer: 'Three',
      options: ['Two', 'Three', 'Four', 'Five'],
      question:
        "How many pieces of bun are in a Mcdonald's Big Mac?",
    };

    const {question,options,correctAnswer } = questionObj
let score = 0;
    const questionEL = document.getElementById('question');
    const optionsEL = document.getElementById('options');
    const scoreEL = document.getElementById('score');

    options.forEach((opt)=>{
      const btn = document.createElement('button');
      btn.textContent  = opt;
      optionsEL.appendChild(btn);

      btn.addEventListener('click',()=>{
if(opt === correctAnswer){
  score = score + 1;
}else{
  score -= 0.25;
}
scoreEL.textContent = `Score: ${score}`;
questionEL.textContent = "Quiz completed";
optionsEL.innerHTML = null;
      })
    })

    questionEL.textContent = questionObj.question;