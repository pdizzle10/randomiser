import itemsInput from './components/itemsInput/itemsInput.js'
import randomiser from './components/randomiser/randomiser.js'
import saveSlots from './components/saveSlots/saveSlots.js'

const app = document.createElement('div')
app.classList.add('app')

const main = document.createElement('main')
main.append(itemsInput, randomiser)

app.append(saveSlots, main)

export default app
