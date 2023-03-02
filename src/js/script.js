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
    box.addEventListener('click', (event) => {
        box.classList.toggle('faq__answer--toggle')
        box.classList.toggle('faq__anwer--rotate-arrow')
        // console.log(event.target.childNodes[1])
        // console.log(box.classList.contains('faq__question'))

        // if(box.classList.contains('faq__question')){
        //     box.classList.toggle('faq__answer--toggle')
        //     event.target.childNodes[1].classList.toggle('faq__anwer--rotate-arrow')
        // }

        
    })
})



