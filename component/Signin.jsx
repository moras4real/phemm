"use client"
import React, { createContext } from 'react'
import Navbar from "./Navbar"
import style from '../styles/Navbar.module.css'
import Endline from "./Endline"
import { useFormik } from 'formik'
import * as Yup from "yup"


const Signin = () => {
    let formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },

        validationSchema: Yup.object({
            email: Yup.string().required("This field is required"),
            password: Yup.string().required("This field is required")
        }),
        
    })

  return (
    <>
        <Navbar/>
        <div className={style.lovfixed}>

            <div className="col-lg-5 col-md-12 col-sm-12  mt-5  text-center mx-auto pe-3 ps-3">
                <h1 className="text-primary text-decoration-underline ">Sing-In</h1>

                <form action="" onSubmit={formik.handleSubmit}>
                    <div className="my-2 mt-4">
                        <input
                            type="email"
                            placeholder="Type Email here"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={formik.touched.email && formik.errors.email ? "form-control is-invalid" : "form-control"}
                            value={formik.values.email}
                            name="email"
                        />
                    </div>
                    <small className="text-danger">{formik.touched.email && formik.errors.email}</small>

                    <div className="my-2">
                        <input
                            type="password"
                            placeholder="Type Password here"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={formik.touched.password && formik.errors.password ? "form-control is-invalid" : "form-control"}
                            value={formik.values.password}
                            name="password"
                        />
                    </div>
                    <small className="text-danger">{formik.touched.password && formik.errors.password}</small>    
                    
                    <div>
                        <div className="mt-5"></div>
                        <button className="btn btn-primary">Log In</button>                        
                    </div>

                </form>

            </div>
        </div>

        <div className={style.lovsignin}>
            <Endline/>
        </div>
    </>
  )
}

export default Signin