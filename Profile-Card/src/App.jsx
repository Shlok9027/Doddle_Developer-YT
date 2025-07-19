import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'
import Button from './button/Button'
import Student from './Student'
import UserGreeting from './UserGreeting'
import List from './List'
import Buttonn from './Buttonn'
import Components from './Components'
import Counter from './Counter'
import Comp from './Comp'
import ColorGen from './ColorGen'
import Car from './Car'
import UseCon from './UseCon'
import Example from './Example'
// import UseContext from './UseContext'
// import ToDo from './ToDo'
function App() {
 

  return (
    <>
    
    <Example/>
    {/* <ToDo/> */}
    <UseCon/>
    {/* <UseContext/> */}

    <Car/>
    <ColorGen/>
    <Comp/>
    
    <Counter/>
    <Components/>
    <Buttonn/>
    <List/>
        <UserGreeting isLoggedIn={true} username="Shlok"/>

    <Card/>
    <Button/>
    <Student name="shlok" age={22} isStudent={true}/>

    <Student name="shreya" age={25} isStudent={true }/>
    
    
    
    </>
  )
}

export default App
