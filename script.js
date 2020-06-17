///////////////////////////////// data ///////////////////////////////////////// 

const data1 = [
  {
    number: 1,
    question: "Which of the following could be unveiled?",
    a: 'a statue',
    b: "a painting",
    c: 'a cloud',
    d: 'a plan'
  },
  {
    number: 2,
    question: "Which of the following can be declared?",
    a: 'a winner',
    b: "one’s friends",
    c: "one’s love",
    d: 'a holiday'
  },
  {
    number: 3,
    question: 'Which of the following can be contributed?',
    a: 'money',
    b: "time",
    c: 'clothing',
    d: 'space'
  },
  {
    number: 4,
    question: "Which of the following could be ferried?",
    a: "hopes",
    b: "fears",
    c: "people",
    d: "cars"
  },
  {
    number: 5,
    question: "For which of the following might someone be subjected to persecution?",
    a: "driving too fast",
    b: "having political views",
    c: "breaking into someone’s home",
    d: "practicing a religion"
  },
  {
    number: 6,
    question: "Which of the following would be conspicuous?",
    a: "lighthouse on a cliff",
    b: "a pebble on the beach",
    c: "a billboard by the roadside",
    d: "a purple house"
  },  
  {
    number: 7,
    question: "Which of the following could be exhibited?",
    a: "pottery",
    b: "uncertainty",
    c: "days",
    d: "coins"    
  }
];

const data2 = [
  {
    number: 8,
    question: "",
    a: "Dinner is at six, so please get <span class='bg-info text-light'>effective</span> for it.",
    b: "The new coach plans to <span class='bg-info text-light'>effect</span> some changes on the team.  	",
    c: "The rule was <span class='bg-info text-light'>effective</span> immediately.",
    d: "The tea I drank for the flu had the desired <span class='bg-info text-light'>effect</span>."
  },
  {
    number: 9,
    question: "",
    a: "For a <span class='bg-info text-light'>brief</span> moment, I thought I was dreaming.",
    b: "The mayor was <span class='bg-info text-light'>briefed</span> on the earthquake that night.  ",
    c: "The lawyer took her <span class='bg-info text-light'>brief</span> to the courthouse.  	",
    d: "We <span class='bg-info text-light'>briefed</span> a sigh of relief when we made it through the snow.  	"
  },
  {
    number: 10,
    question: "",
    a: "When my little brother starts to get <span class='bg-info text-light'>erroneous</span>, I tell him to be quiet.",
    b: "It is <span class='bg-info text-light'>erroneous</span> to say that a kitten is a baby dog.  	",
    c: "There is an <span class='bg-info text-light'>error</span> in the book.  	",
    d: "I <span class='bg-info text-light'>erred</span> to the top of the hill.  "
  },
  {
    number: 11,
    question: "",
    a: "The <span class='bg-info text-light'>competition</span> for the spelling bee is intense.  ",
    b: "Over two hundred nations <span class='bg-info text-light'>compete</span> in the Olympic Games.  ",
    c: "She was a <span class='bg-info text-light'>competitor</span> who hated to lose. ",
    d: "I <span class='bg-info text-light'>competed</span> that we had only one slice of bread left. "
  },
  {
    number: 12,
    question: "",
    a: "Four teams <span class='bg-info text-light'>anticipated</span> in the finals. ",
    b: "We <span class='bg-info text-light'>anticipated</span> a few problems, but nothing serious happened.  ",
    c: "They <span class='bg-info text-light'>anticipated</span> that a lot of people would be at the carnival.",
    d: "I <span class='bg-info text-light'>anticipated</span> the cat down from the tree."
  },
  {
    number: 13,
    question: "",
    a: "Jana started her day with a <span class='bg-info text-light'>brisk</span> cold shower.  	",
    b: "His <span class='bg-info text-light'>brisk</span> personality did not make him very popular.  	",
    c: "Why <span class='bg-info text-light'>brisk</span> the floor if it’s already clean? ",
    d: "You need plenty of <span class='bg-info text-light'>brisk</span> to win the game.  	"
  },
  {
    number: 14,
    question: "",
    a: "The instructions were very <span class='bg-info text-light'>complicated</span>, so I wrote them down.  	",
    b: "Cheyenne <span class='bg-info text-light'>complicates</span> things more than they need to be.  ",
    c: "The teacher <span class='bg-info text-light'>complicated</span> that the students did a great job on the homework.  	",
    d: "Josiah was <span class='bg-info text-light'>complicated</span> for having the highest grade on the test.  	"
  },
  {
    number: 15,
    question: " 	",
    a: "The weather will be a <span class='bg-info text-light'>factor</span> in whether we play. ",
    b: "Several <span class='bg-info text-light'>factors</span> led to the Great Depression.  	",
    c: "The <span class='bg-info text-light'>factors</span> make the parts for the cars.  	",
    d: "You can’t <span class='bg-info text-light'>factor</span> if you want me to like you.  "
  },
  {
    number: 16,
    question: "",
    a: "My mom said my <span class='bg-info text-light'>leisure</span> was crooked.  	",
    b: "My <span class='bg-info text-light'>leisure</span> time is spent reading.  	",
    c: "We took a <span class='bg-info text-light'>leisurely</span> walk through the park.  	",
    d: "Crack open the <span class='bg-info text-light'>leisure</span> so we can see what’s inside.  	"
  },
  {
    number: 17,
    question: "",
    a: "Tiana <span class='bg-info text-light'>griped</span> because she was in a bad mood.  	",
    b: "My <span class='bg-info text-light'>gripe</span> is that we have too much schoolwork to do.  	",
    c: "The <span class='bg-info text-light'>gripes</span> are picked in October before it gets too cold.  ",
    d: "The teacher listened to our <span class='bg-info text-light'>gripes</span> and promised to make some changes.  	"
  }
];  

