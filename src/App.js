import './App.css';
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage';
import ReservationsPage from './pages/ReservationsPage';
import OrderPage from './pages/OrderPage';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/reservations' element={<ReservationsPage />} />
          <Route path='/order-online' element={<OrderPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
