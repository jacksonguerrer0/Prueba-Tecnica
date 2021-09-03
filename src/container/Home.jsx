import React,{ useEffect, useState } from 'react'
import { createGlobalStyle } from 'styled-components'
import { productsFakeStore } from '../helpers/Api'
import { addProduct, deleteProduct, fileUrlCloudinary } from '../helpers/functions'
import { useForm } from '../hooks/useForm'
import { ContainerHome } from './home-style/HomeStyled'

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0; 
        padding: 0;
        box-sizing: border-box;
    }
`
const Home = () => {
    const [products, setProducts] = useState([])
    const [ values, handleInputChange, reset] = useForm({
        title: ''
    })
    const {title} = values;

    const handleDeleteProduct = (id) => {
        setProducts(deleteProduct(products, id))
    }

    let file = [];
    const handleFile = (e) => {
        file = e.target.files[0]
    }
    const handleSubmitProduct  = (e) => {
        e.preventDefault()
        setProducts(addProduct(products, title, file))
        // addProduct(products, title, file)
    }
    useEffect( () => {
        productsFakeStore().then(data => setProducts(data))
    }, [setProducts])
    return (
        <>
        <GlobalStyle />
        <ContainerHome>
            <header>
                <h1>Productos by Jack</h1>
            </header>
            <aside>
                <form onSubmit={handleSubmitProduct}>
                    <input 
                    type="file" 
                    placeholder='Imagen del producto' 
                    name='file'
                    onChange={handleFile}
                    required/>
                    <input 
                    type="text" 
                    placeholder='Nombre del producto' 
                    name='title'
                    onChange={handleInputChange}
                    required/>
                    <button type='submit'>Agregar</button>
                </form>
            </aside>
            <section>
                {
                    products?.map((ele, i) => (
                        <div key={i} className='cardProduct'>
                            <img src={ele?.image} alt={ele.title} />
                            <p>{ele.title}</p>
                            <div>
                                <button>Editar</button>
                                <button 
                                onClick={() => { handleDeleteProduct(ele.id)}}>Eliminar</button>
                            </div>
                        </div>
                    ))
                }
            </section>
        </ContainerHome>
        </>
    )
}

export default Home
