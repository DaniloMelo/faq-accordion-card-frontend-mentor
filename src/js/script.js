const faqQuestionsBoxes = document.querySelectorAll('.faq__question')

faqQuestionsBoxes.forEach( box => {
    box.addEventListener('click', (event) => {
        box.classList.toggle('faq__answer--toggle')
        box.classList.toggle('faq__anwer--rotate-arrow')
        box.firstElementChild.classList.toggle('faq__question--bold')
        console.log(box)
 
    })
})



