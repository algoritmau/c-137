import ReactDOM from 'react-dom/client'

function App() {
  return <h1>Rick and Morty</h1>
}

const appContainer = document.getElementById('root')
const appRoot = ReactDOM.createRoot(appContainer)

appRoot.render(<App />)

