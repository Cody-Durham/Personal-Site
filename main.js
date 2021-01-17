// query selectors here
var displayAbout = document.querySelector('.display-about');
var aboutButton = document.querySelector('#about');
var aboutMeStamp = document.querySelector('.about-me-stamp');
var headerName = document.querySelector('.name');

var displayResume = document.querySelector('.display-resume');
var resumeButton = document.querySelector('#resume');


var imageButton = document.querySelector('.personal-image');




// event listeners here
resumeButton.addEventListener('click', showResume);
aboutButton.addEventListener('click', showAbout);
// imageButton.addEventListener('click', goHome);


// function goHome() {
//     if (event.target.className === 'intro-block') {

//     }
// };

imageButton.addEventListener('click', function () {
    if (event.target.className === 'personal-image') {
        hideElement(displayAbout);
        hideElement(displayResume);
        hideElement(aboutMeStamp);
    }
})

function showResume() {
    // displayResume.classList.toggle('hidden');
    showElement(displayResume);
    hideElement(displayAbout);
    hideElement(aboutMeStamp);
};


function showAbout() {
    // displayAbout.classList.toggle('hidden');
    showElement(displayAbout);
    hideElement(displayResume);
    showElement(aboutMeStamp);
};




//----------------------------------------->>
//hide/show
function showElement(element) {
    element.classList.remove('hidden');
};
function hideElement(element) {
    element.classList.add('hidden');
};
