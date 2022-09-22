import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { FooterComponent, NavbarComponent } from '../../ui'
import { ProductPage, ProductsPage } from '../pages'

export const VentasRouter = () => {

    return (
        
        <>
            <NavbarComponent />
            <div className="container">
                <Routes>
                    <Route path="/" element={ <ProductsPage /> } />
                    <Route path="producto" element={ <ProductPage /> } />
                </Routes>
            </div>
            <FooterComponent />
        </>

    )

}
