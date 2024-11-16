import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Home } from './pages/Home'
import { Cadastro } from "./pages/Cadastro";
import { Login } from "./pages/Login";
import { Feed } from "./pages/feed";


function App() {
  return (
    <Router>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/cadastrar" element={<Cadastro />} />
     </Routes >
    </Router>
  );
}

export default App;