$('.start').click(()=> {
  event.preventDefault();
  let grade = $('#input :selected').val();
  switch (grade) {
    case 'G6 / G7':
      location.href='./g6-7.html';
      break;
    case 'G8 / G9':
      location.href='./g8-9.html';
      break;
    default: 
      alert('We are still working on it...');
  }
})
