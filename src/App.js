import './App.css';
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
      <main>
        <Routes>
          <Route></Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
