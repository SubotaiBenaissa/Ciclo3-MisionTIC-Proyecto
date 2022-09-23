import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { FooterComponent, NavbarComponent } from '../../ui'
import { ProductPage, ProductsPage } from '../pages'
import '../styles/styles.css'

export const VentasRouter = () => {

    return (
        
        <div className="div-background">
            <NavbarComponent />
            <div className="container">
                <Routes>
                    <Route path="/" element={ <ProductsPage /> } />
                    <Route path="producto" element={ <ProductPage /> } />
                </Routes>
            </div>
            <FooterComponent />
        </div>

    )

}
