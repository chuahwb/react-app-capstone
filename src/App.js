import './App.css';
import { Route, Routes } from 'react-router-dom'
import { lazy } from 'react'
import Navbar from './components/Navbar';
import { TimesProvider } from './context/timesContext';

const HomePage = lazy(() => import("./pages/HomePage"))
const ReservationsPage = lazy(() => import("./pages/ReservationsPage"))
const OrderPage = lazy(() => import("./pages/OrderPage"))
const ConfirmedBookingPage = lazy(() => import("./pages/ConfirmedBookingPage"))

function App() {
  return (
    <>
      <div className='container'>
        <TimesProvider>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/reservations' element={<ReservationsPage />} />
            <Route path='/order-online' element={<OrderPage />} />
            <Route path='/confirmation' element={<ConfirmedBookingPage />} />
          </Route>
        </Routes>
        </TimesProvider>
      </div>
    </>
  );
}

export default App;
