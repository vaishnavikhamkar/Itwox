import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
// import actionCreators from "../state/index";
import axios from "axios";
import "../css/dashboard.css";
import { logout } from '../features/userSlice';
import { selectUser } from '../features/userSlice';
import { Link, Navigate } from 'react-router-dom';

const Dashboard=()=>{
    const dispatch=useDispatch();
    const user=useSelector(selectUser);
    const itemPerPage=10;
    // let comcount=0;
    const [post,handlePost]=useState([]);
    const [comment,handleComments]=useState([]);
    const [currentPage, setCurrentPage]=useState(0);
    const rows=post.slice(currentPage*itemPerPage,(currentPage+1)*itemPerPage);


    const handlePageChange=(pageNumber)=>{
      setCurrentPage(pageNumber);
    };

   const numberOfPage=Math.ceil(post.length/itemPerPage);
   const pageIndex=Array.from({length:numberOfPage},(_,idx)=>idx+1)

   
   let result=async()=>{
    await axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(function(response)
    {
      handlePost(response.data);
      console.log("post:",post);
      console.log(response.data);
      console.log(response.data.id);
    });
  }

  let commentresult=async()=>{
    await axios.get("https://jsonplaceholder.typicode.com/comments")
    .then(function(response)
    {
      handleComments(response.data);
      console.log("post:",post);
      console.log(response.data);
      console.log(response.data.id);
    });
  }
   
    useEffect(()=>{
      result();
      commentresult();
    },[]);

    const handleLogout=(e)=>{
      e.preventDefault();

      dispatch(logout());

    }

if(user){
      return (
          <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <Link to="/" style={{textDecoration:"none"}}><div className="nav-link" aria-current="page" >Home</div></Link>
              </li>
              <li className="nav-item">
                <a className="nav-link active">Dashboard</a>
              </li>
            </ul>
              <button className="btn btn-outline-success" type="submit" onClick={(e)=>handleLogout(e)}>Sign Out</button>
          </div>
        </div>
      </nav>

      {/* Dashboard */}
      <div>
        <h1>Dashboard</h1>
      </div>



        <div className='posts'>
        {rows.map((row)=>{
          let sum=0;
            {/* posts */}
            {/* {post.map(posts=>{ */}
              return(
                <div>
                    <div className="card" key={row.id} style={{width:"18rem"}}>
                        <div className="card-body">
                        <h5 className="card-title" >{row.id}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{row.title}</h6>
                        <p className="card-text">{row.body}</p>
                        </div>
                        {/* {comcount=comment.filter(countcomments(comment.postId,row.id))} */}
                        {comment.map((item)=>{
                          let count=0;
                          if(item.postId===row.id){
                            count++;
                            sum=sum+count;
                          }
                          else{
                            return;
                          }
                        })}
                        <div>Comments({sum})</div>
                    </div>    
                </div>
              );
            {/* // }) */}
            {/* // } */}

      })}
      </div>




        <div>
          <button disabled={currentPage<1} onClick={()=>handlePageChange(currentPage-1)}>&lt;</button>
          {pageIndex.map((page)=>{
            return(
            <button key={page} onClick={()=>handlePageChange(page-1)}  className={page===currentPage+1?"pageactive":""}>{page}</button>
          )})}
          <button disabled={currentPage>=numberOfPage-1} onClick={()=>handlePageChange(currentPage+1)}>&gt;</button>
        </div>

          </div> 
        )
  }
  else{
    console.log("User not logged in");
    return <Navigate to="/"/>
  }
}

export default Dashboard;