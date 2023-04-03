import logo from './logo.svg'
import './App.css'
import Layout from './components/Layout/Layout'
import { Route, Router, Routes } from 'react-router'
import Blogs from './components/Blogs/Blogs'
import Signupform from './components/Signup/Signupform'
import Details from './components/Details/Details'

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path='/' element={<Blogs />} />
        <Route exact path='/signup' element={<Signupform />} />
        <Route exact path='//Detail/:id' element={<Details />} />
      </Routes>
    </Layout>
  )
}

export default App
