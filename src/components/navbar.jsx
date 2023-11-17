import { Link, useNavigate } from 'react-router-dom';
import { logo } from '../constants';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../helpers/persistance-storage';
import { logoutUser } from '../slice/auth';

const Navbar = () => {
    const { loggenIn, user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = () => {
        dispatch(logoutUser());
        removeItem('token');
        navigate('/login');
    };

    return (
        <div className='d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom container pt-3'>
            <Link to={'/'}>
                <img src={logo} alt='' />
            </Link>
            <nav className='d-inline-flex mt-2 mt-md-0 ms-md-auto'>
                {loggenIn ? (
                    <>
                        <p className='me-3 py-2 m-0 link-body-emphasis text-decoration-none'>
                            {' '}
                            {user.username}{' '}
                        </p>
                        <button
                            className='btn btn-outline-danger'
                            onClick={logoutHandler}
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link
                            to={'/login'}
                            className='me-3 py-2 link-body-emphasis text-decoration-none'
                        >
                            Login
                        </Link>
                        <Link
                            to={'/register'}
                            className='me-3 py-2 link-body-emphasis text-decoration-none'
                        >
                            Register
                        </Link>
                    </>
                )}
            </nav>
        </div>
    );
};

export default Navbar;
