import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from "react";
import Navbar from './Navbar'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Details from './Details'
const Student = lazy(() => import('./Student'))
const RoutesCompo = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/student' element={
          <Suspense fallback="Component is loading">
            <Student />
          </Suspense>} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesCompo