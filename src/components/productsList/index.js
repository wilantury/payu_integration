import React from 'react'
import { Products } from '../productCard'
import { ListContainer } from './styles'

const products = [
    {
        id:1,
        name: "Iphone 12",
        qty: 10,
        price: 2000,
        image: "https://images.freeimages.com/images/large-previews/5fb/wool-1-1530392.jpg"
    },
    {
        id:2,
        name: "Iphone 10",
        qty: 9,
        price: 2400,
        image: "https://images.freeimages.com/images/large-previews/5fb/wool-1-1530392.jpg" 
    },
    {
        id:3,
        name: "Samsung galaxy 12",
        qty: 8,
        price: 2200,
        image: "https://images.freeimages.com/images/large-previews/5fb/wool-1-1530392.jpg" 
    },
    {
        id:4,
        name: "Samsung galaxy 10",
        qty: 5,
        price: 2100,
        image: "https://images.freeimages.com/images/large-previews/5fb/wool-1-1530392.jpg" 
    },
    {
        id:5,
        name: "Laptop Toshiba",
        qty: 2,
        price: 2900,
        image: "https://images.freeimages.com/images/large-previews/5fb/wool-1-1530392.jpg" 
    },
    {
        id:6,
        name: "Keyboard",
        qty: 12,
        price: 2800,
        image: "https://images.freeimages.com/images/large-previews/5fb/wool-1-1530392.jpg"
    }
]

export const ProductsList = ()=>{

    return (
        <ListContainer>
            {products.map( product => <Products key= {product.id} product={product} />)}
        </ListContainer>
    )
}