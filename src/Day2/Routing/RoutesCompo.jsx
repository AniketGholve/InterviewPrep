import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Student from './Student'
import Contact from './Contact'
import About from './About'
import Details from './Details'

const RoutesCompo = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/student' element={<Student />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesCompo