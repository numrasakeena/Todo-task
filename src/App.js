// import logo from './logo.svg';
import './App.css';
// import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
// import React, { useState } from 'react';

// import Start from './components/Start'
// import Home from './components/Home'
// import Button2 from './components/Button2'
// import Button3 from './components/Button3'

// import images

// import image from "./img/nextButton.png";
// import image2 from "./img/switchButton.png";
// import image3 from './img/conedDown_Icon.png';
// import image4 from './img/conedUp_Icon.png';
// import image5 from './img/doorUnload_Icon.png';
// import image6 from './img/nextButton.png';

// import{BrowserRouter as Router, Routes,Route} from "react-router-dom"


function App() {
  return (
  // const [count, setCount] = useState(0);
  // return (
  //   <div className="container">
  //    <div className='card text-center'>
  //     <div className='card-body'>
  //     <h1> Counter App </h1>
  //      <h2 className=''>{count}</h2>
  //      <button className='btn1 btn-success' onClick={() => setCount(count + 1)}>Increment</button>
  //      <button className='btn2 btn-danger' onClick={() => setCount(count - 1)} disabled={count ===0}>Decrement</button>
  //      <button className='btn3 btn-secondary' onClick={() => setCount(0)} disabled={count ===0}>Reset</button>
  //     </div>
  //    </div>
  //   </div>

    // <div className="App">
    //   <Router>
    //     <Routes>
    //       <Route exact path="/" element={<Start/>}/>   
    //       <Route exact path="/start" element={<Start/>}/>  
    //       <Route exact path="/home" element={<Home/>}/> 
    //       <Route exact path="button2" element={<Button2/>}/>   
    //       <Route exact path="button3" element={<Button3/>}/> 
    //     </Routes>
    //   </Router>
     
    // </div>
   
    <div className='todo-app'> 
      <TodoList />
    </div>

  );
}

export default App;
