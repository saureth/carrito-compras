import { Component } from "react";
import Producto from './Producto';

class Productos extends Component {

    render(){
        const { productos, agregarAlCarro } = this.props;
        return (
            <div>
                {productos.map(prod=>
                    <Producto 
                        agregarAlCarro={agregarAlCarro}
                        key={prod.name}
                        producto={prod}
                    />
                )}
            </div>
        );
    }

}
export default Productos;