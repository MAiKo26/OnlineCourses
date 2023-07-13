import "./App.css";
import { useState, useEffect, createContext } from "react";
import { Task } from "./components/Task";
import Axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { Contact } from "./pages/Contact";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Form } from "./components/Form";
import { useToggle } from "./components/useToggle";
import { useCountSetter } from "./components/useCountSetter";

// fetch("https://catfact.ninja/fact")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   });

// export const AppContext = createContext();

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={}/>
        </Routes>
      </Router>
    </div>
  )

  // const { count, increase, decrease, zero } = useCountSetter();
  // return (
  //   <div className="App">
  //     <button onClick={increase}>Increase</button>
  //     <button onClick={decrease}>Decrease</button>
  //     <button onClick={zero}>Set to zero</button>
  //     {count}
  //   </div>
  // );
  //
  //
  //
  // const [toggle, isVisible] = useToggle(true);
  // return (
  //   <div className="App">
  //     <button onClick={toggle}>{isVisible ? "Hide" : "Show"}</button>{" "}
  //     {isVisible && <h1> Hidden text</h1>}{" "}
  //   </div>
  // );
  // return (
  //   <div className="App">
  //     {" "}
  //     <Form></Form>
  //   </div>
  // );
  // const [username, setUsername] = useState("Maiko");
  // const client = new QueryClient();
  // return (
  //   <div className="App">
  //     <AppContext.Provider value={{ username, setUsername }}>
  //       <QueryClientProvider client={client}>
  //         <Router>
  //           <Link to="/">Home</Link> <Link to="/Menu">Menu</Link>{" "}
  //           <Link to="/Contact">Contact</Link>
  //           <Routes>
  //             <Route path="/" element={<Home />} />
  //             <Route path="*" element={<h1>Page not found</h1>} />
  //             <Route path="/Menu" element={<Menu />} />
  //             <Route path="/Contact" element={<Contact />} />
  //           </Routes>{" "}
  //         </Router>{" "}
  //       </QueryClientProvider>
  //     </AppContext.Provider>
  //   </div>
  // );
  // const TopComponent = () => {
  //   const [state, setState] = useState();
  //   return (
  //     <div>
  //       {" "}
  //       <MiddleComponent state={state} />
  //     </div>
  //   );
  // };
  // const MiddleComponent = (state) => {
  //   return (
  //     <div>
  //       {" "}
  //       <BottomComponent state={state} />
  //     </div>
  //   );
  // };
  // const BottomComponent = (state) => {
  //   return <div> {state} </div>;
  // };
  // const [excuse, setExcuse] = useState("");
  // const [excuseResult, setExcuseResult] = useState("");
  // const fetchData = (excuse) => {
  //   Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}`).then(
  //     (res) => {
  //       console.log(res.data[0].excuse);
  //       setExcuseResult(res.data[0].excuse);
  //     }
  //   );
  // };
  // return (
  //   <div className="App">
  //     <h1>Generate An Excuse</h1>
  //     <button onClick={() => fetchData("party")}>Party</button>
  //     <button onClick={() => fetchData("family")}>Family</button>
  //     <button onClick={() => fetchData("office")}>Office</button>
  //     <p>{excuseResult}</p>
  //   </div>
  // );
  // const [name, setName] = useState("");
  // const [predictedAge, setPredictedAge] = useState(0);
  // const fetchData = () => {
  //   Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
  //     console.log(res.data);
  //     setPredictedAge(res.data.age);
  //   });
  // };
  // return (
  //   <div className="App">
  //     <input
  //       placeholder="user"
  //       onChange={(event) => {
  //         setName(event.target.value);
  //       }}
  //     ></input>{" "}
  //     <button onClick={fetchData}>Predict Age</button>{" "}
  //     <h1>Predicted Age:{predictedAge}</h1>
  //   </div>
  // );
  // const [catFact, setCatFact] = useState("");
  // const fetchCatFact = () => {
  //   Axios.get("https://catfact.ninja/fact").then((res) => {
  //     console.log(res.data);
  //     setCatFact(res.data.fact);
  //   });
  // };
  // return (
  //   <div className="App">
  //     <button onClick={fetchCatFact}> Generate Cat Fact</button>{" "}
  //     <p>{catFact}</p>
  //   </div>
  // );
  // const [todoList, setTodoList] = useState([]);
  // const [newTask, setNewTask] = useState("");
  // const deleteTask = (id) => {
  //   const newTodoList = todoList.filter((task) => {
  //     return task.id === id ? false : true;
  //   });
  //   setTodoList(newTodoList);
  // };
  // const greenTask = (id) => {
  //   const newTodoList = todoList.filter((task) => {
  //     return task.id === id
  //       ? (task.color = "green")
  //       : (task.color = task.color);
  //   });
  //   setTodoList(newTodoList);
  // };
  // return (
  //   <div className="App">
  //     <div className="addTask">
  //       <input
  //         onChange={(event) => {
  //           setNewTask(event.target.value);
  //         }}
  //       />
  //       <button
  //         onClick={() => {
  //           const task = {
  //             id:
  //               todoList.length === 0
  //                 ? 1
  //                 : todoList[todoList.length - 1].id + 1,
  //             taskName: newTask,
  //             color: "black",
  //           };
  //           setTodoList([...todoList, task]);
  //         }}
  //       >
  //         Add Task
  //       </button>
  //     </div>
  //     <div className="list">
  //       {todoList.map((task) => {
  //         return (
  //           <Task
  //             taskName={task.taskName}
  //             id={task.id}
  //             deleteTask={deleteTask}
  //             greenTask={greenTask}
  //             color={task.color}
  //           />
  //         );
  //       })}
  //     </div>
  //   </div>
  // );
  // const [count, setCount] = useState(0);
  // return (
  //   <div className="App">
  //     <button
  //       onClick={() => {
  //         setCount(count + 1);
  //       }}
  //     >
  //       Increase
  //     </button>
  //     <button
  //       onClick={() => {
  //         setCount(count - 1);
  //       }}
  //     >
  //       Decrease
  //     </button>
  //     <button
  //       onClick={() => {
  //         setCount(0);
  //       }}
  //     >
  //       Set to zero
  //     </button>
  //     {count}
  //   </div>
  // );
  // const [colorText, setcolorText] = useState("");
  // return (
  //   <div>
  //     <h1>
  //       <button
  //         onClick={() => {
  //           setcolorText(colorText === "green" ? "red" : "green");
  //         }}
  //       >
  //         {" "}
  //         Show/Hide
  //       </button>{" "}
  //       {<h1 style={{ color: colorText }}>My Name is XD</h1>}
  //     </h1>
  //   </div>
  // );
  // const [showText, setShowText] = useState(false);
  // return (
  //   <div>
  //     <h1>
  //       <button
  //         onClick={() => {
  //           setShowText(!showText);
  //         }}
  //       >
  //         {" "}
  //         Show/Hide
  //       </button>{" "}
  //       {showText && <h1>My Name is XD</h1>}
  //     </h1>
  //   </div>
  // );
  // const [age2, setAge] = useState(1);
  // const [inputValue, setInputValue] = useState("");
  // const increaseAge = () => {
  //   setAge(age2 + 1);
  // };
  // const handleInputChange = (event) => {
  //   console.log(event.target.value);
  //   setInputValue(event.target.value);
  // };
  // return (
  //   <div>
  //     {age2} <button onClick={increaseAge}> INCREASE </button>
  //     <input type="text" onChange={handleInputChange} />
  //     {inputValue}
  //   </div>
  // );
  // const planets = [
  //   { name: "Mars", isGasPlant: false },
  //   { name: "Earth", isGasPlant: false },
  //   { name: "Jupiter", isGasPlant: true },
  //   { name: "Venus", isGasPlant: false },
  //   { name: "Neptune", isGasPlant: true },
  //   { name: "Uranus", isGasPlant: true },
  // ];
  // return (
  //   <div className="App">
  //     {planets.map((value, key) => {
  //       return value.isGasPlant && value.name;
  //     })}
  //   </div>
  // );
  // const names = ["Pedro", "Jake", "Mike", "Dustin", "Luka"];
  // return (
  //   <div>
  //     {" "}
  //     <h1>
  //       {names.map((value, key) => {
  //         return <h1 key={key}>{value}</h1>;
  //       })}
  //     </h1>
  //   </div>
  // );
  // const age = 15;
  // const isGreen = true;
  // return (
  //   <div style={{ color: isGreen ? "green" : "red" }}>
  //     {" "}
  //     {age >= 18 ? <h1>over age</h1> : <h1>under age</h1>}{" "}
  //     {isGreen && <button> This is a button</button>}
  //   </div>
  // );
  // return (
  //   <div className="App">
  //     <Job salary="1" position="senior" company="amazong" />
  //     <Job salary="2" position="limbo" company="google"></Job>
  //     <Job salary="3" position="junior" company="facebook"></Job>
  //   </div>
  // );
}

// const Job = (x) => {
//   return (
//     <div>
//       <h1>{x.salary}</h1>
//       <h1 className="name">{x.position}</h1>
//       <h1>{x.company}</h1>
//     </div>
//   );
// };

// const Planets = (x) => {
//   return (
//     <div>
//       <h1>x.name</h1>
//     </div>
//   );
// };

export default App;
