import { Link, Outlet } from 'react-router-dom';

function Dashboard() {
    return (
        <div>
            <h2>Dashboard</h2>

            {/* Dashboard navigation links */}
            <nav style={{ marginBottom: '20px' }}>
                <Link to='profile' style={linkStyle} >Profile</Link>
                <Link to='settings' style={linkStyle} >Settings</Link>
            </nav>

            {/* The child route will appear here */}
            <Outlet />
        </div>
    );
}

const linkStyle = {
    margin: "0 10px",
    textDecoration: "none",
    color: "purple"
}

export default Dashboard;