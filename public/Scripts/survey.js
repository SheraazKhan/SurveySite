const ul1 = document.querySelector('.option1');
const ul2 = document.querySelector('.option2');
const ul3 = document.querySelector('.option3');

const q1 = document.querySelector('.question1');
const q2 = document.querySelector('.question2');
const q3 = document.querySelector('.question3');

const survey = document.querySelector('.survey');
const submit = document.querySelector('.submit');
const end = document.querySelector('.end');

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