const data3 = [
  {
    number: 18,
    question: "Which word or words go with money?",
    a: 'bankrupt',
    b: "motion",
    c: 'budget',
    d: 'fad'
  },
  {
    number: 19,
    question: "Which word or words go with short?",
    a: 'brisk',
    b: "brief",
    c: 'minute',
    d: 'elusive'
  },
  {
    number: 20,
    question: "Which word or words go with mistake?",
    a: 'rouse',
    b: "compete",
    c: 'err',
    d: 'bungle'
  },
  {
    number: 21,
    question: "Which word or words go with look forward to?",
    a: 'effect',
    b: "ancestor",
    c: 'anticipate',
    d: 'eventual'
  },
  {
    number: 22,
    question: "Which word or words go with successful?",
    a: 'brief',
    b: "complicated",
    c: 'effective',
    d: 'erroneous'
  },
  {
    number: 23,
    question: "Which word or words go with complain?",
    a: 'restrict',
    b: "gripe",
    c: 'fad',
    d: 'knack'
  },  
  {
    number: 24,
    question: "Which word or words go with talent?",
    a: 'ability',
    b: "budget",
    c: 'knack',
    d: 'factor'
  },
  {
    number: 25,
    question: "Which word or words go with sports?",
    a: 'linger',
    b: "compete",
    c: 'challenge',
    d: 'complicate'
  },
  {
    number: 26,
    question: "Which word or words go with the only one?",
    a: 'erroneous',
    b: "solitary",
    c: 'effective',
    d: 'unique'
  },
  {
    number: 27,
    question: "Which word or words go with fashion?",
    a: 'apparel',
    b: "fad",
    c: 'attire',
    d: 'factor'
  }
]  

