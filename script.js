//my counter
let counter = 1;


//this is the questions asked and choices associated with them
let Questions = [
    {
        
        prompt: 
        'Here at Flower Sour Coffee Inc. we aim to satisfy and guarantee satisfaction. With every flower we add a bit of flower-power-delivery magic! Something to keep in mind: ',
        choices: [ 
            {label:'Our Message', answer: true},
            {label:'About us', answer:false},
            {label:'Our Products', answer: false} 
        ]},
    {   prompt: 'We have been in the business for over two decades, and we continue to climb! The best part of working with flowers, is working with flowers! We started as a small corner shop on Broadway, and bought our first flower shop in 2001. Since then we have opened 4 shops in Washington state, and we only plan to go up!',
        choices: [ 
            {label:'Our Message', answer: true},
            {label:'About us', answer:false},
            {label:'Our Products', answer: false}  ]
    },
    {   prompt: 'This page would display products, product info, purchase info, location, or practices involved.',
        choices: [ 
            {label:'Our Message', answer: true},
            {label:'About us', answer:false},
            {label:'Our Products', answer: false} ]
    },
]
//function that will load the questions by prompt, and answers to the buttons by choice1, 2, 3
function loadQuestion(numQ) {
    let prompt = document.querySelector('.textDisplayed'); 
    prompt.innerText = Questions[numQ].prompt;
   //make var button1,2 and 3, represent id'button1' inner text as question numQ,
   // choices fills buttons with text, everything in each label
    let button1 = document.getElementById('button1');
    button1.innerText = Questions[numQ].choices[0].label;
    let button2 = document.getElementById('button2');
    button2.innerText = Questions[numQ].choices[1].label;
    let button3 = document.getElementById('button3');
    button3.innerText = Questions[numQ].choices[2].label;
}

//when you click on a button, this is what happens:

button1.onclick = function() {
    loadQuestion(0);
    
}
button2.onclick = function() { 
  loadQuestion(1);
  
    
}
 button3.onclick = function() {
    loadQuestion(2);
    
    
}

//loads the first question
loadQuestion(0);
