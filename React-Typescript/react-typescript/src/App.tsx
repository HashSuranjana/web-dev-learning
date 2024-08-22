import './App.css'
import { Container } from './components/Container.tsx';
import { Greet } from './components/Greet.tsx' ;
import Heading from './components/Heading.tsx';
import { Oscar } from './components/Oscar.tsx';
import { Person } from './components/Person.tsx';
import { PersonList } from './components/PersonList.tsx';
import { User } from './components/state/User.tsx';
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

  const name:string = 'John' 
  const email:string = 'john@gmail.com'

  return (
    <div className='App'>
      {/* <Greet name = 'Hash' age= {20} />
      <Person name = {person} />
      <PersonList listing={personList} /> */}

      <Status status= 'Error'/>
      <Heading>Hello world</Heading>
      <Oscar>
        <Heading>Oscar is going to mr.Bean</Heading>
      </Oscar>

      <Container  style = {{ padding : '20px',backgroundColor : 'red',border:'2px solid green' }}/>
      
      <User name = {name} email= {email}/>
    </div>
  )
}

export default App
