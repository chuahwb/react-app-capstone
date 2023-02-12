import './App.css';
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/reservations' element={<BookingPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
