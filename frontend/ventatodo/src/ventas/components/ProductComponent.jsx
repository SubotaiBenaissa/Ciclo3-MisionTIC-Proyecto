import React from 'react'
import { Link } from 'react-router-dom'

export const ProductComponent = ({ 
    id,
    nombre,
    descripcion,
    precio,
    ciudad,
    cantidad_unidades,
    usuario,
    categoria
 }) => {

    return (
        
        <div className="row rows-cols-1 row-cols-md-3 g-3 mb-3">
            <div className="col">
                <div className="card animate__animated animate__fadeIn">
                    <div className="row no-gutters">
                        <div className="col-4">
                            <img src="https://www.eoi.es/blogs/juanadoricelcepeda/files/2012/01/im1.jpg" alt="Producto" className="card-img" />
                        </div>
                        <div className="col-8">
                            <div className="card-body">
                                <h4 className="card-title">{ nombre }</h4>
                                <p className="card-text"> { descripcion } </p>
                                <p className="card-text">{ ciudad }</p>
                                <p className="card-text">${ precio }</p>
                                <Link to={'#'}>Ver producto</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}