const data4 = [  
  {
    number: 28,
    question: "His uniqueness",
    a: 'makes him special.',
    b: "comes from his sense of humor.",
    c: 'always hurts when he bends his arm.',
    d: 'looks like he spent a lot of time on it.'
  },
  {
    number: 29,
    question: "A leisurely",
    a: 'piece of paper is very light.',
    b: "girl tried to finish her book as fast as she could.",
    c: 'meal can take an hour or more.',
    d: 'afternoon may be spent resting.'
  },
  {
    number: 30,
    question: "Factors",
    a: 'that might make you late are bad weather and traffic.',
    b: "get bigger the more you try to stop them.",
    c: 'are formed at the end of rainbows.',
    d: 'such as who can come to your birthday party are important for planning.'
  },
  {
    number: 31,
    question: "Fads",
    a: 'in space are made of dust and gas.',
    b: "are things that are briefly popular.",
    c: 'burrowed into the dirt to escape the predator.',
    d: 'that summer involved rolling up your pants.'
  },
  {
    number: 32,
    question: "A complicated",
    a: 'design involving different shapes was chosen for the wall.',
    b: "plot makes it hard to follow what’s happening in the movie.",
    c: 'glass of water sat on the table.',
    d: 'person is very simple and easy to understand.'
  },
  {
    number: 33,
    question: "The budgets",
    a: 'were let out of the cage to fly around the room.',
    b: "left me with ten extra dollars each week.",
    c: 'were set in August for the new school year.',
    d: 'had a crack in it that was easy to repair.'
  },
  {
    number: 34,
    question: "Bankruptcy",
    a: 'left Mr. Simon unable to pay anyone back.',
    b: "frustrated the owner’s dreams of expanding her store.",
    c: 'creates flowers that attract bees.',
    d: 'in bones can make them break more easily.'
  },
  {
    number: 35,
    question: "I briskly",
    a: 'ran a mile in gym class.',
    b: "poured the syrup slowly onto the waffle.",
    c: 'tiptoed up the stairs so I wouldn’t wake anyone.',
    d: 'chased my sister up and down the street during a game of tag.'
  }
];

const correctAnswers = [
  // 1 - 7 
  'ACD', 'ACD', 'ABCD', 'CD', 'BD', 'ACD', 'ACD',
  // 8 - 17 
  'CD','AB','BC','ABC','BC','AB','AB', 'AB', 'BC', 'ABD',
  // 18 - 27
  'AC','B','CD','C','C', 'B', 'AC', 'BC', 'BD', 'ABC',
  // 28 - 35
  'AB','CD','AD','B','AB', 'BC', 'AB', 'AD'
];
const n = correctAnswers.length;

///////////////////////////////// data //////////////////////////////////////// 

const quizForm = document.querySelector('.quiz-form');

const dataRender = (arr) => {
  arr.forEach(e => 
    quizForm.innerHTML += 
    `     
      <div class="my-5 justify-content-center">
      <p class="lead font-weight-normal"> ${e.number + '. ' + e.question}</p>
      <div class="form-check my-2">
        <label class="form-check-label">
          <input type="checkbox" class="form-check-input" name=${'q' + e.number} value="A"> ${'A. ' + e.a} 
        </label>
      </div>
      <div class="form-check my-2 ">
        <label class="form-check-label">
          <input type="checkbox" class="form-check-input" name=${'q' + e.number} value="B">${'B. ' + e.b}
        </label>
      </div>
      <div class="form-check my-2">
        <label class="form-check-label">
          <input type="checkbox" class="form-check-input" name=${'q' + e.number} value="C">${'C. ' + e.c}
        </label>
      </div>
      <div class="form-check my-2">
        <label class="form-check-label">
          <input type="checkbox" class="form-check-input" name=${'q' + e.number} value="D">${'D. ' + e.d}
      </div>
      </div>
      <hr>
      `
  );
}

