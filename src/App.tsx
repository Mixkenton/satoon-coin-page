
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Route,
  Routes,


} from "react-router-dom";

import Buycoin from './pages/buycoin';
import Login from './pages/login';
import Register from "./pages/regiter";


function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path='/buycoin' element={<Buycoin />}/>
        <Route path='/' element={<Login />}/>
        <Route path='/register' element={<Register/>}/>
      </Routes >
    </BrowserRouter>
    
  );
}

export default App;
