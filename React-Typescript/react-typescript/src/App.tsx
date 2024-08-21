import './App.css'
import { Greet } from './components/Greet.tsx' ;
import { Person } from './components/Person.tsx';
import { PersonList } from './components/PersonList.tsx';
import { Status } from './components/Status.tsx';

function App() {
  
  const person = {
    firstName : 'Bruce',
    lastName :'Lee',
  }

  const personList = [
    {
      first :'Hash',
      last : 'Suranjana'
    },
    {
      first :'John',
      last : 'Stark'
    },
    {
      first :'Mosh',
      last : 'Mark'
    }
  ]

  return (
    <div className='App'>
      {/* <Greet name = 'Hash' age= {20} />
      <Person name = {person} />
      <PersonList listing={personList} /> */}

      <Status status= 'Error'/>
    </div>
  )
}

export default App
