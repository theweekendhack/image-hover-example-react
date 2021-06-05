
import '../assests/css/App.css';

import pastyImg from "../assests/img/patsy.jpeg";
import nadiaImg from "../assests/img/nadia.jpeg";

import {useState} from "react";

/*
    Assign data to a component ->


    This allows you to build the elements within in your component 
    to YOUR DATA


    When you update state , the COMPONENT IS RERENDERED!!!!!!!!!
*/

const App = () => 
{

  
  
   const [socaArtiste, setSocaArtiste] = useState({
      name: "Patrice Roberts",
      pic :pastyImg
    });


  
  //closure
  const changeToPatsy = ()=>{
      
    setSocaArtiste({
      name :"Patrice Roberts",
      pic:pastyImg
    })
  }


  //closure
  const changeToNadia = ()=>{


    setSocaArtiste({
      name : "Nadia Baston",
      pic :nadiaImg
    })

  }

  return (
    <div>

        <h1>{socaArtiste.name}</h1>
         <img src={socaArtiste.pic} alt={socaArtiste.name}   onMouseOver={changeToNadia} onMouseOut={changeToPatsy}/>

        
    </div>
  )


}




export default App
