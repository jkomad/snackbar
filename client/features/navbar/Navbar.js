import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../app/store';

const Navbar = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const userId = useSelector((state) => state.auth.me.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div>
      <nav>
        {isLoggedIn ? (
          <div className='Navbar'>
            <Link to="/products"><h1>Snackbar</h1></Link>
            {/* The navbar will show these links after you log in */}
            <div>
              <Link to="/home">Home</Link>
              <Link to={`users/${userId}`}>My Account</Link>
            <button type="button" onClick={logoutAndRedirectHome}>
              Logout
            </button>
            </div>
          </div>
        ) : (
          <div className='Navbar'>
            <Link to="/products"><h1>Snackbar</h1></Link>
            {/* The navbar will show these links before you log in */}
            <div>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
            </div>
          </div>
        )}
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
