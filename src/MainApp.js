import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationBar from './components/Navbar/NavigationBar'
import Footer from './components/Footer/Footer' 
import GreetingBanner from './components/Benvenuto/GreetingBanner'
import BookGallery from './components/Books/BookGallery'
import { Container } from 'react-bootstrap'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageNotFound from './components/Nontrovato/PageNotFound' 
import DetailedBookView from './components/DetailBook/DetailedBookView' 
import './styles.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <BrowserRouter>
      <NavigationBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Container>
        <GreetingBanner />
        <Routes>
          <Route path="/" element={<BookGallery searchQuery={searchQuery} />} />
          <Route path="/details/:asin" element={<DetailedBookView />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  )
}

export default App
