const modalBtns = document.querySelectorAll('.more')
const modal = document.querySelector('.modal')
//const modalClose = document.querySelector('.modal__close')
//const modalBtns = document.querySelectorAll('.more')


modalBtns.forEach((modalBtn) => {
    modalBtn.addEventListener('click', () => {
        modal.classList.remove('hidden')
    })
})

modal.addEventListener('click', (event) => {
    const target = event.target

    if (target.classList.contains('overlay') || target.classList.contains('modal__close')) {
        //console.log('overlay')
        modal.classList.add('hidden')
    }
})