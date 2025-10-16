import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div style={{ textAlign: 'center' }}>
            <h2>404 - Page Not Found</h2>
            <p>Oops! The page you are looking for doesn't exist.</p>
            <Link to='/' style={linkStyle}>Go to Home</Link>
        </div>
    );
}

const linkStyle = {
    color: 'blue',
    textDecoration: 'none'
}

export default NotFound;