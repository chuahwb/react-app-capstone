import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CustomLink from './CustomLink';
import { useLocation } from 'react-router-dom';

const ConfirmedBooking = () => {

    const location = useLocation();
    let status = location.state.status;

    let display;
    display = status ?
        <div className='confirmation-content'>
            <h1 style={{ color: "#009944" }}>Booking Confirmed</h1>
            <div className="success-icon">
                <CheckCircleOutlineIcon sx={{ fontSize: 130, color: "#009944" }} />
            </div>
        </div>
        :
        <div className='confirmation-content'>
            <h1 style={{ color: "#cf000f" }}>Booking Failed</h1>
            <div className="failed-icon">
                <ErrorOutlineIcon sx={{ fontSize: 130, color: "#cf000f" }} />
            </div>
        </div>
    return (
        <div className='section-confirmedbooking'>
            <div className='wrapper'>
                <div className='container-confirmedbooking'>
                    <div className='confirmation-heading'>
                        <CustomLink to='/reservations'><ArrowBackIcon fontSize='large' /></CustomLink>
                    </div>
                    {display}
                </div>
            </div>
        </div>
    )
}

export default ConfirmedBooking