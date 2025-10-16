import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav style={{ background: '#222', padding: '10px' }}>
            <Link to='/' style={linkStyle}>Home</Link>
            <Link to='/about' style={linkStyle}>About</Link>
            <Link to='/projects' style={linkStyle}>Projects</Link>
            <Link to='/contact' style={linkStyle}>Contact</Link>
        </nav>
    );
}

const linkStyle = {
    color: 'white',
    margin: '10px'
};

export default Navbar;