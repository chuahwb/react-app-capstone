import './App.css';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/reservations' element={<BookingPage />} />
      </Routes>
    </div>
  );
}

export default App;
