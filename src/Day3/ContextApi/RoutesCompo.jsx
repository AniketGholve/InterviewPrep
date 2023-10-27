import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Details from './Details'
import Student from './Student'
import Store from './Store';
const RoutesCompo = () => {
  let data = [
    { id: "1", name: "Aniket" },
    { id: "2", name: "Shubham" },
    { id: "3", name: "Rohan" },
    { id: "4", name: "Dhanu" }
  ];
  return (
    <BrowserRouter>
      <Store.Provider value={{data}}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/student' element={<Student />} />
          <Route path='/details/:id' element={<Details />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Store.Provider>
    </BrowserRouter>
  )
}

export default RoutesCompo