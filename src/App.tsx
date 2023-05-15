import React from 'react';
import './App.css';
import Greet from './components/Greet';
import {Person} from './components/Person';
import {PersonList} from './components/PersonList';
import {Status} from './components/Status';
import {Heading} from './components/Heading';
import {Oscar} from './components/Oscar';
import {Button} from './components/Button';
import {Input} from './components/Input';

function App() {

  const personName = {
    firstName : "nader",
    lastName : "jafarpour",
  }

  const nameList =[
    {
      firstName : "nader",
      lastName : "jafarpour"
    },
    {
      firstName : "mohammad",
      lastName : "satat"
    },
    {
      firstName : "ahmad",
      lastName : "sadat"
    }
  ]

  return (
    <div className="App">

      <Greet name="nader" messageCount={30} isLoggedIn={false}/>

      <Person name={personName}/>

      <PersonList names={nameList}/>

      <Status status="success"/>

      <Heading>placeholder text</Heading>

      <Oscar>
        <Heading>Oscar goes leonardo Decaprio</Heading>
      </Oscar>

      <Greet name="AliReza" isLoggedIn={true}/>

      {/* <Button handleClick={()=> console.log("click")}/> */}
      {/* <Button handleClick={(event )=> console.log("click" , event)}/> */}
      <Button handleClick={(event  , id)=>console.log("click" , id)}/>


      <Input value='' handleChange={(event) => console.log(event.target.value)}/>

      
    </div>
  );
}

export default App;
