import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  let pageSize = 15;
  const [progress, setProgress] = useState(0)
  // state = {
  //   progress:0
  // }
  // setProgress = (progress)=>{
  //   this.setState({progress:progress})
  // }

  const [category, setCategory] = useState('general')
  

  let apiKey = process.env.REACT_APP_NEWS_API_KEY;
  
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar color='#f11946' height={3} progress={progress} />
          <Routes>
            <Route exact path='/' element={<News setProgress = {setProgress} apiKey={apiKey} key="home" pageSize={pageSize} country='in' category='general' />} />
            <Route exact path='/general' element={<News setProgress = {setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country='in' category='general' />} />
            <Route exact path='/business' element={<News setProgress = {setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country='in' category='business' />} />
            <Route exact path='/entertainment' element={<News setProgress = {setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country='in' category='entertainment' />} />
            <Route exact path='/health' element={<News setProgress = {setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country='in' category='health' />} />
            <Route exact path='/science' element={<News setProgress = {setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country='in' category='science' />} />
            <Route exact path='/sports' element={<News setProgress = {setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country='in' category='sports' />} />
            <Route exact path='/technology' element={<News setProgress = {setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country='in' category='technology' />} />
          </Routes>
          {/* <News setProgress = {setProgress} apiKey={apiKey} pageSize = {pageSize} country='in' category='sports'/> */}
        </Router>
      </div>
    )
  
}

export default App