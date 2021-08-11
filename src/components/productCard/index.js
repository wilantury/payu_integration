import { BiStore, BiUserCircle, BiCartAlt } from 'react-icons/bi';
import React from 'react';
import { CardWrapper, Img, AddListWrapper } from './styles'


export const Products = ( props ) => {
    const { product } = props;
    return (
        <CardWrapper>
            <Img src={product.image}>
            </Img>
            <h3>{product.name}</h3>
            <h4>Cantidad: {product.qty}</h4>
            <h4>Precio: {product.price}</h4>
            <AddListWrapper>
                <input type="number" placeholder="1"></input>
                <button>Agregar</button>
            </AddListWrapper>     
        </CardWrapper>
    )
}