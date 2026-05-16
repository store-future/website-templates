// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import {BrowserRouter, Routes, Route } from 'react-router-dom' ;
import Home from './pages/home/Home'
import About from './pages/about/About'
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Test from "./components/Test";

// import bikeImage from "./assets/images/download.png";



function App() {
  return (
    // <h1>Hublimoto</h1>
    // <img src={bikeImage} className="logo" alt="Vite logo" />
  
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Navbar />
        <Routes>
          <Route path="/test" element={<Test />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

        </Routes>
      <Footer />
    </BrowserRouter>
  )
}





export default App















// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


