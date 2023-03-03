import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const ReservationSection = () => {

    const minDate = new Date().toISOString().split("T")[0];

    const phoneNoRegex = /^\(?([0-9]{3})\)?[- ]?([0-9]{7})$/;

    const formik = useFormik({
        initialValues: {
            fname: "",
            lname: "",
            date: "",
            time: "",
            people: "",
            email: "",
            phone: "",
            comment: "",
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validationSchema: Yup.object({
            fname: Yup.string().required("Required"),
            lname: Yup.string().required("Required"),
            date: Yup.date().required("Required").min(minDate),
            time: Yup.string().required("Required"),
            email: Yup.string().email("Invalid email address").required("Required"),
            phone: Yup.string().matches(phoneNoRegex, "Phone number is not valid").required("Required"),
        })
    });

    return (
        <div className='section-reservation'>
            <div className='wrapper'>
                <div className='container-reservation'>
                    <h2>Reservation</h2>
                    <form className='reservation-form' onSubmit={formik.handleSubmit}>
                        <fieldset className='reservation-fieldset'>
                            <div className='field-row'>
                                <div className='field'>
                                    <label htmlFor='date'>Date<sup>*</sup></label>
                                    <input type='date' name='date' id='date' min={minDate}
                                        {...formik.getFieldProps("date")} />
                                    <div className='form-error-message'>{formik.touched.date && formik.errors.date}</div>
                                </div>
                                <div className='field'>
                                    <label htmlFor='time'>Time<sup>*</sup></label>
                                    <input type='time' name='time' id='time'
                                        {...formik.getFieldProps("time")} />
                                    <div className='form-error-message'>{formik.touched.time && formik.errors.time}</div>
                                </div>
                            </div>
                            <div className='field-row'>
                                <div className='field'>
                                    <label htmlFor='people'>People<sup>*</sup></label>
                                    <select name='people' id='people' placeholder='Choose'
                                        {...formik.getFieldProps("people")}>
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
                                        {...formik.getFieldProps("fname")} />
                                    {formik.touched.fname && formik.errors.fname}
                                </div>
                                <div className='field'>
                                    <label htmlFor='lname'>Last Name<sup>*</sup></label>
                                    <input name='lname' id='lname'
                                        {...formik.getFieldProps("lname")} />
                                    {formik.touched.lname && formik.errors.lname}
                                </div>
                            </div>
                            <div className='field-row'>
                                <div className='field'>
                                    <label htmlFor='email'>Email<sup>*</sup></label>
                                    <input type='email' name='email' id='email'
                                        {...formik.getFieldProps("email")} />
                                    {formik.touched.email && formik.errors.email}
                                </div>
                                <div className='field'>
                                    <label htmlFor='phone'>Phone<sup>*</sup></label>
                                    <input type='tel' name='phone' id='phone'
                                        {...formik.getFieldProps("phone")} />
                                    {formik.touched.phone && formik.errors.phone}
                                </div>
                            </div>
                            <div className='field-row'>
                                <div className='field'>
                                    <label htmlFor='comment'>Comment<sup>*</sup></label>
                                    <textarea name='comment' id='comment' rows="4"
                                        {...formik.getFieldProps("comment")} />
                                    {formik.touched.comment && formik.errors.comment}
                                </div>
                            </div>
                        </fieldset>
                        <button type='submit' className='btn-reserve'>Reserve A Table</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ReservationSection