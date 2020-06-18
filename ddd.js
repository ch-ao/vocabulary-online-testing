import { g67_data1, g67_data2, g67_data3, g67_data4, g67_answers } from './g67.js';
import { g23_data, g23_answers } from './g23.js'

var isOnTime = true;

$('.start').click(()=> {
  event.preventDefault();
  let grade = $('#input :selected').val();
  switch (grade) {
    case 'G2 / G3':
      g23();
      break;
    case 'G6 / G7':
      g67();
      break;
    default: 
      alert('Please choose your grade ...');
  }
})

const g67 = () => {
  renderTemplate();
  $('#grade').text('G6 / G7');
  $('.myform').append(
    `      
    <h3 class="my-3 text-dark text-center">Multiple Choice Questions</h3>
    <h3 class="my-3 text-dark text-center">There may be <span class="bg-warning text-light">more than one</span>  correct answer.</h3>
    <hr/>
  `);
  dataRender(g67_data1);
  $('.myform').append(
    `      
  <h3 class="my-3 text-dark text-center">Read the following sentences. If the highlighted <span class='text-light bg-info'>word</span> is used correctly, check the box. If the highlighted <span class='text-light bg-info'>word</span> is used incorrectly, leave the check box empty.</h3>
  <hr/>
  `);
  dataRender(g67_data2);
  $('.myform').append(
    `      
    <h3 class="my-3 text-dark text-center">Multiple Choice Questions</h3>
    <h3 class="my-3 text-dark text-center">There may be <span class="bg-warning text-light">more than one</span>  correct answer.</h3>
    <hr/>
  `);
  dataRenderInline(g67_data3);
  dataRender(g67_data4)
  calculateScore(g67_answers);
}

const g23 = () => {
  renderTemplate();
  startTimer();
  $('#grade').text('G2 / G3');
  $('.myform').append(
    `      
    <h3 class="my-3 text-dark text-center">Multiple Choice Questions</h3>
    <h3 class="my-3 text-dark text-center">There may be <span class="bg-warning text-light">more than one</span>  correct answer.</h3>
    <hr/>
  `);
  dataRender(g23_data);
  calculateScore(g23_answers);
}

const renderTemplate = () => {  
  $('.header').removeClass('d-none');
  $('.quiz').removeClass('d-none');
  $('.footer').removeClass('d-none');
  $('#welcome').addClass('d-none');
}

const dataRender = (arr) => {
  arr.forEach(e => 
    $('.myform').append(
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
      `)
  );
}

const dataRenderInline = (arr) => {
  arr.forEach(e => 
    $('.myform').append(
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
  ));
}


const calculateScore = (answer) => {
  const n = answer.length;
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
      if( missingAnswers.length !== 0 && !isOnTime) {
        alert(`Please Answer Question No. ${[...missingAnswers]} !`)
      } else {
      for (let i=0; i<n; i++) {
        answer[i] === userAnswers[i] && score++;
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
}

const startTimer = () => {

  $('.timer').removeClass('d-none');
  var m = 15;
  var s = 0;
  const daojishi = setInterval(() => {
    $('#m').text(m);
    (s < 10) ? $('#s').text('0' + s) : $('#s').text(s);
    console.log(m,s)
    if (s===0) {
      s = 60;
      m--;
    }
    if (s===40) {
      clearInterval(daojishi);
      isOnTime = false;
      calculateScore(g23_answers);
    }  
    s--;
  }, 1000);
}