const dataRenderInline = (arr) => {
  arr.forEach(e => 
    quizForm.innerHTML += 
    `     
      <div class="my-5 justify-content-center">
      <p class="lead font-weight-normal"> ${e.number + '. ' + e.question}</p>
      <div class="form-check form-check-inline my-2">
        <label class="form-check-label">
          <input type="checkbox" class="form-check-input" name=${'q' + e.number} value="A"> ${'A. ' + e.a} 
        </label>
      </div>
      <div class="form-check form-check-inline my-2">
        <label class="form-check-label">
          <input type="checkbox" class="form-check-input" name=${'q' + e.number} value="B">${'B. ' + e.b}
        </label>
      </div>
      <div class="form-check form-check-inline my-2">
        <label class="form-check-label">
          <input type="checkbox" class="form-check-input" name=${'q' + e.number} value="C">${'C. ' + e.c}
        </label>
      </div>
      <div class="form-check form-check-inline my-2">
        <label class="form-check-label">
          <input type="checkbox" class="form-check-input" name=${'q' + e.number} value="D">${'D. ' + e.d}
      </div>
      </div>
      <hr>
      `
  );
}


dataRender(data1)
quizForm.innerHTML += `      
<h3 class="my-3 text-dark text-center">Read the following sentences. If the highlighted <span class='text-light bg-info'>word</span> is used correctly, check the box. If the highlighted <span class='text-light bg-info'>word</span> is used incorrectly, leave the check box empty.</h3>
<hr/>
`;
dataRender(data2)
quizForm.innerHTML += `      
<h3 class="my-3 text-dark text-center">Multiple Choice Questions</h3>
<h3 class="my-3 text-dark text-center">There may be <span class="bg-warning text-light">more than one</span>  correct answer.</h3>
<hr/>
`;
dataRenderInline(data3);
// quizForm.innerHTML += `      
// <h3 class="my-3 text-dark text-center">Multiple Choice Questions</h3>
// <h3 class="my-3 text-dark text-center">There may be <span class="bg-warning text-light">more than one</span>  correct answer.</h3>
// <hr/>
// `;
dataRender(data4)
// add button 
quizForm.innerHTML += 
`
<div class="text-center mt-5"> 
  <input type="submit" class="btn btn-lg btn-success">
</div>
`;

const result = document.querySelector('.result');

document.querySelector('.btn').addEventListener('click', (e)=> {

  e.preventDefault();

  let score = 0;
  const form = document.querySelector('.quiz-form');


  const userAnswers = [ ];  
  var missingAnswers = [ ];
  for (let j=1; j<=n; j++) {
    var txt = '';
    eval(`form.q${j}[0].checked`) && (txt += eval(`form.q${j}[0].value`));
    eval(`form.q${j}[1].checked`) && (txt += eval(`form.q${j}[1].value`));
    eval(`form.q${j}[2].checked`) && (txt += eval(`form.q${j}[2].value`));
    eval(`form.q${j}[3].checked`) && (txt += eval(`form.q${j}[3].value`));
    userAnswers.push(txt)
    txt === '' && missingAnswers.push(j);
    } 

    if( missingAnswers.length !== 0) {
      alert(`Please Answer Question No. ${[...missingAnswers]} !`)
    } else {
    for (let i=0; i<n; i++) {
      correctAnswers[i] === userAnswers[i] && score++;
    }

    // if(userAnswers.filter(x=>x!=='').length !== n) {
    //   alert('Please answer all questions !')
    // } else {
    // for (let i=0; i<n; i++) {
    //   correctAnswers[i] === userAnswers[i] && score++;
    // }

    //Animation 
    scrollTo(0,0);
    result.classList.remove('d-none');
    const scoreShow = Math.floor(score/n * 100);
    let output = 0;
    const timer = setInterval (()=> {
      result.querySelector('span').textContent = output;
      output === scoreShow ? clearInterval(timer) : output++;
    }, 30);

    document.querySelector('.quiz').classList.add('d-none');
    document.querySelector('.wechat').classList.remove('d-none');
  }
})