import { Routes, Route, Link } from 'react-router-dom';

const Home = () => {
    return (
        <h1>Inicio</h1>
    );
}

const Portafolio = () => {
    return (
        <div>
            <h1>Portafolio</h1>
            <ul>
                <li>
                    <Link to={"/portafolio/proyecto-1"}>Proyecto 1</Link>
                </li>
                <li>
                    <Link to={"/portafolio/proyecto-2"}>Proyecto 2</Link>
                </li>
            </ul>
            <div>
                <Routes>
                    <Route path={"/portafolio/proyecto-1"} element = {<Proyecto1 />}> </Route>  
                    <Route path={"/portafolio/proyecto-2"} element ={<Proyecto2 />}> </Route>  
                </Routes>
            </div>
        </div>        
    );
}

const Proyecto1 = () => {
    <h2>Proyecto 1</h2>
}
const Proyecto2 = () => {
    <h2>Proyecto 2</h2>
}

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Inicio</Link>
          </li>
          <li>
            <Link to={"/portafolio"}>Portafolio</Link>
          </li>
        </ul>
      </nav>
      <section>
        <Routes>
          <Route path="/portafolio/*" element={<Portafolio />}> </Route>  
          <Route exact path="/" element={<Home />}> </Route>
        </Routes>        
      </section>
    </div>
  );
}

export default App;
