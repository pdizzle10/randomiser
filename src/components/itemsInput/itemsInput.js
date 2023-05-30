import state from '../../state.js'
import parseItems from '../../parse.js'

const formData = {
  itemsRaw: ''
}

const loadItems = ({itemsRaw}) => {
  const items = parseItems(itemsRaw)

  state.groups[state.currentGroupIdentifier].items = items

  const randomiserButton = document.querySelector('#randomiser-button')
  randomiserButton.disabled = false

  const saveSlots = document.querySelectorAll('.saveSlots-saveButton')
  saveSlots.forEach(button => button.disabled = false)
}

const showError = (error) => {
  message.innerText = error.message
}

const heading = document.createElement('h2')
heading.innerText = 'Add items'

const form = document.createElement('form')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  try {
    loadItems(formData)
  } catch (e) {
    showError(e)
  }
})

const textarea = document.createElement('textarea')
textarea.placeholder = 'item 1\nitem 2\netc...'
textarea.setAttribute('id', 'itemsInput-textarea')
textarea.addEventListener('change', (e) => {
  formData.itemsRaw = e.target.value
})

const button = document.createElement('button')
button.innerText = 'load'

const itemsInput = document.createElement('section')
itemsInput.classList.add('itemsInput-section')

const message = document.createElement('p')

form.append(textarea, button)
itemsInput.append(heading, form, message)

export default itemsInput
