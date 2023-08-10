// import { useState } from 'react'
// import './App.css';

// function App() {
//   const [todo, setTodo] = useState([
//     "Assignment ko view kerna",
//     "Smjne ki koshish kerna",
//     "Laptop band kerke soo jana / Youtube se chapai kerlena"
//   ])
//   const [inputData, setInputData] = useState("")
//   const [editMode, setEditMode] = useState(false)
//   const [editIndex, setEditIndex] = useState()
  // let inputValue = "nabeel"


  // // State
  // // Declare
  // const [stateName1, stateUpdateMethod2] = useState()
  // // Initialize 
  // const [stateName, stateUpdateMethod] = useState("Nabeel")
  // // Update
  // // stateUpdateMethod("Rizwan")

  // // Variable
  // // Declare
  // let variableName1
  // // const variableName2
  // // Initialize 
  // let variableName3 = "Nabeel"
  // const variableName4 = [2, 34, 4]
  // // update
  // variableName3 = "rizwan"


//   // // ("new value")
// /*
//   const AddTodoItem = () => {
//     // todo.push(inputData) 
//     //  setTodo.push
//     // setTodo(inputData)

//     // Step 1
//     // Create copy of state
//     let copyArray = [...todo]
//     // console.log("copyArray 1", copyArray)

//     // Step 2
//     // Copy variable push input value
//     copyArray.push(inputData)

//     // todo
//     console.log("copyArray 2", copyArray)
//     // Step 3
//     // todo state updated with copy array
//     // Copy arr ko set kerwadiya todo state mai
//     setTodo(copyArray)
//     setInputData("")
//   }

//   const DeleteTodoItem = (index) => {
//     console.log(index)
//     let copyArr = [...todo]
//     copyArr.splice(index, 1)
//     setTodo(copyArr)
//   }

//   const updateTodoItem = () => {
//     console.log("value update", editIndex)
    
//     let copyArr = [...todo]
//     copyArr[editIndex] = inputData
//     setInputData("")
//     setTodo(copyArr)
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* Variable */}
//         {/* Variable: {inputValue} */}
//         {/* State */}
//         {/* State: {inputData} */}
//         <input
//           placeholder='Enter your task'
//           value={inputData}
//           onChange={(e) => {
//             // console.log("event", e)
//             // inputValue = (e.target.value)
//             setInputData(e.target.value)
//           }}
//         />
//         {editMode ? <button
//           onClick={updateTodoItem}
//         >Update</button>
//           : <button
//             onClick={AddTodoItem}
//           >ADD</button>}
//         <button
//           onClick={() => {
//             setTodo([])
//           }}
//         >Delete All</button>
//         {
//           todo.map((item, index) => {
//             return <div key={index} className=''>
//               {index + 1}) {item}
//               <button
//                 onClick={() => DeleteTodoItem(index)}
//               >Del</button>
//               <button
//                 onClick={() => {
                  
//                   setEditMode(true)
//                   setInputData(item)
//                   setEditIndex(index)
//                 }}
//               >Edit</button>
//             </div>
//           })
//         }
//       </header>
//     </div>
//   );
// }

// export default App;


// import React, { useState } from "react";
// import "./App.css";
// export default function App() {
//   const [userName, setUserName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPass, setConfirmPass] = useState("");

//   const [isLogin, setIsLogin] = useState(false);

