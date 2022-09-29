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
        
        <>
            <h1 className="mt-4">Categorias</h1>
            <hr />
            {
                categorias.map( (categs) => (
                    <CategoryComponent key={categs.id} {...categs}/>
                ) )
            }
        </>

    )

}
