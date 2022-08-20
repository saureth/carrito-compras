import { useParams, Link, Routes, Route, Outlet, NavLink as NavLinkRR, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { useAuth, AuthProvider } from './useAuth';

const Home = () => <h1>Home</h1>

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();
  const handleClick = () => {
    login();
    const redirector = state?.location?.pathname ?? '/';
    navigate(redirector);
  }
  return (
    <button onClick={handleClick} >Login</button>
  );
}

const Tacos = () => {
  const { taco } = useParams();
  return (
    <div>
      <h1>Tacos</h1>
      {taco}
      <Link to='details'>Ver detalles</Link>
      <Outlet />
    </div>
  );
}

const TacoDetails = () => {
  const {taco} = useParams();
  return (
    <h1>Taco Details de: {taco} </h1>
  );
}

const SearchPage = () =>{ 
  const tacos = [
    'cochinita',
    'chili',
    'carnita',
    'quesadilla'
  ];
  return (
    <div>
      <h1>Search page</h1>
      <ul>      
        {tacos.map(taco=>(
          <li key={taco}><Link to={`/tacos/${taco}`}>{taco}</Link></li>
        ))}
      </ul>
    </div>
  );  
}

const NavLink = ({to, children, ...props}) => {
  return (
    <NavLinkRR
    { ...props }
    className={({isActive})=> {
      return isActive ? 'is-active' : undefined
    }}
    to={to}> 
      {children} 
    </NavLinkRR>
  );
}

const ProtectedRoute = ({children}) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  if(!isAuthenticated){
    return <Navigate to='/login' state={{location}} />
  }
  return children;
}

function App() {
  return(
    <div className='App'>
      <header>
        <h1>APP</h1>
        <nav>
          <ul>
            <li> <NavLink to='/'> Home </NavLink> </li>
            <li> <NavLink to='/search-page'> Search page</NavLink> </li>
          </ul>
        </nav>
      </header>
      <AuthProvider>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/search-page' element={<ProtectedRoute><SearchPage /> </ProtectedRoute>} />
            <Route path='/tacos/:taco' element={<ProtectedRoute><Tacos /></ProtectedRoute>}>
              <Route path='details' element = {<TacoDetails />} />
            </Route>
            <Route path='/login' element = {<Login />} />
            <Route path='*' element={<h1>Not Found</h1>} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