//   return (
//     <div id="container">
//       {!isLogin ? (
//         <div id="signup">
//           <div id="btnDiv">
//             <button style={{ backgroundColor: "lightgrey", color: "grey" }}>
//               Sign-up
//             </button>
//             <button onClick={() => setIsLogin(true)}>Sign-in</button>
//           </div>
//           <div id="inputDiv">
//             <input
//               type="text"
//               placeholder="Name"
//               value={userName}
//               onChange={(e) => setUserName(e.target.value)}
//             />
//             <input
//               type="text"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <input
//               type="text"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <input
//               type="text"
//               placeholder="Confirm Password"
//               value={confirmPass}
//               onChange={(e) => setConfirmPass(e.target.value)}
//             />
//           </div>
//           <div id="signupBtnDiv">
//             <button>Signup</button>
//           </div>
//         </div>
//       ) : (
//         <div id="signup">
//           <div id="btnDiv">
//             <button onClick={() => setIsLogin(false)}>Sign-up</button>
//             <button style={{ backgroundColor: "lightgrey", color: "grey" }}>
//               Sign-in
//             </button>
//           </div>
//           <div id="inputDiv">
//             <input
//               type="text"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <input
//               type="text"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <div id="signupBtnDiv">
//             <button>Login</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   // let name = "nabeel"
//   // let age = 23
//   // let bol = true
//   // let studentData = {
//   //   id: "1100",
//   //   name: "rizwan"
//   // }
//   // let colors = ["green", "yellow", "red", "blue", "white"]
//   // let Q5 = [{ company: "Avanza", job: ["Frontend Developer", "Backend Developer"] }]
//   // bol a = false

//   const images = ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Gluehlampe_01_KMJ.png/640px-Gluehlampe_01_KMJ.png",
//     "https://static.vecteezy.com/system/resources/previews/009/385/277/original/colored-light-bulb-clipart-design-illustration-free-png.png"]

//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* {name} */}
//         {/* {age} */}
//         {/* 1. {bol} */}
//         {/* {studentData.name} */}
//         {/* {colors[1]} */}
//         {/* {1} */}
//         {/* {
//           colors.map((item, index) => {
//             console.log("item", item)
//             console.log("index", index)
//             return <p>
//               {index}, nabeel {item}
//             </p>
//           })
//         } */}
//         {/* {
//           Q5.map(item => {

//             console.log("item: ", item)

//             return <p>
//               {item.company}
//               {
//                 item.job.map((a, b) => {
//                   console.log("a", a)

//                   return <p>
//                     {a}
//                   </p>
//                 })
//               }
//             </p>
//           })
//         } */}

//         {
//           images.map(url => {
//             return <img width={200}  src={url} />
//           })
//         }
//       </header>
//     </div>
//   );
// }

// export default App;


import { useState } from 'react'
import './App.css';

function App() {
  const [forms , setForms ] = useState("")
  const [logins , setLogins ] = useState("")


  const [number , setNumber] = useState("")
  const [email , setEmail ] = useState("")
  const [password , setPassword ] = useState("")

  const emailHandler = (event)=>{
    setEmail(event.target.value);
    console.log(email);
  }
  const passwordHandler = (event)=>{
    setPassword(event.target.value);
    console.log(password);
  }
  const numberHandler = (event)=>{
    setNumber(event.target.value);
    console.log(number);
  }

  const loginEmailHandler = (event)=>{
    setEmail(event.target.value);
    console.log(email);
  }
  const loginPasswordHandler = (event)=>{
    setPassword(event.target.value);
    console.log(password);
  }
 
  
  return(
    <>
    {
      forms === false ? 
      
        <form>
            
            
            <input type="email" placeholder='Enter Email' value={email} onChange={emailHandler}></input> <br /> <br />
            <input type="password" placeholder='Enter Psw' value={password} onChange={passwordHandler}></input> <br /> <br />
            <input type="number" placeholder='Enter Number'  value={number} onChange={numberHandler}></input> <br /> <br />
            <button onClick={()=>{
              setLogins(!logins)
            }}>Login</button>
        </form>
        :
        <form>
            <input type="email" placeholder="Enter Email" value={email} onChange={loginEmailHandler}></input>
            <input type="password" placeholder="Enter Password" value={password} onChange={loginPasswordHandler}></input>
            <br /><br />
        </form>
    }
    <button onClick={()=>{
      setForms(!forms)
    }}>
      SignUp
    </button>
    </>
  )
}

export default App;
