import state from '../../state.js'
import randomItem from './randomItem.js'

const randomButton = document.createElement('button')
randomButton.innerText = 'randomise'
randomButton.setAttribute('id', 'randomiser-button')
randomButton.addEventListener('click', () => {
  const { items } = state.groups[state.currentGroupIdentifier]
  const randomInt = Math.floor(Math.random() * items.length)
  randomItem.innerText = items[randomInt]
})
if (state.groups[state.currentGroupIdentifier] === undefined) {
  randomButton.disabled = true
}

const randomiser = document.createElement('section')
randomiser.classList.add('randomiser-section')
randomiser.append(randomItem, randomButton)

export default randomiser
