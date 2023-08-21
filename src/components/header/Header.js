import { useSelector, useDispatch } from 'react-redux';
import { LogActions } from '../Commons/store/Store';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLoggedIn = useSelector((state) => state.logState.isLoggedIn)
  
    const logoutHandler = () => {
      dispatch(LogActions.logout());
      navigate('/');
    };
  return (
    <div className='header-container'>
      <h2>
        <Link className='nav-btn' to='/home'>
        IOT DASHBOARD
        </Link>
      </h2>
      {isLoggedIn && (
        <ul className='navbar mb-2'>
          <li className='nav-item'>
            <Link className='nav-btn' to='/home'>DASHBOARD</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-btn' to='/onboard-device'>ADD DEVICE</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-btn' to='/device-list'>DEVICE-LIST</Link>
          </li>
          <li className='nav-item'>
            <button className='nav-btn logout-btn' onClick={logoutHandler}>LOGOUT</button>
          </li>
        </ul>
      )}
    </div>
  )
}

export default Header;