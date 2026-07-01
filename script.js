const minNumber = document.getElementById('minNumber')
const maxNumber = document.getElementById('maxNumber')
const SaveValue = document.getElementById('SaveValue')
const ModalBox = document.getElementById('modalBox')
const OPenModal = document.getElementById('OPenModal')
const StartRansom = document.getElementById('StartRansom')
const guessPart = document.getElementById('guessPart')

const paraVal = document.querySelector('.value')
const group = document.querySelector('.group')
const result = document.querySelector('.result')

const warning = document.createElement('p')
const step = document.createElement('p')
const score = document.createElement('p')
let SpanStep = document.createElement('span')

// SpanStep.append('20')
ModalBox.appendChild(warning)
group.appendChild(step)
group.appendChild(score)

// step.appendChild(SpanStep)

let avRandom = 0
let guessStep = 20
step.append('Step:', guessStep)

// SpanStep.innerHTML = ' '





OPenModal.addEventListener('click', () => {
    ModalBox.classList.remove('none')
    ModalBox.classList.add('modalBox')
})

SaveValue.addEventListener('click', () => {
    let minNumberVal = +minNumber.value
    let maxNumberVal = +maxNumber.value

    if (minNumberVal >= maxNumberVal) {
        warning.innerHTML = ''
        warning.classList.remove('none')
        warning.classList.add('warning')
        warning.append('MAX must be more than MIN!!!')

    } else if (maxNumberVal > minNumberVal) {
        paraVal.textContent = `numbers are between ${minNumberVal} - ${maxNumberVal}`
        ModalBox.classList.remove('modalBox')
        ModalBox.classList.add('none')

        warning.classList.remove('warning')
        warning.classList.add('none')
        avRandom = randomNum(minNumberVal, maxNumberVal)

    }

    console.log(avRandom);


})
StartRansom.addEventListener('click', () => {
    result.innerHTML = ''
    let maxInput = +maxNumber.value
    let minInput = +minNumber.value
    let GuessNumb = +guessPart.value
    if (avRandom === GuessNumb) {
        result.append(avRandom)
    } else {
    //    SpanStep.append('')
    guessStep--
    // console.log(SpanStep);
    
    // console.log(guessStep);
    step.append(guessStep)
    guessStep.innerHTML=''
    }
})

// console.log(guessStep);
score.append('Score:')
//         group.innerHTML = `
//       <p id="step"><span>Step:</span>${guessStep}</p>
//             <p id="score"><span>Score:</span></p>
// `
function randomNum(minNumber, maxNumber) {
    let random = Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber
    console.log(random);
    return random
}