const data = [
  {
    number: 1,
    question: "Which is an example of someone with resilience? ",
    a: 'someone who gets good grades in school ',
    b: 'someone who is a very talented artist and writer ',
    c: 'someone who gets well quickly after an illness ',
    d: 'someone who is able to memorize facts easily'
  },
  {
    number: 2,
    question: "",
    a: '',
    b: '',
    c: '',
    d: ''
  },
  {
    number: 3,
    question: "",
    a: '',
    b: '',
    c: '',
    d: ''
  },
  {
    number: 1,
    question: "",
    a: '',
    b: '',
    c: '',
    d: ''
  },
  {
    number: 4,
    question: "",
    a: '',
    b: '',
    c: '',
    d: ''
  },
  {
    number: 5,
    question: "",
    a: '',
    b: '',
    c: '',
    d: ''
  }
]
const correctAnswers = [
  'S','D'
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

dataRender(data);

// Calculate the score
const result = document.querySelector('.result');
document.querySelector('.finish').addEventListener('click', (e)=> {
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