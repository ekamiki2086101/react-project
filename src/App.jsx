import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
// π½ θΏ½ε οΌApp.jsx εγ§δ½Ώη¨γγγγγ«γ³γ³γγΌγγ³γγεΌγ³εΊγοΌ
import { ActionButton } from "./components/ActionButton";

// π½ Link γθΏ½ε 
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Omikuji } from "./pages/Omikuji";
import { Janken } from "./pages/Janken";


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }

const App = () => {
  return (
    <BrowserRouter>
      <h1>react app</h1>
      {/* π½ θΏ½ε  */}
      <ul>
        <li>
          <Link to="/omikuji">γγΏγγ</Link>
        </li>
        <li>
          <Link to="/janken">γγγγγ</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/omikuji" element={<Omikuji />} />
        <Route path="/janken" element={<Janken />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App
