import logo from './logo.svg';
import './App.css';
import {Component} from 'react';

class App extends Component {
  state={
    productos:[
      {
        name:'Tomate', price: 1500, img: '/productos/tomate.jpg'
      },
      {
        name:'Arberjas', price: 2500, img: '/productos/arberjas.jpg'
      },
      {
        name:'Lechuga', price: 500, img: '/productos/lechuga.jpg'
      }
    ]
  }
  render(){
    return(
      <div><p>Hola mundo</p></div>
    );
  }
}

export default App;
