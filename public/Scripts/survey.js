const ul1 = document.querySelector('.option1');
const ul2 = document.querySelector('.option2');
const ul3 = document.querySelector('.option3');
const opt = document.querySelector('.opt1');
const opt2 = document.querySelector('.opt2');

const q1 = document.querySelector('.question1');
const q2 = document.querySelector('.question2');
const q3 = document.querySelector('.question3');
const choice = document.querySelector('.choice');
const choice2 = document.querySelector('.choice2');
const ans = document.querySelector('.ans');

const survey = document.querySelector('.survey');
const submit = document.querySelector('.submit');
const end = document.querySelector('.end');

opt.addEventListener('click', function(){
    choice.style.display = 'none';
    q1.style.display = 'block';
    if ( choice)
    {
        choice2.style.display = 'none';
    }
}
);
// First question
ul1.addEventListener('click', function()  {
    q1.style.display ="none";
    q2.style.display = 'block';
   
}
);
//second question
ul2.addEventListener('click', function()  {
    q2.style.display = 'none';
    q3.style.display = 'block';
   
}
);

// third question
ul3.addEventListener('click', function() {
    q3.style.display = 'none';
    survey.style.display = 'none';
    end.style.display = 'block';
   
}
);


opt2.addEventListener('click', function(){
    choice2.style.display = 'none';
    ans.style.display = 'block';
    if ( choice2)
    {
        choice.style.display = 'none';
    }
    
}
);

//create date picker
const date = document.getElementById('start').value = new Date().toDateInputValue();



