import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { LoginPage, RegisterPage } from '../auth'

export const AppRouter = () => {

    return (
        
        <>
            <Routes>
                <Route path='login' element={ <LoginPage /> } />
                <Route path='register' element={ <RegisterPage /> } />
                <Route path='/*' element={ <LoginPage /> } />
            </Routes>
        </>

    )
    
}
