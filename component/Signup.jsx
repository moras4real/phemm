"use client"
import React, { createContext } from 'react'
import Navbar from "../component/Navbar"
import style from '../styles/Navbar.module.css'
import Endline from "../component/Endline"
import { useFormik } from 'formik';
import * as Yup from 'yup'

const Signup = () => {
    let lower = new RegExp(`(?=.*[a-z])`);
    let upper = new RegExp(`(?=.*[A-Z])`);
    let number = new RegExp(`(?=.*[0-9])`);
    let length = new RegExp(`(?=.{9,})`);
    
    
    let formik = useFormik({
        initialValues : {           
            firstname: '',
            lastname: '',
            email: '',
            phone: '', 
            password: ''
        },
       

        validationSchema: Yup.object({
            firstname: Yup.string()
                .matches(/^[a-z]+$/i, "Must be at least 2 characters")
                .required("This field is required"),
            lastname: Yup.string()
                .matches(/^[a-z]+$/i, "Must be at least 2 characters")
                .required("This field is required"),
            phone: Yup.string()
                .matches(/^[\d]{10}$/, "Must be a valid phone number")
                .required("This field is required"),
            email: Yup.string()
                .required("This field is required")
                .email("Please enter a valid email address"), 
            password: Yup.string()
                .matches(lower, "Must include lowercase letter")
                .matches(upper, "Must include uppercase letter")
                .matches(number, "Must include a number")
                .matches(length, "Must be at least 9 characters") 
                .required("This field is required")
        }),       
      })


  return (
    <>
        <Navbar/>
        <div className={style.lovfixed}>
            <div className="col-lg-5 col-md-12 col-sm-12  mt-5  text-center mx-auto ps-3 pe-3 ">
                    <h1 className="text-primary text-decoration-underline ">Sing-Up</h1>

                    <form action="" onSubmit={formik.handleSubmit}>
                        <div className="my-2 mt-4">
                            <input type="text" placeholder='Type Firstname here' onChange={formik.handleChange} onBlur={formik.handleBlur} className={formik.touched.firstname && formik.errors.firstname ? "form-control is-invalid" : "form-control"} value={formik.values.firstname} name='firstname' />
                            <small className="text-danger">{formik.touched.firstname && formik.errors.firstname}</small>
                        </div>

                        <div className="my-2 ">
                            <input type="text" placeholder='Type Lastname here' onChange={formik.handleChange} onBlur={formik.handleBlur} className={formik.touched.lastname && formik.errors.lastname ? "form-control is-invalid" : "form-control"} value={formik.values.lastname} name='lastname' />
                            <small className="text-danger">{formik.touched.lastname && formik.errors.lastname}</small>
                        </div>

                        <div className="my-2 ">
                            <input type="text" placeholder='Phone number' onChange={formik.handleChange} onBlur={formik.handleBlur} className={formik.touched.phone && formik.errors.phone ? "form-control is-invalid" : "form-control"} value={formik.values.phone} name='phone' />
                            <small className="text-danger">{formik.touched.phone && formik.errors.phone}</small>
                        </div>

                        <div className="my-2 ">
                            <input type="email" placeholder='mail@gmail.com' onChange={formik.handleChange} onBlur={formik.handleBlur} className={formik.touched.email && formik.errors.email ? "form-control is-invalid" : "form-control"} value={formik.values.email} name='email' />
                            <small className="text-danger">{formik.touched.email && formik.errors.email}</small>
                        </div>

                        <div className="my-2">
                            <input type="password" placeholder='*********' onChange={formik.handleChange} onBlur={formik.handleBlur} className={formik.touched.password && formik.errors.password ? "form-control is-invalid" : "form-control"} value={formik.values.password} name='password' />
                            <small className="text-danger">{formik.touched.password && formik.errors.password}</small>
                        </div>

                        <div className="my-2 w-100">
                            <button className="btn btn-primary w-100">SUBMIT</button>
                        </div>
                    </form>
            </div>
        </div>   

        <div className={style.lovfixed}>
        <Endline/>
        </div>     
    </>
  )
}

export default Signup