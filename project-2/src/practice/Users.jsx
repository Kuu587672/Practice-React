import { Link } from 'react-router-dom';

function Users() {
    const users = [
        { id: 1, name: "Ranadeb Roy" },
        { id: 2, name: "Kaushik Sarkar" },
        { id: 3, name: "Subhankar Singha" }
    ];

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id} style={{ listStyle: 'none' }}>
                        <Link to={`/users/${user.id}`} style={{ textDecoration: 'none' }}>
                            {user.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Users;