import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Rooms from './pages/Rooms.jsx'
import Dining from './pages/Dining.jsx'
import Spa from './pages/Spa.jsx'
import Gallery from './pages/Gallery.jsx'
import Contact from './pages/Contact.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="rooms" element={<Rooms />} />
        <Route path="dining" element={<Dining />} />
        <Route path="spa" element={<Spa />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}
export default App




