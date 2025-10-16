import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    function goToUsers() {
        navigate('./users');
    }

    return (
        <div>
            <h2>Welcome to the Home Page</h2>
            <button onClick={goToUsers}>View Users</button>
        </div>
    );
}

export default Home;