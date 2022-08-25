import './app.css'
import App from './App.svelte'


console.log('Hello World from main.js')

const app = new App({
  target: document.getElementById('app')
})

export default app
