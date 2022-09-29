import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { CategoryComponent } from '../components'

export const CategoryPage = () => {

    const [categorias, setCategorias] = useState([])

    useEffect( () => {

        Axios.get("http://127.0.0.1:8000/api/categoria/")
        .then(response => {
            setCategorias(response.data)
        })

    }, [setCategorias]);

    return (
        
        <section className="vh-100 gradient-custom">
            <h1 className="mt-4">Categorias</h1>
            <hr />
            <div className="row rows-cols-1 row-cols-md-3 g-3 mb-3">
                {
                    categorias.map( (categs) => (
                        <CategoryComponent key={categs.id} {...categs}/>
                    ) )
                }
            </div>
        </section>

    )

}
