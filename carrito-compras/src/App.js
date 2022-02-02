import {Component} from 'react';
import Productos from './components/Productos';
import Layout from './components/Layout';


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
      <div>
        <Layout>
          <Productos
            agregarAlCarro={()=>console.log("Agregando al carrito")}
            productos = {this.state.productos}
          />
        </Layout>
      </div>
    );
  }
}

export default App;
