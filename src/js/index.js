import { getNumberOfChars, getLower, getUpper, getFirstUpper, repetitions } from './helpers.js'

const answer1 = document.querySelector('#answer1')
const answer2 = document.querySelector('#answer2')
const answer3 = document.querySelector('#answer3')
const answer4 = document.querySelector('#answer4')
const answer5 = document.querySelector('#answer5')

const name = document.querySelector('#your-name')

name.addEventListener('keyup', () => {
  answer1.textContent = getNumberOfChars(name.value)
  answer2.textContent = getLower(name.value)
  answer3.textContent = getUpper(name.value)
  answer4.textContent = getFirstUpper(name.value)
  answer5.textContent = repetitions(name.value)
})
