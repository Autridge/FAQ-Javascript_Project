'use strict';

const closeBtns = document.querySelectorAll('.plus-close');
const faqBoxes = document.querySelectorAll('.faq-box');

faqBoxes.forEach((faqbox, index) => {
    faqbox.addEventListener('click', () => {
        faqbox.classList.toggle('active');
        rotateBtn(index);
    });
});

//decision control for rotating the "+" button 
// to a certain angle and back 
function rotateBtn(index) {
    closeBtns[index].style.transform =
     faqBoxes[index].classList.contains('active') ?
      'rotate(-45deg)' : 'rotate(0deg)';
}
        

