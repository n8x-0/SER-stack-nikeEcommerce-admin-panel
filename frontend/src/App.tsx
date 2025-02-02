import { Route, Routes } from 'react-router-dom'
import Admin from './pages/admin'
import Auth from './pages/auth'

function App() {
  
  return (
    <div>
      <Routes>
        <Route path='/' element={<Admin/>}/>
        <Route path='/auth' element={<Auth/>}/>
      </Routes>
    </div>
  )
}

export default App
