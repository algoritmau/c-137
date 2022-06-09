import ReactDOM from 'react-dom/client'
import List from './components/List'

function App() {
  return (
    <div>
      <h1>Rick and Morty</h1>
      <List />
    </div>
  )
}

const appContainer = document.getElementById('root')
const appRoot = ReactDOM.createRoot(appContainer)

appRoot.render(<App />)

