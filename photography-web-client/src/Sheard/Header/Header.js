import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Header = () => {

  let { user, logOut } = useContext(AuthContext)

  let handleLogOut = () => {
    logOut()
      .then(res => { })
      .catch(e => console.error(e))
  }

  return (
    <nav className="navbar navbar-expand-lg bg-black p-0 p-lg-3">
      <div className="container-fluid">
        <img src={logo} alt="Logo" width="" height="" className="d-inline-block align-text-top me-0 me-lg-5 img-fluid w-10" />
        <button className="navbar-toggler bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon bg-info"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-5">

            <li className="nav-item">
              <Link className='nav-link text-light fw-bold' to='/'>Home</Link>
            </li>

            <li className="nav-item">
              <Link className='nav-link text-light fw-bold' to='/services'>Services</Link>
            </li>

            <li className="nav-item">
              <Link to='/blog' className='nav-link text-light fw-bold'>Blogs</Link>
            </li>


            {
              user?.email ?

                <>

                  <li>
                    <Link to='/addService' className='nav-link text-light fw-bold'>Add Service</Link>
                  </li>

                  <li>
                    <Link to='/myreview' className='nav-link text-light fw-bold' >My Review</Link>
                  </li>

                  <li>
                    <button onClick={handleLogOut} className='btn btn-warning text-light fw-bold'>Log Out</button>
                  </li>

                </>

                :
               <>
                 <li>
                  <Link to='/login' className='nav-link text-light fw-bold'>Sign In</Link>
                </li>

                <li>
                   <Link className='nav-link text-light fw-bold' to='/signUp'>Sign UP</Link>
                </li>
               </>

            }

            <li>

              <p className='text-light fw-bold ms-3'> {user?.displayName}</p>

            </li>


          </ul>

        </div>
      </div>
    </nav>
  );
};

export default Header;