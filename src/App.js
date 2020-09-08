import React from 'react';
import './App.css';

import Header from './components/Header';
import Container from './components/Container';
import AboutMe from './components/AboutMe';
import MyWorks from './components/MyWorks';

function App() {
  return (
    <div className='App'>
      <Container>
        <Header />
        <AboutMe />
        <MyWorks />
      </Container>
    </div>
  );
}

export default App;
