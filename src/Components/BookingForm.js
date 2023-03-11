import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { ACTION } from './ReservationSection'

const BookingForm = ({ availableTimes, dispatch }) => {

    const minDate = new Date().toISOString().split("T")[0];

    const phoneNoRegex = /^\(?([0-9]{3})\)?[- ]?([0-9]{7})$/;

    const formik = useFormik({
        initialValues: {
            fname: "",
            lname: "",
            date: minDate,
            time: "",
            people: 0,
            email: "",
            phone: "",
            comment: "",
        },
        onSubmit: (values) => {
            console.log(formik.values);
            dispatch({ type: ACTION.RESERVE, payload: formik.values });
            formik.resetForm();
        },
        validationSchema: Yup.object({
            fname: Yup.string().required("Required"),
            lname: Yup.string().required("Required"),
            date: Yup.date().required("Required").min(minDate),
            time: Yup.string().required("Required").min(1, "Required"),
            people: Yup.number().required("Required").min(1, "Required"),
            email: Yup.string().email("Invalid email address").required("Required"),
            phone: Yup.string().matches(phoneNoRegex, "Phone number is not valid").required("Required"),
        })
    });

    useEffect(() => {
        dispatch({ type: ACTION.DATE_CHANGE, payload: formik.values });
    }, [formik.values.date])


    return (
        <form className='reservation-form' onSubmit={formik.handleSubmit}>
            <fieldset className='reservation-fieldset'>
                <div className='field-row'>
                    <div className='field'>
                        <label htmlFor='date'>Choose Date<sup>*</sup></label>
                        <input type='date' name='date' id='date' min={minDate}
                            {...formik.getFieldProps("date")}

                            style={formik.touched.date && formik.errors.date ? { borderColor: "red" } : {}} />
                        <div className='form-error-message'>{formik.touched.date && formik.errors.date}</div>
                    </div>
                    <div className='field'>
                        <label htmlFor='time'>Choose Time<sup>*</sup></label>
                        <select name='time' id='time' required
                            {...formik.getFieldProps("time")}
                            style={formik.touched.time && formik.errors.time ? { borderColor: "red" } : {}} >
                            <option value="" disabled hidden>Select</option>
                            {
                                availableTimes.map((dates) => {
                                    if (dates.date === formik.values.date) {
                                        return (
                                            dates.time.map((times, index) => (
                                                <option key={index} value={times}>{times}</option>
                                            ))
                                        )
                                    }
                                })
                            }
                        </select>
                        <div className='form-error-message'>{formik.touched.time && formik.errors.time}</div>
                    </div>
                </div>
                <div className='field-row'>
                    <div className='field'>
                        <label htmlFor='people'>Number of Guests<sup>*</sup></label>
                        <select name='people' id='people' required
                            {...formik.getFieldProps("people")}
                            style={formik.touched.people && formik.errors.people ? { borderColor: "red" } : {}} >
                            <option value={0} disabled hidden>Select</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                            <option value={9}>9</option>
                            <option value={10}>10</option>
                        </select>
                        <div className='form-error-message'>{formik.touched.people && formik.errors.people}</div>
                    </div>
                </div>
                <div className='field-row'>
                    <div className='field'>
                        <label htmlFor='fname' >First Name<sup>*</sup></label>
                        <input name='fname' id='fname'
                            {...formik.getFieldProps("fname")}
                            style={formik.touched.fname && formik.errors.fname ? { borderColor: "red" } : {}} />
                        <div className='form-error-message'>{formik.touched.fname && formik.errors.fname}</div>
                    </div>
                    <div className='field'>
                        <label htmlFor='lname'>Last Name<sup>*</sup></label>
                        <input name='lname' id='lname'
                            {...formik.getFieldProps("lname")}
                            style={formik.touched.lname && formik.errors.lname ? { borderColor: "red" } : {}} />
                        <div className='form-error-message'>{formik.touched.lname && formik.errors.lname}</div>
                    </div>
                </div>
                <div className='field-row'>
                    <div className='field'>
                        <label htmlFor='email'>Email<sup>*</sup></label>
                        <input type='email' name='email' id='email'
                            {...formik.getFieldProps("email")}
                            style={formik.touched.email && formik.errors.email ? { borderColor: "red" } : {}} />
                        <div className='form-error-message'>{formik.touched.email && formik.errors.email}</div>
                    </div>
                    <div className='field'>
                        <label htmlFor='phone'>Phone<sup>*</sup></label>
                        <input type='tel' name='phone' id='phone'
                            {...formik.getFieldProps("phone")}
                            style={formik.touched.phone && formik.errors.phone ? { borderColor: "red" } : {}} />
                        <div className='form-error-message'>{formik.touched.phone && formik.errors.phone}</div>
                    </div>
                </div>
                <div className='field-row'>
                    <div className='field'>
                        <label htmlFor='comment'>Comment</label>
                        <textarea name='comment' id='comment' rows="4"
                            {...formik.getFieldProps("comment")} />
                        <div className='form-error-message'>{formik.touched.comment && formik.errors.comment}</div>
                    </div>
                </div>
            </fieldset>
            <button type='submit' className='btn-reserve'>Reserve A Table</button>
        </form>
    )
}

export default BookingForm