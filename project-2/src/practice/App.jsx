import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Users from './Users';
import UserDetails from './UserDetails';
import Dashboard from './Dashboard';
import Profile from './Profile';
import Settings from './Settings';
import NotFound from './NotFound';

function App() {
  return (
    <div style={{textAlign: 'center'}}>
      <h1>React Router Practice</h1>

      {/* Navigation Links */}
      <nav style={{marginBottom: '20px'}}>
        <Link to='/' style={linkStyle}>Home</Link>
        <Link to='/about' style={linkStyle}>About</Link>
        <Link to='/contact' style={linkStyle}>Contact</Link>
        <Link to='./Users' style={linkStyle}>Users</Link>
        <Link to='./Dashboard' style={linkStyle}>Dashboard</Link>
      </nav>

      {/* Routes */}
      <Routes>

        {/* Simple Routes */}
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/users' element={<Users />} />
        <Route path='/users/:id' element={<UserDetails />} />

        {/* Nested Routes for Dashboard */}
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='profile' element={<Profile />} />  {/* Relative path used here */}
          <Route path='settings' element={<Settings />} />
        </Route>

        {/* 404 FallBack */}
        <Route path='*' element={<NotFound />} /> {/* This must be the last route */}
      </Routes>
    </div>
  );
}

const linkStyle = {
  margin: "0 10px",
  textDecoration: "none",
  color: "blue"
};

export default App;