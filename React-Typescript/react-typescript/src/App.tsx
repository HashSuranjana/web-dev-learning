import './App.css'
import { Container } from './components/Container.tsx';
import { Box } from './components/context/Box.tsx';
import { ThemeContext } from './components/context/ThemeContext.tsx';
import { UserContextProvider } from './components/context/userContext.tsx';
import { Greet } from './components/Greet.tsx' ;
import Heading from './components/Heading.tsx';
import { Oscar } from './components/Oscar.tsx';
import { Person } from './components/Person.tsx';
import { PersonList } from './components/PersonList.tsx';
import { Counter } from './components/state/Counter.tsx';
import { User } from './components/state/User.tsx';
import {Users} from './components/context/User.tsx'
import { Status } from './components/Status.tsx';
import { DomRef } from './components/ref/DomRef.tsx';
import { MutableRef } from './components/ref/MutableRef.tsx';
import { Private } from './components/auth/Private.tsx';
import { Profile } from './components/auth/Profile.tsx';

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

      {/* <Status status= 'Error'/>
      <Heading>Hello world</Heading>
      <Oscar>
        <Heading>Oscar is going to mr.Bean</Heading>
      </Oscar> */}

      {/* <Container  style = {{ padding : '20px',backgroundColor : 'red',border:'2px solid green' }}/>
      
      <User name = {name} email= {email}/>

      <Counter />

      <ThemeContext>
          <Box/>
      </ThemeContext> */}

      <UserContextProvider>
          <Users/>
      </UserContextProvider>

      <DomRef/>

      <MutableRef/>

      <Private  isLoggedIn = {true} component={Profile}/>
    </div>
  )
}

export default App
