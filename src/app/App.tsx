import React, {Suspense} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import {TEXT} from '../common/texts'
import {Page} from '../common/paths'

const Home = React.lazy(() => import("../features/home/Home"))
const Character = React.lazy(() => import("../features/character/Character"))

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={TEXT.LOADING}>
          <Routes>
            <Route path={Page.HOME} element={<Home/>}/>
            <Route path={Page.CHARACTER} element={<Character/>}/>
            <Route path={Page.DEFAULT} element={<Home/>}/>
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
