import * as React from 'react';
import './App.css';
import Header from './components/organisms/Header';
import FormField from './components/organisms/FormField';
import './styles/Accordion.scss'
import './styles/Card.scss'

function App() {
  return (
    <div className="App">
      <header><Header /></header>
      <div id='container'>
        <FormField />
      </div>
    </div>
  );
}

export default App;
