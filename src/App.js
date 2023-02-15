import './App.css';
import { Route, Routes } from 'react-router-dom'
import { lazy } from 'react'
import Navbar from './components/Navbar';

const HomePage = lazy(() => import("./pages/HomePage"))
const ReservationsPage = lazy(() => import("./pages/ReservationsPage"))
const OrderPage = lazy(() => import("./pages/OrderPage"))

function App() {
  return (
    <>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/reservations' element={<ReservationsPage />} />
            <Route path='/order-online' element={<OrderPage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
