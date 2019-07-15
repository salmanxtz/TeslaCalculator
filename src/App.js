import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import TeslaBattery from './containers/TeslaBattery.js'
import TeslaNotice from './components/TeslaNotice/TeslaNotice.js'
import TeslaCar from './components/TeslaCar/TeslaCar.js'
class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <TeslaBattery/>
        <TeslaNotice/>


      </div>
    );
  }
}
export default App;
