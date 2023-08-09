import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './Routes';
import NavBar from "./components/NavBar";
import './App.css'

function App() {
 
  return (
    <>
      <Router>
        <NavBar/>
        <AppRoutes/>
      </Router>
    </>
  )
}

export default App
