import { Component } from "react";
import Producto from './Producto';

const styles = {
    productos: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
}

class Productos extends Component {

    render(){
        const { productos, agregarAlCarro } = this.props;
        return (
            <div style={styles.productos}>
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