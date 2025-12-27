import './Header.css';
import { Link } from 'react-router-dom';

export default function Header(){
    return (
        <div className="header">
            <h2><Link to='/' className='header-text'>ReactApp</Link></h2>
            <nav>
                <ul>
                    <li>
                        <Link className='nav-link' to="/">Home</Link>
                    </li>
                    <li>
                        <Link className='nav-link' to="/users">Users</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}