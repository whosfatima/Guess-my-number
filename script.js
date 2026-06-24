const SaveValue= document.getElementById('SaveValue')
const ModalBox= document.getElementById('modalBox')
const OPenModal= document.getElementById('OPenModal')

SaveValue.addEventListener('click', () => {
    ModalBox.classList.remove('modalBox')
    ModalBox.classList.add('none')
})
OPenModal.addEventListener('click', () => {
    ModalBox.classList.remove('none')
    ModalBox.classList.add('modalBox')
})