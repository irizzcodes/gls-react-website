import { useContext } from 'react'
import Home from './pages/Home'
import NavBar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import { ThemeContext } from './contexts/ThemeContext'

function App() {
  const { theme, toggleTheme} = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <NavBar toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home /> } />
      </Routes>
    </div>
  )
}

export default App
