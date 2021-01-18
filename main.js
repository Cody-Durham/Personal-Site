// query selectors here
var displayAbout = document.querySelector('.display-about');
var aboutButton = document.querySelector('#about');
var aboutMeStamp = document.querySelector('.about-me-stamp');
var headerName = document.querySelector('.name');

var displayResume = document.querySelector('.display-resume');
var resumeButton = document.querySelector('#resume');

var frontPageImage = document.querySelector('.front-page-image')
var imageButton = document.querySelector('.personal-image');




// event listeners here
resumeButton.addEventListener('click', showResume);
aboutButton.addEventListener('click', showAbout);
// imageButton.addEventListener('click', goHome);



imageButton.addEventListener('click', function () {
    if (event.target.className === 'personal-image') {
        hideElement(displayAbout);
        hideElement(displayResume);
        hideElement(aboutMeStamp);
        showElement(frontPageImage);
    }
})

function showResume() {
    // displayResume.classList.toggle('hidden');
    showElement(displayResume);
    hideElement(displayAbout);
    hideElement(aboutMeStamp);
    hideElement(frontPageImage);
};


function showAbout() {
    // displayAbout.classList.toggle('hidden');
    hideElement(frontPageImage);
    hideElement(displayResume);
    showElement(displayAbout);
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