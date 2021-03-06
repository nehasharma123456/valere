import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes

} from "react-router-dom";
import Home from './Home';
import Blog from './Blog';
import OurWork from './OurWork';
import ToggleSidebar from './ToggleSidebar';

export default function Header() {
  return (
    <Router>
    <ToggleSidebar/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/blog' element={<Blog/>}/>
      <Route exact path='/ourwork' element={<OurWork/>}/>
    </Routes>
    </Router>
  )
}
