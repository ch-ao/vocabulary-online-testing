///////////////////////////////// data ///////////////////////////////////////// 

const data = [
  {
    number: 1,
    question: "The Operating System is a:",
    a: 'System Software',
    b: "Application Software",
    c: 'Utility Software',
    d: 'Malware'
  },
  {
    number: 2,
    question: "Files are Organized in:",
    a: 'RAM',
    b: "Cache",
    c: 'Directories',
    d: 'None of the above'
  },
  {
    number: 3,
    question: 'Computer Hardware is:',
    a: 'A medium for Data Communications',
    b: "A Physical Device that driven by data",
    c: ' A Physical Device Driven by software',
    d: 'All of the Above'
  },
  {
    number: 4,
    question: 'What is the programming for web ?',
    a: 'JavaScript',
    b: "Python",
    c: 'C++',
    d: 'Web'
  }
];

const answer = 'aada';
const name = 'Computer';

///////////////////////////////// data //////////////////////////////////////// 

const correctAnswers = answer.toUpperCase().split('');
const quizForm = document.querySelector('.quiz-form');

document.querySelector('.title').innerHTML = `${name} Testing Quiz`

// render forms 
data.forEach(e => 
  quizForm.innerHTML += 
  `     
    <div class="my-5 justify-content-center">
    <p class="lead font-weight-normal"> ${e.number + '. ' + e.question}</p>
    <div class="form-check my-2">
      <label class="form-check-label">
        <input type="radio" class="form-check-input" name=${'q' + e.number} value="A">${e.a}
      </label>
    </div>
    <div class="form-check my-2">
      <label class="form-check-label">
        <input type="radio" class="form-check-input" name=${'q' + e.number} value="B">${e.b}
      </label>
    </div>
    <div class="form-check my-2">
      <label class="form-check-label">
        <input type="radio" class="form-check-input" name=${'q' + e.number} value="C">${e.c}
      </label>
    </div>
    <div class="form-check my-2">
      <label class="form-check-label">
        <input type="radio" class="form-check-input" name=${'q' + e.number} value="D">${e.d}
    </div>
    </div>
    <hr>
    `
);

// add button 
quizForm.innerHTML += 
  `
  <div class="text-center mt-5"> 
    <input type="submit" class="btn btn-lg btn-success">
  </div>
  `;

const result = document.querySelector('.result');
const n = data.length;

document.querySelector('.btn').addEventListener('click', (e)=> {

  e.preventDefault();

  let score = 0;
  const form = document.querySelector('.quiz-form');
  const userAnswers = [ ];
  for (let j=1; j<=n; j++) {
    userAnswers.push(eval(`form.q${j}.value`))
  }

  if(userAnswers.filter(x=>x!=='').length !== n) {
    alert('Please answer all questions !')
  } else {
    for (let i=0; i<n; i++) {
      correctAnswers[i] === userAnswers[i] && score++;
    }

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

