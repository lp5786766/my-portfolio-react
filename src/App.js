import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Container from './components/Container'
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div className="App">
       
      <Container>
      <Nav />
      <AboutMe />
      </Container>
    
     
    </div>
  );
}

export default App;
