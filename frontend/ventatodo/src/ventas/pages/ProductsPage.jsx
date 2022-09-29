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

    }, [setProductos]);

    return (
        
        <>
            <h1 className="mt-4">Productos</h1>
            <hr />
            {
                productos.map( (prod) => (
                    <ProductComponent key={prod.id} {...prod}/>
                ))
            }
        </>

    )
    
}
