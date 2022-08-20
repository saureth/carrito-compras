import { Link ,useRoutes } from "react-router-dom";

const routes = [
    {
        path: '/',
        element: {
            <div>
                <h1>Home</h1>
                <Link to='/search'> Search </Link>
            </div>       
        }
    },
    {
        path: '/search',
        element: {
            <div>
                <h1>Home</h1>
                <Link to='/search'> Search </Link>
            </div>    
        }  
    }
];
export default function App(){
    const element = useRoutes(routes);
    return (
        <main>
            <header>
                <h1>Prueba</h1>
            </header>
            {element}
        </main>
    );
}