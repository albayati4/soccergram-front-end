import './App.css';
import Nav from './components/Nav'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Landing from './pages/Landing'
import FriendsList from './pages/FriendsList'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router'
import { CheckSession } from './services/Auth'

const App = () => {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const checkToken = async () => {
    const user = await CheckSession();
    setUser(user);
    toggleAuthenticated(true);
  }

  const handleLogOut = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">
      <Nav
        authenticated={authenticated}
        user={user}
        handleLogOut={handleLogOut}s
      />
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile/:userId" element={<Profile />} />
          <Route path="/profile/:userId/friendsList" element={<FriendsList />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
