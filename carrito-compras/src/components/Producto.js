import { Component } from "react";

const styles = {
    productos: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
}
class Producto extends Component {
    render(){
        const { producto } = this.props;
        return(
            <div style={styles.productos}>
                <img alt={producto.name} src = {producto.img} />
                <h3>{producto.name}</h3>
                <p>{producto.price}</p>
            </div>
        );
    }
}
export default Producto;