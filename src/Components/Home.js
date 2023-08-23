import React from 'react';
import { useSelector ,useDispatch} from 'react-redux'; 
import { selectUser } from '../features/userSlice';
import { Link, useNavigate } from 'react-router-dom';



function Home() {
  const user=useSelector(selectUser);
  let navigate=useNavigate();
 
  const signin=()=>{
    let path=`signIn`;
    navigate(path);
  }

  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">Navbar</a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page">Home</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={{textDecoration:"none"}} to="/dashboard">Dashboard</Link>
            </li>
          </ul>
            {user ?
              <button className="btn btn-outline-success" type="submit" >Sign Out</button>
            :
              <button className="btn btn-outline-success" type="submit"  onClick={signin}>Sign In</button>
            }    
            </div>
          </div>
        </nav>


        {/* Home title */}
        <div>
          <h1>HOME</h1>
        </div>
    </div>
  )
};

export default Home;