const impura = () => {
    
}

const MiComponente = ({props}) => {
    const {miProp} = props;
    return (
        <div>
            Nombre: {miProp}
        </div>
    );
}

const App = () => {
    return (
        <MiComponente miProp="Chanchito Feliz"/>
    );
}

export default App;
