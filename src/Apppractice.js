// import { useState } from 'react'
// import './App.css';

// function App() {
//   const [todo, setTodo] = useState([
//     "Assignment ko view kerna",
//     "Smjne ki koshish kerna",
//     "Laptop band kerke soo jana / Youtube se chapai kerlena"
//   ])
//   const [inputData, setInputData] = useState("empty")
//   const [editMode, setEditMode] = useState(false)
//   const [editIndex, setEditIndex] = useState()
//   // let inputValue = "nabeel"

// c
//   // // State
//   // // Declare
//   // const [stateName1, stateUpdateMethod2] = useState()
//   // // Initialize 
//   // const [stateName, stateUpdateMethod] = useState("Nabeel")
//   // // Update
//   // // stateUpdateMethod("Rizwan")

//   // // Variable
//   // // Declare
//   // let variableName1
//   // // const variableName2
//   // // Initialize 
//   // let variableName3 = "Nabeel"
//   // const variableName4 = [2, 34, 4]
//   // // update
//   // variableName3 = "rizwan"


//   // // ("new value")

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
//   }

//   const DeleteTodoItem = (index) => {
//     console.log(index)
//     let copyArr = [...todo]
//     copyArr.splice(index, 1)
//     setTodo(copyArr)
//   }

//   const updateTodoItem = () => {
//     console.log("value update", editIndex)
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* Variable */}
//         {/* Variable: {inputValue} */}
//         {/* State */}
//         State: {inputData}
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


import { useState } from 'react'
import './App.css';

function App() {
  const [switches, setSwitches] = useState(false)

  // let condition
  // if (condition) {

  // }
  // else {

  // }

  return (
    <div className="App">
      <header className="App-header">

        {/* {
          condition == 1 ? run when condition is true (if)
        : run when condition is false (else)
        } */}
        {
          switches === false ? <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Gluehlampe_01_KMJ.png/640px-Gluehlampe_01_KMJ.png" width={200} />
            :
            <img src="https://static.vecteezy.com/system/resources/previews/009/385/277/original/colored-light-bulb-clipart-design-illustration-free-png.png" width={200} />
        }

        <button
          onClick={() => {
            // let a = true
            // !a
            setSwitches(!switches)
          }}
        >
          Sunye light change ker dijiye
        </button>
      </header>
    </div>
  );
}

export default App;