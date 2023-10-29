import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import Navbar from './components/Navbar'
import Login from './components/Login'
import Upload from './components/Upload.jsx'

{/* <Navbar/> 
*/}

// import './index.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
        <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/login' element={<Login />} />
        <Route path='/upload' element={<Upload />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
