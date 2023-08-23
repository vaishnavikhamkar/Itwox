import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import SignIn from "./Components/SignIn";
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';



function App() {

  return (
    <div className="App">
       <Router>
      <div>
        <Routes>
          <Route path="/dashboard" Component={Dashboard}></Route>
          <Route path="/signIn" Component={SignIn}></Route>
          <Route path="/" Component={Home}></Route>
           {/* <Route path="/signIn" element={user ? <Navigate to="/dashboard"/>: <SignIn/>}/> */}
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
