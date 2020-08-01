import React, { useState } from 'react';


function Room() {
 //const[isLit, setLit] = useState(false) ; 
 //const[isLit, setLit] = useState(true) ; 
 //const state = useState(true)
  
// console.log("State = ", state);



/// Function updateLit()
let [isLit, setLit ] = useState(false)
//let age =45;
let [age,setAge] = useState(24);

function updateLit()
{
  console.log("Button Clicked");
  
  setLit(!isLit);
  //isLit = !isLit;
  //age = 67;
   


}

const increaseAge2=()=>{
  console.log("increaseAge Button Clicked");
  setAge(++age);
}
function increaseAge(){
  console.log("increaseAge Button Clicked");
  setAge(++age);
}
 return (
      <div>
          This is Room R1 component : Lit = { isLit ? "Lit" : "Dark" }
          This is Room R1 component : Lit = { isLit } 
          This is Room R1 component : Lit = { JSON.stringify(isLit) } 
          <br/>
          Age is : { age }
          <br/>
          <button onClick = { updateLit } > Toggle Light</button> 
          <br/>
          <button onClick ={increaseAge}>Increase Age</button>
          <br/>
          <button onClick ={increaseAge2}>Increase Age</button>
          <br/>
          <button onClick = { ()=> setLit(!isLit) } > Toggle Light</button> 
          <br/>
          <button onClick ={ ()=>{
  console.log("increaseAge Button Clicked");
  setAge(++age);
}}>Increase Age</button>
      </div>
      
    );
/*
    return (
      <div className="room">the room is lit</div>
    );*/
}

export default Room;
