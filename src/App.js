import logo from './logo.svg'
import './App.css'
import Layout from './components/Layout/Layout'
import { Route, Router, Routes } from 'react-router'
import Blogs from './Pages/Blogs'
import Signupform from './components/Signup/Signupform'

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path='/' element={<Signupform />} />
        <Route exact path='/signup' element={<Signupform />} />
      </Routes>
    </Layout>
  )
}

export default App
