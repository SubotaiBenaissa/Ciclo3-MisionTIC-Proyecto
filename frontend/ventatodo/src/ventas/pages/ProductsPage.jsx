import React from 'react'
import { ProductComponent } from '../components'
import { useState, useEffect } from 'react'
import Axios from 'axios'

export const ProductsPage = () => {

    const [productos, setProductos] = useState([])

    useEffect( () => {

        Axios.get("http://127.0.0.1:8000/api/productos/")
        .then(response => {
            setProductos(response.data)
        })

    }, [productos]);

    return (
        
        <section className="vh-100 gradient-custom">
            <h1 className="mt-4">Productos</h1>
            <hr />
            <div className="row rows-cols-1 row-cols-md-3 g-3 mb-3">
                {
                    productos.map( (prod) => (
                        <ProductComponent key={prod.id} {...prod}/>
                    ))
                }
            </div>
        </section>

    )
    
}
