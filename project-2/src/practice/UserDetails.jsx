import { useParams, Link } from 'react-router-dom';

function UserDetails() {
    const { id } = useParams(); // extract the user ID from the URL dynamically

    return (
        <div>
            <h2>User Details</h2>
            <p>Showing details for user with ID: {id}</p>

            <Link to="/users" style={{ color: 'blue' }}>← Back to Users</Link>
        </div>
    );
}

export default UserDetails;