import './App.css'
import { Greet } from './components/Greet.tsx' ;

function App() {

  return (
    <div className='App'>
      <Greet name = 'Hash' age= {20} />
    </div>
  )
}

export default App
