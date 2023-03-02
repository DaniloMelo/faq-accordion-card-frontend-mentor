const arrows = document.querySelectorAll('.arrow')


// questions.forEach( question => {
//     question.addEventListener('click', (event) => {
//         question.lastElementChild.classList.toggle('faq__answer--hide')

//         console.log(event.target);
//     })
// })

// arrows.forEach( arrow => {
    //     a
    // })



//////////////////////////


// const questions = document.querySelectorAll('.faq__question')

// questions.forEach( question => {
//     question.addEventListener('click', (event)  => {

//         if(event.target.parentNode.classList.contains('faq__question')){
//             event.target.nextElementSibling.classList.toggle('faq__answer--hide')
//         }
        
//     })
// })


const faqQuestionsBoxes = document.querySelectorAll('.faq__question')

faqQuestionsBoxes.forEach( box => {
    box.addEventListener('click', () => {
        box.classList.toggle('faq__answer--toggle')
    })
})

