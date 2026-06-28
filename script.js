const minNumber = document.getElementById('minNumber')
const maxNumber = document.getElementById('maxNumber')

const SaveValue = document.getElementById('SaveValue')
const ModalBox = document.getElementById('modalBox')
const OPenModal = document.getElementById('OPenModal')
const StartRansom = document.getElementById('StartRansom')
const guessPart = document.getElementById('guessPart')
const paraVal = document.querySelector('.value')
const warning = document.createElement('p')
ModalBox.appendChild(warning)

const result= document.querySelector('.result')

OPenModal.addEventListener('click', () => {
    ModalBox.classList.remove('none')
    ModalBox.classList.add('modalBox')
})

SaveValue.addEventListener('click', () => {
    let minNumberVal = +minNumber.value
    let maxNumberVal = +maxNumber.value

    if (minNumberVal >= maxNumberVal) {
        // alert('max must be bigger than min...')
        warning.innerHTML=''
        // console.log('bloom1');
        warning.classList.remove('none')
        warning.classList.add('warning')
        warning.append('MAX must be more than MIN!!!')
     
    } else if(maxNumberVal > minNumberVal) {
        // console.log('bloom2');
        paraVal.textContent = `numbers are between ${minNumberVal} - ${maxNumberVal}`
        ModalBox.classList.remove('modalBox')
        ModalBox.classList.add('none')

        warning.classList.remove('warning')
        warning.classList.add('none')
        
    }


    // minNumber.value=
    // maxNumber.value=


})
StartRansom.addEventListener('click', () => {
    // result.innerHTML=' '
    let maxInput = +maxNumber.value
    let minInput = +minNumber.value
let GuessNumb= +guessPart.value
    // let minInputNumber= +minInput
    // console.log('MIN=' + minInput);
    // console.log('MAX= ' + maxInput);
    // console.log(minInputNumber);

    let randomNumber= randomNum(minInput, maxInput)
    let notran= randomNumber
    console.log(randomNumber);
    console.log(notran);
    
    
    // result.append(randomNumber)
    if(GuessNumb === randomNumber) console.log('so>');
    
})

function randomNum(minNumber, maxNumber) {
    let random = Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber
    console.log(random);
    return random
}

