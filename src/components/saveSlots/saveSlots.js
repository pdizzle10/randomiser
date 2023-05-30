import state from '../../state.js'

const slots = [
  "slot1",
  "slot2",
  "slot3",
  "slot4",
].map(name => {
  const slot = document.createElement('div')
  slot.classList.add('slot-card')

  const slotTitle = document.createElement('h2')
  slotTitle.innerText = name

  const buttons = document.createElement('div')
  const loadButton = document.createElement('button')
  loadButton.innerText = 'load'
  loadButton.addEventListener('click', () => {
    state.currentGroupIdentifier = name
    const input = document.querySelector('#itemsInput-textarea')
    input.value = state.groups[name].items.join("\n")
  })
  if (state.groups[name].items.length === 0) {
    loadButton.disabled = true
  }

  const saveButton = document.createElement('button')
  let saved = false
  saveButton.innerText = 'save'
  saveButton.classList.add('saveSlots-saveButton')
  saveButton.addEventListener('click', () => {
    if (!saved) {
      saveButton.innerText = 'clear'
      state.groups[name].items = state.groups[state.currentGroupIdentifier].items
      loadButton.disabled = false
      slot.classList.add('slot-card__saved')
      saved = true
    } else {
      saveButton.innerText = 'save'
      state.groups[name].items = []
      loadButton.disabled = true
      slot.classList.remove('slot-card__saved')
      saved = false
    }
  })
  if (state.groups['temp'].items.length === 0) {
    saveButton.disabled = true
  }

  buttons.append(saveButton, loadButton)
  slot.append(slotTitle, buttons)

  return slot
})

const saveSlots = document.createElement('section')
saveSlots.classList.add('saveSlots')
saveSlots.append(...slots)

export default saveSlots
