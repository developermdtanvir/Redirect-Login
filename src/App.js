import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home/Home';
import Login from './components/Login/Login';
import { Navbar } from './components/Navbar/Navbar';
import { PrivetRoute } from './components/PrivetRoute/PrivetRoute';
import { Profile } from './components/Profile/Profile';
import { AuthProvider } from './components/useAuth/auth';
function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<PrivetRoute><Profile /></PrivetRoute>} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
