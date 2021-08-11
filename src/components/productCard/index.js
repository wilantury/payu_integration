import { BiStore, BiUserCircle, BiCartAlt } from 'react-icons/bi';
import React from 'react';
import { CardWrapper, Img, AddListWrapper } from './styles'


export const Products = () => {
    
    return (
        <CardWrapper>
            <Img src="https://images.freeimages.com/images/large-previews/5fb/wool-1-1530392.jpg">
            </Img>
            <h3>Iphone 12</h3>
            <h4>Cantidad: 10</h4>
            <AddListWrapper>
                <input type="number" placeholder="1"></input>
                <button>Agregar</button>
            </AddListWrapper>     
        </CardWrapper>
    )
}