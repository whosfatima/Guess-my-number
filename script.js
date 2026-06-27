const SaveValue = document.getElementById('SaveValue')
const ModalBox = document.getElementById('modalBox')
const OPenModal = document.getElementById('OPenModal')
const StartRansom = document.getElementById('StartRansom')
const minNumber = document.getElementById('minNumber')
const maxNumber = document.getElementById('maxNumber')
const paraVal = document.querySelector('.value')

OPenModal.addEventListener('click', () => {
    ModalBox.classList.remove('none')
    ModalBox.classList.add('modalBox')
})

SaveValue.addEventListener('click', () => {
    let minNumberVal = +minNumber.value
    let maxNumberVal = +maxNumber.value

    paraVal.textContent = `numbers are between ${minNumberVal} - ${maxNumberVal}`
    
 
    ModalBox.classList.remove('modalBox')
    ModalBox.classList.add('none')
    // minNumber.value=
    // maxNumber.value=

  
})
StartRansom.addEventListener('click', () => {
    let maxInput= maxNumber.value 
    let minInput= minNumber.value 
    let minInputNumber= +minInput
    console.log(maxInput);
    console.log(minInputNumber);
    
randomNum( minInput, maxInput)
})

function randomNum(minNumber, maxNumber) {
    let random = Math.floor(Math.random() *(maxNumber-minNumber) + maxNumber )
    console.log(random);

}
// randomNum(maxNumbervali)
// console.log( typeof randomNum() );
