import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import GameSection from './components/GameSection';
import Header from './components/Header';
import Game from './components/Game'
import Modal from './components/Footer';
import Footer from './components/Footer';

const App = () => {

  const [myChoice, setMyChoice] = useState('')
  const [score, setScore] = useState(0)

  return (<>
    <div className="App">
      <Header score={score} />
      <Routes>
        <Route path='/' element={<GameSection setMyChoice={setMyChoice} />} />
        <Route path='/game' element={<Game myChoice={myChoice} score={score} setScore={setScore} />} />
      </Routes>

    </div>
    <Footer />
  </>
  );
}

export default App;
