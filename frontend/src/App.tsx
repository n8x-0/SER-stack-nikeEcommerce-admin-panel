import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Admin from './pages/admin'
import Auth from './pages/auth'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/admin' element={<Admin />} />
          <Route path='/' element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
