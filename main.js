// query selectors here
var displayResume = document.querySelector('.display');
var resumeButton = document.querySelector('#resume');




// event listeners here
resumeButton.addEventListener('click', showResume);


function showResume() {
    displayResume.classList.remove('hidden');
    console.log('tetst');
};